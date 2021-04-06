import fs from 'mz/fs'
import rp from 'request-promise'

export function lint (content, baseURL = 'https://gitlab.com', token) {
  const options = {
    uri: `${baseURL}/api/v4/ci/lint`,
    json: true,
    method: 'POST',
    body: {
      content
    }
  }

  if (token !== undefined) {
    options.qs = {
      private_token: token
    }
  }

  return rp(options)
}

export function lintFile (filename, baseURL, token) {
  return fs.readFile(filename).then((data) => lint(data.toString(), baseURL, token))
}
