import { expect } from 'chai'
import path from 'path'

import * as gitlabCILint from '../'

describe('When file is valid', () => {
  it('returns valid status', () => gitlabCILint.lintFile(path.join(__dirname, 'good-gitlab-ci.yml'))
    .then((result) => {
      expect(result.status).to.equal('valid')
    }))
  it('returns no errors', () => gitlabCILint.lintFile(path.join(__dirname, 'good-gitlab-ci.yml'))
    .then((result) => {
      expect(result.errors).to.have.lengthOf(0)
    }))
})

describe('When file is invalid', () => {
  it('returns invalid status', () => gitlabCILint.lintFile(path.join(__dirname, 'bad-gitlab-ci.yml'))
    .then((result) => {
      expect(result.status).to.equal('invalid')
    }))
  it('returns one error', () => gitlabCILint.lintFile(path.join(__dirname, 'bad-gitlab-ci.yml'))
    .then((result) => {
      expect(result.errors).to.have.lengthOf(1)
      expect(result.errors[0]).to.equal('jobs:job:variables config should be a hash of key value pairs')
    }))
})
