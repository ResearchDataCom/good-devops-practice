## v3.0.0 (2026-09-17)

### Bug Fixes

- reference _A DoD Enterprise DevSecOps Reference Design_
- link to Linux sysadmin training
- describe the true direction of tasks cards on Kyle's jamboard

### New Features

- dedicate this work to the public domain

## v2.0.0 (2026-05-11)

### New Features

- move templates to a dedicated repository

## v1.1.0 (2026-04-04)

### New Features

- **python-template**: generate test coverage reports

## v1.0.2 (2026-04-01)

### Bug Fixes

- update release engineering workflows to version 2.1.1

### Refactoring

- standardize workflow file extensions

## v1.0.1 (2026-03-28)

### Bug Fixes

- **python-template**: move the example unit test module to the correct directory
- **python-template**: mitigate supply chain attacks by pinning actions to commit objects

## v1.0.0 (2026-03-20)

### BREAKING CHANGE

- Python Semantic Release (PSR) does not support
  distribution building from within the official GitHub Actions job,
  which disrupts privilege separation and matrix build strategies.
  PSR also only really works with Python projects.  Commitizen offers
  a simpler release process that works across different programming
  languages and handles commit message linting.

### Bug Fixes

- encourage merges (and reviews) to happen more frequently
- clarify the visual representation of kanban's workflow
- emphasize deliberately chartering projects as the organization's practice matures
- emphasize agile's shorter cycle time
- improve readability by standardizing on American English spelling
- characterize the OpenTofu module registry as the infrastructure library
- correct spelling and grammatical mistakes
- remove repeated words
- remove light-dark CSS functions not currently supported by CairoSVG
- replace the link to draft FDA guidance with the final guidance document
- give the diagram a comfortable border when shown in dark mode
- limit direct application of this guidance to the RDCT Engineering team
- reduce the summary's emphasis on software development

### New Features

- pin releases of the referenced composite actions
- outline how to get started with these tools and techniques
- manage releases using Commitizen
- define a bare-bones Python package template
- reference George Tech's open courseware
- provide general guidance on what _not_ to commit
- provide further details on the common repository layout, specifically around doc formats
- simplify commit message guidance while defining the purpose of a good commit message
- document task states using the metaphor of sticky notes on a whiteboard
- introduce kanban by quoting the CyberArk blog post that inspired our process
- explain the project life cycle by analogy to a reduction drive
- give top-level headings a raison d'être
- set the ratio of story points to work days at approximately one-to-one
- show the envisioned cloud infrastructure deployment process
- show the envisioned container image build process
- generate a print-ready PDF in addition to hypertext
- sketch out the work needed to implement each step in the DevOps process
- describe the DevOps process diagram
- label all columns in the diagram
- diagram the container image build process
- provide a high-level explanation of DevOps
- link to related tooling, with a focus on cloud infrastructure for clinical research
- begin tracking reference materials in an annotated bibliography
- reflect the core values of the Agile Manifesto
- outline the rest of the document
- expand the frontmatter
- link to additional training materials on topics including Git, GitOps, IAM, and programming
- encapsulate development work in dedicated, temporary branches
- mandate SSH when accessing Git remote repos and recommend commit signing with GnuPG
- explain what to commit and how to describe changes
- specify the layout of Git repositories
- outline the document
- create the documentation project

### Refactoring

- reorder feature branch workflow guidance to make the process easier to follow
- re-arrange the frontmatter so that project meta-documentation comes before content
- align training sections with the document outline
- move version control guidance into a dedicated section
