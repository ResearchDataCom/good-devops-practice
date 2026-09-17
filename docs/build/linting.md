<!---

This work is marked CC0 1.0 Universal.  To view a copy of this mark,
visit https://creativecommons.org/publicdomain/zero/1.0/.

--->

# Linting

Automate [code formatting](../style/index) and static code analysis.
Integrate linting into the [feature branch workflow](../git/workflow).

Dryer lint traps capture waste fibers shed by laundry instead of
letting them dirty our homes.
[Linters](https://en.wikipedia.org/wiki/Lint_(software)) are computer
programs that capture stylistic mistakes or code quality problems
instead of letting them dirty our code.  Linters perform
[static code analysis](https://en.wikipedia.org/wiki/Static_program_analysis)
that flags stylistic mistakes, programming errors, design defects, and
suspicious constructs in source code.

## Recommended Software

:::{admonition} Guidance

Developers **SHOULD** use the latest versions of the listed tools to
format code and perform static code analysis.

:::

- [pre-commit](https://precommit.com/), a multi-language pre-commit
  hook management framework

- [flake8](https://flake8.pycqa.org/en/latest/), a Python linter

- [Black](https://black.readthedocs.io/en/stable/), a Python code
  formatter

- [isort](https://pycqa.github.io/isort/), which runs before Black to
  sort Python import statements

- [tflint](https://github.com/terraform-linters/tflint), a Terraform
  linter

- [checkov](https://www.checkov.io/), which scans cloud infrastructure
  configurations to find misconfigurations before they're deployed

- [trivy](https://trivy.dev/latest/), which finds vulnerabilities
  (CVE) and misconfigurations (IaC) across code repositories, binary
  artifacts, container images, Kubernetes clusters, and more

- [ShellCheck](https://www.shellcheck.net/), a static code analysis
  tool for shell scripts

- [actionlint](https://rhysd.github.io/actionlint/), a static checker
  for GitHub Actions workflow definitions
