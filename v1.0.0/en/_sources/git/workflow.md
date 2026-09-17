# Feature Branch Workflow

Encapsulate development work in dedicated, temporary branches of a Git
repository.  The main branch of the repository only contains
known-good source code or configuration files, and the head of the
main branch always matches the latest release or live deployment.

## Linear Commit History

:::{admonition} Guidance

Developers **MUST** maintain the linear commit history of a Git
repository as this simplifies code review and facilitates root cause
analysis.  Merge commits **MUST NOT** be used as they can hide risky
code changes.  Squash commits **SHOULD NOT** be used, either, as they
discard historical context useful during root cause analysis.

:::

Always use the `--ff-only` option to the `git merge` and `git fetch`
commands.  Likewise, always use `--rebase` option to the `git pull`
command, or set `pull.rebase` to `true` in the Git configuration.

## The Main Branch

:::{admonition} Guidance

The main branch of a Git repository **MUST** contain only released
software versions or live (production) system definitions.

:::

The main branch does not contain work in progress except during
initial development, prior to the project's initial release or
deployment.

## The Head of the Main Branch

:::{admonition} Guidance

The latest commit (or head) of the main branch of the Git repository
**MUST** be the project's latest release or current (active)
configuration.

:::

For infrastructure-as-code projects, staff should be able to redeploy
a service from scratch given the head of the main branch of the Git
repository, the service's secrets and other runtime configuration
parameters, and a recent copy of the service's persistent data
storage.

## Feature Branches

:::{admonition} Guidance

All changes to published software or live services **MUST** be
developed and tested in branches starting from the then-current head
of the main branch of the project's Git repository.

:::

Limit a feature branch to a single [deliverable](wiki:deliverable).
The branch name succinctly describes the work, e.g., `stepup-mfa`,
`mfa-enforcement-fixes`.  Git supports multiple feature branches being
worked simultaneously.  To reduce the likelihood of a merge conflict
synchronize the main branch with the authoritative repository[^origin]
before creating a new feature branch, and configure
[remote tracking](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches)
immediately after:

[^origin]: By default, clones of the authoritative repository call it
    the `origin`
    [remote repository](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

```sh
git checkout main
git pull --rebase origin main
git checkout -b new-feature
git push origin new-feature
```

## Moving Work in Progress to a Feature Branch

:::{admonition} Guidance

If work in progress was mistakenly pushed to the main branch of the
authoritative repository, the functional or task area lead **MUST** be
notified within one (1) hour.  No further action **SHALL** be taken
except at their direction.

:::

If instead the work in progress was mistakenly committed to the main
branch but _not yet_ pushed to the authoritative repository, move the
work in progress to a feature branch:

1. Record the state of the working directory, preserving any new work
   or uncommitted changes.

```sh
git stash push --all --message WIP
```

2. Create a new feature branch from the current head of the main
   branch.

```sh
git checkout -b new-feature
```

3. Reset the main branch.  In the commands shown below, change
   `original-head` to a revision parameter specifying the latest
   approved release or configuration.  The revision parameter could be
   a tag like `v1.1.0`, a symbolic reference like `HEAD~3`, or a
   commit object like `a1b2c3d4`.  For more information, refer to
   ["Specifying Revisions" in the `git rev-parse` command documentation](https://git-scm.com/docs/git-rev-parse).

```sh
git checkout main
git reset --hard original-head
```

4. Switch back to the new feature branch, and upload it to the
   authoritative repository.

```sh
git checkout new-feature
git push origin new-feature
```

5. Restore the new work or uncommitted changes saved at the beginning
   of this process.

```sh
git stash pop
```

## Updating a Feature Branch

:::{admonition} Guidance

Merge commits **MUST NOT** be used as they can hide risky code
changes.  Squash commits **SHOULD NOT** be used, either, as they
discard historical context useful during
[root-cause analysis](wiki:Root-cause_analysis).

:::

Because Git supports work occurring simultaneously in the same branch
of multiple clones of a repository, the original head of a feature
branch can eventually no longer be the head of the corresponding
remote-tracking branch.  Pushing changes commited to the feature
branch without accounting for recent changes to the remote-tracking
branch would effectively delete other developers' work from the Git
repository.  By default, Git will handle this situation by creating a
merge commit and prompting the user to fix any conflicts (when the
same file was modified in both branches).

Instead, rebase the feature branch on the head of the remote-tracking
branch prior to merging to preserve the linear commit history of the
Git repository:

1. Synchronize the feature branch with the remote-tracking branch.

```sh
git pull --rebase origin new-feature
```

2. [Address any merge conflicts.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)

3. Update the remote-tracking branch.

```sh
git push --force-with-lease origin new-feature
```

## Merging a Feature Branch

:::{admonition} Guidance

Merging a feature branch with the main branch, thereby releasing a new
software version or changing a live service's configuration, **MUST**
be approved by the Change Advisory Board.

:::

Because Git supports work occurring simultaneously in multiple
branches of a repository, the starting commit of a feature branch may
eventually no longer be the head of the main branch.  Merging a
feature branch without accounting for recent changes to the main
branch would effectively delete delivered code or approved changes
from the Git repository.  By default, Git will handle this situation
by creating a merge commit and prompting the user to fix any conflicts
(when the same file was modified in both branches).

Instead, rebase the feature branch on the head of the main branch
prior to merging to preserve the linear commit history of the Git
repository:

1. Synchronize the main branch with the authoritative repository.

```sh
git checkout main
git pull --rebase origin main
```

2. As a precaution, re-synchronize the feature branch with the
   authoritative repository.

```sh
git checkout new-feature
git pull --rebase origin new-feature
```

3. Rebase the feature branch on the main branch.

```sh
git rebase main
```

4. [Address any merge conflicts.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)

5. Update the remote-tracking branch.

```sh
git push --force-with-lease origin new-feature
```

6. Prune the merged feature branch.

```sh
git branch --delete new-feature
git push --delete origin new-feature
```

7. Tag the new head of the main branch with the new version number.
   This process may be automatic.  For more information, refer to
   [Continuous Integration](../build/index).

8. In clones of the authoritative repository, update the main branch
   and release tags, and prune merged feature branches.

```sh
git checkout main
git pull --rebase origin main
git fetch --prune --tags
```
