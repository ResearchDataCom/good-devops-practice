<!---

This work is marked CC0 1.0 Universal.  To view a copy of this mark,
visit https://creativecommons.org/publicdomain/zero/1.0/.

--->

# Commit Messages

Since stakeholders are the ultimate audience of a
[changelog](wiki:changelog), good commit messages do not merely
recapitulate the diff but rather explain why we modified something.

## Syntax

:::{admonition} Guidance

All projects **MUST** adopt
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
with the following addenda.

:::

This facilitates automatic changelog generation.  For example, refer
to [this document's changelog](github:CHANGELOG.md).

## Language

:::{admonition} Guidance

Commit messages **SHOULD** be written in English using
[7-bit ASCII encoding](https://www.twilio.com/docs/glossary/what-is-7-bit-encoding).

:::

Regardless of the language, commit messages should be otherwise
grammatically correct.

## Formatting

:::{admonition} Guidance

Commit messages **MUST** be formatted as
[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
documents.  The first line of the commit message (including the commit
type, scope, and description) **MUST NOT** exceed 100 characters in
length.

:::

Refer the [Markdown style guide](../style/markdown) for further
formatting guidance.

## Descriptions

:::{admonition} Guidance

A commit's description **MUST** be a verb phrase in the imperative
present tense, with the starting verb in lower case and no ending
punctuation.

:::

Each commit's description becomes a bullet point in a report
summarizing the changes incorporated in a specific release.

## Types

:::{admonition} Guidance

Projects **MAY** tailor the list of valid commit types in their
contribution guidelines.

:::

By default, valid commit types include:

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
: a documentation-only change, including edits to example code,
  in-line documentation, and comments

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
  linter configuration

{.glossary}
`test`
: a new test or a correction to an existing test

## Scopes

:::{admonition} Guidance

Projects **MAY** tailor the list of valid commit scopes in their
contribution guidelines.  Functional or unit test changes **SHOULD**
reference the scope of the code being exercised.

:::

An [atomic commit](atomic) can alter multiple files.  Per
_Conventional Commits_, a commit scope is an optional abbreviation,
acronym, codename, or keyword that provides additional context to
reviewers by naming the essential component of the change.  For
example, an interface change would require modifications to method
calls or property references throughout the codebase, so the commit
scope would be the module containing the class definition.

By default, scope commits as follows:

OpenTofu
: The commit scope specifies the OpenTofu submodule containing the
  code instigating the change.

Python
: The commit scope specifies the second-level Python module name of
  the code instigating the change, omitting the module's top-level
  prefix and any suffixes.

## Unscoped Changes

:::{admonition} Guidance

Changes covering multiple scopes or changes not specific to one scope
**MUST NOT** specify a scope.

:::

This includes changes instigated by code in top-level OpenTofu
resource definitions like `main.tf` or in second-level Python
[dunder](https://wiki.python.org/moin/DunderAlias) modules such as
`src/example/__init__.py`.  This also includes integration, system, or
acceptance test changes.
