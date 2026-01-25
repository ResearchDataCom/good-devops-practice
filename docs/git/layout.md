# Common Repository Layout

All Git repositories share the same basic structure.  Some GitHub
organizations publish
[GitHub template repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
to speed up the product creation or service definition process.  Refer
to the selected template repository's documentation for further
instructions.

## Hosting

:::{admonition} Guidance

The authoritative copy of a Git repository **MUST** be hosted by an
approved Git server.

:::

For company projects, use the
[`ResearchDataCom` organization on GitHub](https://github.com/ResearchDataCom).
For other customers, ask your program manager.

## Naming

:::{admonition} Guidance

A project under version control **MUST** have a short, unique,
descriptive, human-readable identifier using unaccented lower case
letters and dashes in the
[7-bit ASCII encoding](https://www.twilio.com/docs/glossary/what-is-7-bit-encoding).
This identifier **MUST NOT** include a version number.  The identifier
**SHOULD NOT** use pronouns, e.g., `my-example-service`, as product or
services are intrinsically shared works.

:::

Use neutral language to name the project instead of abbreviations that
might not be understood by all audiences.  Limit an identifier
composed of multiple terms to no more than three terms.  Separate
multiple terms using dashes, e.g., `example-service`, which is easier
to read than if the terms were catenated.  Avoid characters that could
affect cross-platform compatibility, including underscores, upper case
letters, accents, special characters, or emojis.

## Description

:::{admonition} Guidance

The project **MUST** have a clear and concise summary of its function
or purpose.

:::

Use this summary to describe the authoritative repository.

## The Main Branch

:::{admonition} Guidance

The main (or primary) branch of a Git repository **MUST** be called
`main`.

:::

If a pre-existing Git repository uses a different name for the main
branch (e.g., `develop`, `master`), rename it if feasible.  For
simplicity's sake, this document assumes the main branch is called
`main`.

## Project Overview

:::{admonition} Guidance

The repository **MUST** include a top-level
[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
document named `README.md` that [summarizes](wiki:README) the project.

:::

That document starts with a level-1 heading containing the repository
name, an single blank line, and the
[repository description](#description).  The rest of document includes
quick reference material or abbreviated deployment guidance.  Refer
the [Markdown style guide](../style/markdown) for further formatting
guidance.

## Contribution Guidelines

:::{admonition} Guidance

The repository **MUST** include a top-level
[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
document named `CONTRIBUTING.md` that summarizes how developers work
together on the project.  It **SHOULD** be no longer than two
paragraphs and end with a link to the
[detailed contribution guidelines](#detailed-contribution-guidelines)
corresponding to the latest release (if defined).

:::

That document starts with the level-1 heading `Contribution
Guidelines`, a single blank line, and a short summary of the project's
development workflow.  It can also tailor this document's guidance,
such as specifying [commit types](conventional#commit-types) and
[scopes](conventional#commit-scopes).  The link to the detailed
contribution guidelines should be a level-3 heading `Refer to the
project documentation for more information.`

## Detailed Contribution Guidelines

:::{admonition} Guidance

Detailed contribution guidelines in a
[MyST Markdown](https://myst-parser.readthedocs.io/) document named
`docs/contributing.md` are **OPTIONAL**.

:::

That document provides a more detailed specification of the project's
development environment, its release engineering process, valid commit
types/scopes, etc.  It also starts with the level-1 heading
`Contribution Guidelines`.

## Build Automation

:::{admonition} Guidance

The repository **SHOULD** include a top-level makefile named
`GNUmakefile` that scripts common developer workflows using
[GNU Make](https://www.gnu.org/software/make/).

:::

These workflows include development environment setup, linting,
testing, packaging, and deployment.  Document targets in the
[detailed contribution guidelines](#detailed-contribution-guidelines).
