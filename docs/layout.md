# Git Repository Layout

A project **MAY** create one or more versioned artifacts.  Changes to
versioned project materials **MUST** be tracked using
[Git](https://git-scm.com/), a free and open source distributed
version control system.

Developers **MAY** use a
[GitHub template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
in the target organization.  Refer to the template repository's
documentation for further instructions.

## The Repository Name

A project under version control **MUST** have a short, unique,
descriptive, human-readable identifier.

The repository name **SHOULD** be written using unaccented lower case
letters and dashes in the 7-bit ASCII character encoding.  Other
characters, including underscores, upper case letters, accents,
special characters, or emojis, **SHOULD NOT** be used to facilitate
cross-platform compatibility.

The repository name **MUST NOT** include a version number;
cf. [Release Engineering](releng).

The repository name **MAY** be composed of multiple terms.  It
**SHOULD NOT** use more than three terms.  Multiple terms **SHOULD**
be separated using dashes, e.g., `updoot-inator`, which is easier to
read than if the terms were catenated.

The repository name **SHOULD** use neutral language to describe the
project instead of abbreviations that may not be understood by all
audiences.

The repository name **SHOULD NOT** use pronouns, e.g.,
`my-updoot-inator`, as projects are intrinsically shared works.

## The Repository Description

The repository **MUST** have a short but concise summary of its
function or purpose.  This summary **MUST** be used to describe the
authoritative repository.

## The Authoritative Repository

The authoritative copy of a Git repository **MUST** be hosted by a
company- or client-approved Git server.  Clones of this repository
**SHOULD** refer to the authoritative repository as the `origin`
remote, following community convention and for simplicity's sake.

## The Main Branch

The main (or primary) branch of a Git repository **MUST** be called
`main`.  Pre-existing Git repositories **MAY** use a different name
for this branch (e.g., `develop`, `master`), but this branch
**SHOULD** be renamed `main`.  For simplicity's sake, the rest of this
document assumes the main branch is called `main`.

## Project Summary

The repository **MUST** include a top-level
[Markdown document](markdown) named `README.md` that gives a brief
overview of the project.  The document **MUST** start with a level-1
heading containing the repository name, an single blank line, and the
repository description.  The rest of document **SHOULD** include quick
reference material or abbreviated deployment guidance.

## Contribution Guidelines

The repository **MUST** include a top-level Markdown document named
`CONTRIBUTING.md` that summarizes how developers work together on the
project.  The document **MUST** start with the level-1 heading
`Contribution Guidelines`, a single blank line, and a short summary of
the project development workflow.  It **SHOULD** tailor this
document's guidance regarding [Conventional Commits](conventional),
such as specifying active scopes.  It **SHOULD** link to project
documentation in a Markdown document named `docs/contributing.md` that
recapitulates this guidance and provides more detailed instructions.
Regardless of its location, developer guidance **MUST** specify the
development environment and explain the release engineering process.

The repository **SHOULD** include a top-level [makefile](makefile)
named `GNUmakefile` that scripts common developer workflows, including
development environment setup, [linting](linting), [testing](testing),
[packaging](releng), and deployment.  Make targets **SHOULD** be
detailed in the contribution guidelines.
