# Semantic Versioning

All projects **MUST** implement
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) using
[Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
Version numbers tell deployers how risky changes might be.  Breaking
changes---whether new features or fixes---increment the major version
number and reset the minor and patch versions.  New
backwards-compatible features increment the minor version number and
reset the patch version without altering the major version number.
Fixes only increment the patch version number.  Commit types other
than `feat` or `fix` **SHOULD NOT** increment the version number.
Version number calculations **SHOULD** be automated.  Refer to
[Release Engineering](releng) for further guidance.

:::{table} Commit History Drives Version Numbering
:align: center

| Commit Message                         | Old Version | New Version |
|:---------------------------------------|-------------|-------------|
| feat!: automate database migrations    | 3.2.1       | 4.0.0       |
| feat: init/update database at startup  | 4.0.0       | 4.1.0       |
| fix: make system state fields optional | 4.1.0       | 4.1.1       |

:::

## The Starting Version Number, the First Commit, and the Initial Release

A project **MUST** start at version `0.0.0`, and the first commit
**MUST** be categorized as a new feature introducing a breaking
change---the developer's first attempt at solving whatever problem
initiated the project.  Further development prior to the initial
release can include additional breaking changes, new features, or
fixes, which naturally leads to the initial release being version
`1.0.0`.
