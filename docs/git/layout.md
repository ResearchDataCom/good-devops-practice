# Git Repository Layout

All Git repositories share the same basic structure.  Some GitHub
organizations publish
[GitHub template repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
to speed up the project setup process.  Refer to the selected template
repository's documentation for further instructions.

## The Repository Name

> A project under version control **MUST** have a short, unique,
> descriptive, human-readable identifier.  The repository name **MUST
> NOT** include a version number.  The repository name **SHOULD NOT**
> use pronouns, e.g., `my-example-service`, as projects are
> intrinsically shared works.

Write the repository name using unaccented lower case letters and
dashes in the 7-bit ASCII character encoding.  Avoid characters that
could affect cross-platform compatibility, including underscores,
upper case letters, accents, special characters, or emojis.

Use neutral language to name the project instead of abbreviations that
may not be understood by all audiences.  Limit a repository name
composed of multiple terms to no more than three.  Separate multiple
terms using dashes, e.g., `example-service`, which is easier to read
than if the terms were catenated.

## The Repository Description

> The repository **MUST** have a clear and concise summary of its
> function or purpose.

Use this summary to describe the authoritative repository.

## The Main Branch

> The main (or primary) branch of a Git repository **MUST** be called
> `main`.

If a pre-existing Git repository uses a different name for the main
branch (e.g., `develop`, `master`), rename it if feasible.  For
simplicity's sake, the rest of this document assumes the main branch
is called `main`.

## Project Summary

> The repository **MUST** include a top-level
> [Markdown document](markdown) named `README.md` that gives a brief
> overview of the project.

The document starts with a level-1 heading containing the repository
name, an single blank line, and the repository description.  The rest
of document includes quick reference material or abbreviated
deployment guidance.

## Contribution Guidelines

> The repository **MUST** include a top-level Markdown document named
> `CONTRIBUTING.md` that summarizes how developers work together on
> the project.

This document starts with the level-1 heading `Contribution
Guidelines`, a single blank line, and a short summary of the project
development workflow.  It can tailor this document's guidance
regarding [Conventional Commits](conventional), such as specifying
active scopes.  It ends with a link to project documentation generated
from a Markdown document named `docs/contributing.md`, also titled
`Contribution Guidelines`, that provides a more detailed specification
the development environment and the release engineering process.

## Development Process Automation

> The repository **SHOULD** include a top-level makefile named
> `GNUmakefile` that scripts common developer workflows.

These workflows include development environment setup, linting,
testing, packaging, and deployment.  Make targets are documented in
`docs/contributing.md`.
