# gitlab-ci-lint

Gitlab-ci cli to lint .gitlab-ci.yml files

## Usage

### Install
```Shell
npm install -g gitlab-ci-lint
```

### CLI
```
  Usage: gitlab-ci-lint [options] <file>

  Options:

    -h, --help       output usage information
    -V, --version    output the version number
    -u, --url [URL]  Use alternative Gitlab URL
```

#### examples
* `.gitlab-ci.yml` is in the current directory
```
gitlab-ci-lint
```

* Alternative file
```
gitlab-ci-lint <filename>
```

* Alternative Gitlab url
```
gitlab-ci-lint --url https://git.my.corp
```

### API

```
const gitlabCILint = require('gitlab-ci-lint')

gitlabCILint.lintFile('.gitlab-ci.yml')
  .then((result) => console.log(result))
```
