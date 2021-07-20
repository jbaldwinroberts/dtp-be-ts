import { APIGatewayProxyEvent } from 'aws-lambda'
import handler from './index'

describe('handler', () => {
  it('returns status 200', async () => {
    const response = await handler(
      {} as APIGatewayProxyEvent,
      undefined,
      undefined
    )

    expect(response).toMatchObject({ statusCode: 200 })
  })
})
