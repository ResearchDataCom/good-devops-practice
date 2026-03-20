# Roadmap

{attribution="_Li Proverbe au Vilain_ (ca. 1190)"}
> *Rome ne fut pas faite toute en un jour.*\
> Rome wasn't built in a day.

DevOps combines software engineering (development) and infrastructure
support activities (operations) into a single, repeatable process.
Each iteration of this process takes a new feature from
conceptualization to delivery.  As the customer's needs evolve, so
does the delivered product or service.  Automation reduces the costs
of tracking changes, proving that changes work properly, and
publishing or deploying changes correctly.

:::{figure} _static/devops-process.svg
:align: center

The DevOps Process

This represents the eight-step DevOps process loop with an infinity
symbol.  The left lobe of the infinity symbol encompasses software
engineering activities (counter-clockwise from the top, the plan,
test, code, and release steps); the right lobe, infrastructure support
(clockwise from the top, the build, deploy, operate, and feedback
steps).  The intersection of development and operations is illustrated
by the release step crossing under the feedback step, with each
connecting to the opposite lobe (the build and plan steps,
respectively).  Each step builds on the previous and feeds into the
next.

:::

Adoption follows the principle of progressive enhancement.

## Plan

> Charter the project.  Prioritize the work.  Review bi-weekly.

DevOps is Agile.  Start with a task board and a daily team stand-up
meeting.  Progress to formally chartered projects and bi-weekly
sprints, which requires sprint planning, sprint reviews, and customer
delivery meetings.  Incorporate program increment planning and other
Agile project management techniques as needed.

## Test

> Isolate changes in feature branches.  Develop tests first.  Refactor
> as needed.

Adopt a feature branch workflow by restricting the main branch to
working, known-good code.  Bootstrap test-driven development by
scripting manual checks with a testing framework.

## Code

> Only commit working, related changes.  Describe their impact and
> purpose.

Change one thing at a time following the single-responsibility
principle.  Characterize each change as a fix, a new feature, or a
breaking change.  Perform static code analysis and enforce common code
styles using linters run by Git pre-commit hooks.  Write product
documentation in tandem with code using comments, docstrings, type
annotations, etc.

## Release

> Review changes with peers and subject matter experts before
> delivering finished work.

Standardize rolling out changes to live systems from feature branches
following a formal code review.  Curate a linear commit history to
simplify debugging, merging, and reviewing changes.  Further simplify
code reviews by running linters and test suites automatically via
CI/CD pipelines.  Use the commit history to implement Semantic
Versioning with automated change reporting.

## Build

> Assemble service packages and perform end-to-end testing.

Store container image definitions from Docker Compose projects into
dedicated repositories.  Re-run end-to-end tests before publishing
container images, and store test results in an immutable audit log.
Pin dependencies to ensure reproducible builds.  Maintain product
source code and product documentation in the same repository, if
feasible, and publish them in tandem.

## Deploy

> Automate the delivery of completed work to the customer.

Track---and later, distribute---changes to device, server, and
application configurations using Git.  Script simpler service
installations and routine maintenance like certificate renewals.
Orchestrate cloud infrastructure deployments with Ansible, Docker
Compose, OpenTofu, Helm, and Kubernetes operators.

## Operate

> Re-use safe end-to-end tests to monitor the service's health.

Monitor service functioning in addition to external reachability
checks and performance counters.

## Feedback

> Service requests and problem reports update the project charter.

Use the IT service desk to record bug reports or work orders.
