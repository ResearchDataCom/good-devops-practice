# Project Charter

Refer to
["Project Charter - Agile Project"](http://web.archive.org/web/20100412014125/http://analytical-mind.com/2009/08/12/project-charter-agile-project/),
["What Should an Agile Project Charter Contain?"](https://www.infoq.com/news/2010/05/agile-project-charter/),
and
["A Guide to the Project Priorities (Prioritization) Matrix"](https://www.indeed.com/career-advice/career-development/project-priorities-matrix)
for additional guidance.

## Vision

> Why do this work?  What challenges do we face?

Several clients require documented software development life cycle
(SDLC) or enterprise performance life cycle (EPLC) processes,
sometimes due to regulations such as
[FISMA](https://www.govinfo.gov/link/plaw/113/public/283).
Additionally, staff members sometimes lack experience with modern site
reliability engineering techniques and tooling, requiring on-the-job
training.  The RDCT Engineering team needs better ways to share
knowledge than samizdat.

## Objectives

> What will this project do?  What's our mission?

<!-- TODO: refactor this as learning objectives -->

- establish secure coding standards

- guide staff to useful development tools

## Success Criteria

> What effects or outcomes should this project have?

Following secure software development practices should help reduce
defects---or help reduce the impact of defects---in the company's
products or services:

- high-quality, well documented, safe software products

- reduced administrative overhead via process automation

- faster responses to vendor/upstream security bulletins

- reduced risk of unplanned outages due to routine maintenance

## Project Priorities

> How is this project constrained?

|                                 | Time<br>(Schedule) | Cost<br>(Budget) | Scope<br>(Boundary) |
|--------------------------------:|--------------------|------------------|---------------------|
|   Constrain<br>(Not negotiable) |                    | ✅               |                     |
| Accept<br>(Difficult to Change) |                    |                  | ✅                  |
|         Enhance<br>(Negotiable) | ✅                 |                  |                     |

## Risks

> What might make the project exceed a constraint or alter a priority?

We don't know how to create a publication processes that supports
versioning and translations.

Several clients require a specific format for documentation, but
supporting those output formats may be difficult in terms of developer
time/effort.

Not everyone on the team is equally proficient in formal (or
technical) English writing, which complicates authoring and editing.
Composing documentation in Microsoft Word, Google Docs, or Apple Pages
might mitigate some of this.

## Stakeholders

> Who depends on the project's success?

- engineering teams, who do the work covered by this SOP

- validation teams and auditors, who review engineering work

- study teams, who use engineering teams' products
