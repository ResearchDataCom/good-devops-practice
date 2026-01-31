# Good DevOps Practice

Research Data and Communication Technologies' secure software
development and IT operations discipline enables research at scale.

## Quick Start

1. Given a service request, charter a new project, e.g., using the
   Scrumban template in [OpenProject](https://rdct.openproject.com/).

2. Create a new project repository from the provided
   [cookiecutter](https://cookiecutter.readthedocs.io/) templates.
   Temporarily disable the included CI/CD workflows.

```sh
cookiecutter gh:ResearchDataCom/good-devops-practice
```

3. Commit the newly created project to the `main` branch as a breaking
   change.

4. Enable the included CI/CD workflows, and continue initial
   development in a feature branch (e.g., `develop`).
