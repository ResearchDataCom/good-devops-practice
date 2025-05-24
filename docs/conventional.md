# Conventional Commits

Customers rely on change logs to track modifications to their products
and services.  To provide this reporting capability, all projects
**MUST** adopt
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
with the following addenda; cf. [Semantic Versioning](semver) and
[Linting](linting).


## Language

Commit messages **SHOULD** be written in English using 7-bit ASCII
encoding.  Other languages or encodings **MAY** be used depending on
customer requirements.  Regardless of the language, commit messages
**SHOULD** be otherwise grammatically correct.


## Line Lengths

The first line of the commit message **MUST NOT** exceed 100
characters in length.  Subsequent lines **SHOULD NOT** be longer than
70 characters.


## Descriptions

A commit's description **MUST** be a verb phrase in the imperative
present tense, with the starting verb in lower case and no ending
punctuation.  This facilitates the automatic generation of change logs
from the repository's commit history.  Each commit's description
becomes a bullet point in a report summarizing the changes that lead
to a specific release.


## Types

Valid commit types include:

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

{.glossary}
`feat`
: a new feature

{.glossary}
`fix`
: a bug fix

{.glossary}
`perf`
: a code change that improves performance

{.glossary}
`refactor`
: a code change that neither fixes a bug nor adds a feature

{.glossary}
`style`
: a change that only affects formatting, or a change related to the
  [linter](linting) configuration

{.glossary}
`test`
: a new test or a correction to an existing test


## Scopes

An [atomic commit](atomic) can alter multiple files.  For example, an
interface change would require modifications not to only a class
definition but also to method calls throughout the codebase.  A
commit's scope is an **OPTIONAL** abbreviation, acronym, codename, or
keyword that provides additional context to reviewers by naming the
essential component of the change.

Changes covering multiple scopes or changes not specific to one scope
**MUST NOT** specify a scope.

For Python projects, a commit's scope **SHOULD** be the second-level
Python module name sans the top-level prefix or any suffixes.  For
[dunder](https://wiki.python.org/moin/DunderAlias) modules, use their
names sans underscores.  For example:

- Given a class definition change in
  `src/updoot_inator/schemas/zoo.py` that requires corresponding
  changes to `src/updoot_inator/cli/import.py`,
  `src/updoot_inator/test/test_schemas_zoo.py`, and
  `src/updoot_inator/test/test_cli_zoo.py`, the commit's scope would
  be **schemas**.

- Given a change to the program entry point in
  `src/updoot_inator/__main__.py`, the commit’s scope would be
  **main**.
