import { Handler } from '@netlify/functions'
import fetch from 'node-fetch'

const handler: Handler = async (event, context) => {

  let url = "https://api.github.com/users/akramh";
  const resp = await fetch(url);
  const data = await resp.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

export { handler }