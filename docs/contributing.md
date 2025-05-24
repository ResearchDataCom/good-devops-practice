# Contributing

This project combines
[atomic commits](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits/),
a [linear commit history](https://archive.is/VpWTs), and the
[Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
Please rebase changes on the latest HEAD of the main branch before
submitting them for review as a
[GitHub pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).


## Development Environment

This project requires Python 3.11 or newer.  To set up your
development environment on Linux or macOS, run these
[GNU Make](https://www.gnu.org/software/make/) commands from the
project root directory.

{.glossary}
`make setup`
: Create (or update) a
  [Python virtual environment](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments)
  named `.venv` in the project root directory and perform an editable
  installation of this project that includes development and testing
  tools.

{.glossary}
`make pre-commit`
: Configure optional pre-commit hooks, which require the virtual
  environment to be active in your code editor or
  [Git porcelain](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain).

{.glossary}
`make clean`
: Reset the development environment, which includes removing the
  pre-commit hooks.

Additional targets are available, several of which are listed below.
Review the makefile for details.

{.glossary}
`make lint`
: Check code syntax and style.


## Code Style

This project follows these code styles:

- [Python Black](https://black.readthedocs.io/)
  and [isort](https://pycqa.github.io/isort/)

- [the Google Markdown style guide](https://google.github.io/styleguide/docguide/style.html),
  but with a more traditional 70-character line limit

- [the Home Assistant YAML style guide](https://developers.home-assistant.io/docs/documenting/yaml-style-guide/)


## Commit Messages

This project implements
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) using
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
Please use English in commit messages.  The first line of the commit
message should be at most 100 characters, while the rest of the commit
message should be wrapped at column 70.  A commit's description should
be a verb phrase in the imperative present tense, with the starting
verb in lower case and no ending punctuation.

Valid commit types are:

{.glossary}
`build`
: a change to the build system or external dependencies, e.g., the
  makefile

{.glossary}
`chore`
: a miscellaneous tooling or tool configuration change, e.g., the
  .gitignore file, or a change not covered by the other commit types

{.glossary}
`ci`
: a change to continuous integration/continuous delivery (CI/CD)
  processes, e.g., GitHub Actions

{.glossary}
`docs`
: a documentation-only change, including edits to in-line
  documentation and comments

:::{hint}
Because this is a documentation project, only use the `docs` commit
type when making changes to project meta-documentation such as
`README.md`.  Use the `feat`, `fix`, `refactor`, and `style` commit
types to describe content edits.
:::

{.glossary}
`feat`
: new content

{.glossary}
`fix`
: a content edit, e.g., correcting a grammar/spelling mistake or a
  factual error

{.glossary}
`refactor`
: an edit that neither makes corrections nor adds content

{.glossary}
`style`
: an edit that only affects formatting, or a change related to the
  [linter](linting) configuration

No commit scopes are currently in use.
