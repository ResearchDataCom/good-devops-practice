# Conventional Commits

Customers rely on change logs to track modifications to their products
and services.  To provide this reporting capability, all projects
**MUST** adopt
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
with the following addenda.

## Language

Commit messages **SHOULD** be written in English using 7-bit ASCII
encoding.  Other languages or encodings may be used depending on
customer requirements.  Regardless of the language, commit messages
should be otherwise grammatically correct.

## Line Lengths

The first line of the commit message **MUST NOT** exceed 100
characters in length.

Subsequent lines **SHOULD NOT** be longer than 70 characters.

## Descriptions

A commit's description **MUST** be a verb phrase in the imperative
present tense, with the starting verb in lower case and no ending
punctuation.  This facilitates the automatic generation of change logs
from the repository's commit history.  Each commit's description
becomes a bullet point in a report summarizing the changes that lead
to a specific release.

## Types

Valid commit types include:

`build`
: a change to the build system or external dependencies, e.g., the
  makefile

`chore`
: a miscellaneous tooling or tool configuration change, e.g., the
  .gitignore file, or a change not covered by the other commit types

`ci`
: a change to continuous integration/continuous delivery (CI/CD)
  processes, e.g., GitHub Actions

`docs`
: a documentation-only change, including edits to in-line
  documentation and comments

`feat`
: a new feature

`fix`
: a bug fix

`perf`
: a code change that improves performance

`refactor`
: a code change that neither fixes a bug nor adds a feature

`style`
: a change that only affects formatting, or a change related to the
  linter configuration

`test`
: a new test or a correction to an existing test

## Scopes

An [atomic commit](atomic) can alter multiple files.  For example, an
interface change would require modifications the class definitions,
method calls, and property references throughout the codebase.  Per
_Conventional Commits_, a commit scope is an **OPTIONAL**
abbreviation, acronym, codename, or keyword that provides additional
context to reviewers by naming the essential component of the change.

- For OpenTofu resource definition changes, the commit scope
  **SHOULD** specify the OpenTofu submodule containing the code
  instigating the change.

- For Python code changes, the commit scope **SHOULD** specify the
  second-level Python module name of the code instigating the change.
  The commit scope **MUST NOT** include the module's top-level prefix
  or any suffixes.

Functional/unit test changes **SHOULD** reference the scope of the
code being exercised, while changes to integration tests **MUST NOT**
specify a scope.

Changes covering multiple scopes or changes not specific to one scope
**MUST NOT** specify a scope, such as changes instigated by code in
top-level OpenTofu resource definitions like `main.tf` or in
second-level Python [dunder](https://wiki.python.org/moin/DunderAlias)
modules such as `src/example/__init__.py`.
