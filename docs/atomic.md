# Atomic Commits

Commit frequently but with purpose.  This naturally results in
concise, but not necessarily short, commit messages and makes code
reviews more efficient.  Refer to
["Make Atomic Git Commits"](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits/)
and ["Atomic Commits"](https://nrempel.com/blog/atomic-commits/) for
additional guidance.

## Single Unit of Work

Each commit **MUST** represent one and only one change following the
[single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle).
A commit **MAY** include edits to multiple files, but these edits
**MUST** share the same reason or purpose.  The commit **MUST** be
able to be reverted without causing
[side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)).

## Level of Effort

A commit **SHOULD** correspond to one and only one Agile task,
representing at most eight (8) hours of effort.
