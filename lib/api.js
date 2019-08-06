import fs from 'mz/fs'
import rp from 'request-promise'

export function lint (content, baseURL = 'https://gitlab.com') {
  return rp({
    uri: `${baseURL}/api/v4/ci/lint`,
    json: true,
    method: 'POST',
    body: {
      content
    }
  })
}

export function lintFile (filename, baseURL) {
  return fs.readFile(filename).then((data) => lint(data.toString(), baseURL))
}
