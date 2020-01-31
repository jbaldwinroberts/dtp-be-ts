import { APIGatewayProxyEvent } from 'aws-lambda'
import handler from './index'

describe('handler', () => {
  it('returns status 200', async () => {
    const promise = handler({} as APIGatewayProxyEvent, undefined, undefined)

    await expect(promise).resolves.toMatchObject({ statusCode: 200 })
  })
})
