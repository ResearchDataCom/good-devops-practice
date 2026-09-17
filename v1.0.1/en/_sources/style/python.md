# Python Style Guide

This extends [PEP 8](https://peps.python.org/pep-0008/), the Python
community's style guide, and the
[_Python Packaging User Guide_](https://packaging.python.org/).

## Packaging

A Python project **MUST** deliver Python packages with both a source
distribution (sdist) and one or more binary distributions (wheels).
Python packages **MUST** be defined by a `pyproject.toml` file at the
top of the project's source tree; cf. the [TOML Style Guide](toml).
While the sections of a `pyproject.toml` file can appear in any order,
sorting sections alphabetically in decending order is **RECOMMENDED**.

Standalone modules (unpackaged `.py` files) **MAY** be used as code
samples or configuration files.  However, standalone modules **MUST
NOT** be used as project deliverables since they inherently lack the
versioning and dependency metadata required to generate a
[software bill of materials](sbom).

### Build System

A Python project **MUST** use
[setuptools](https://pypi.org/project/setuptools/) version 61 or newer
as the build system.  Project setup scripts and configuration files
such as `setup.py` and `setup.cfg` **SHOULD NOT** be used.

### Project Settings

The following project settings are **REQUIRED**:

`name`
: Package names **MUST** be all lower case, e.g., `mylib`, not
  `MyLib`.  The elements of multipart names **SHOULD** be separated by
  dashes, not underscores, e.g., `updoot-inator`, not `updoot_inator`.

`description`
: This **MUST** match the
  [project description](layout#project-description).

`version`
: A Python project **MUST** use [Semantic Versioning](semver.md).  A
  new Python project **MUST** set the version number to `0.0.0` and
  increment it using
  [python-semantic-release](https://python-semantic-release.readthedocs.io/)
  after merging a [feature branch](features).

`requires-python`
: The minimum supported version of Python **MUST** be specified.  It
  **SHOULD** be no older than the newest Python version with a status
  of `security`.  Note that this requires periodic updates.  For more
  information, refer to
  ["Relieving your Python packaging pain"](https://www.bitecode.dev/p/relieving-your-python-packaging-pain)
  and the
  [Status of Python versions](https://devguide.python.org/versions/).

`classifiers`
: A proprietary Python project **MUST** specify the `"Private :: Do
  Not Upload"` Trove classifier.  Additional classifiers **MAY** be
  specified; cf. [Classifiers](https://pypi.org/classifiers/).

`dependencies`
: Except for
  [`pip-with-requires-python`](https://pypi.org/project/pip-with-requires-python/),
  [`pip`](https://pypi.org/project/pip/), and
  [`setuptools`](https://pypi.org/project/setuptools/), a Python
  project **MUST** list all non-standard packages on which it depends
  even if its target operating environment includes those packages by
  default.  The list **SHOULD** be sorted alphabetically to make
  reading it easier.  Dependencies **MUST NOT** be listed in a
  separate file.

### Optional Dependencies

A Python project **MUST** define the following optional dependency
lists:

`dev`
: Developers use these Python packages to develop, lint, and build the
  project, e.g., `black`, `isort`.

`test`
: Developers use these Python packages used to test the project, e.g.,
  `pytest`.

A Python project **MAY** define additional optional dependency lists.
To make reading them easier, optional dependency lists **SHOULD** be
defined in alphabetical order, and each list of optional dependencies
**SHOULD** be sorted alphabetically.

An optional dependency list **MUST NOT** depend on other optional
dependency lists.  For example, if the same package is needed for both
development and testing, it should be on both the `dev` and `test`
lists.  That let's package builders install the desired functionality

Optional dependencies **MUST NOT** be listed in a separate file.

### Version Constraints

To avoid unnecessary developer overhead, a Python project **SHOULD**
only set version constraints on dependencies or optional dependencies
to address capability, compatibility, or security issues.  A Python
project **SHOULD NOT** pin specific versions of dependencies or
optional dependencies.  Any version constraint **MUST** be preceded by
a comment explaining the developer's rationale for setting the
constraint.

If a Python project depends on an outdated or unreleased version of a
dependency or an optional dependency, the developer **MUST** log a
high-priority bug report detailing their rationale for setting the
constraint.  The reason for setting the constraint **MUST** be
addressed, and the constraint **MUST** be removed, before the next
major release.

### Project Summary

A Python project **MUST** include the project summary document,
`README.md`, with a content type of `text/markdown`.

### Distribution Layout

To prevent accidental usage of in-development code, all Python
projects **MUST** follow
[the "src" distribution layout](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/).
