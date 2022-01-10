import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import axios from "axios";

const handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async (
  event: APIGatewayProxyEvent
) => {
  const searchQuery = event.queryStringParameters["query"];
  const searchResult = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&query=${searchQuery}`
  );

  return {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: 200,
    body: JSON.stringify(
      searchResult.data.results.map((r) => ({
        title: r.title,
        id: r.id,
        overview: r.overview,
      }))
    ),
  };
};

export default handler;
