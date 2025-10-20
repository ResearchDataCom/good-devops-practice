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
symbol.  The left lobe of the infinity symbol represents software
engineering activities (counter-clockwise from the top, the plan,
test, code, and release steps); the right lobe, infrastructure support
(clockwise from the top, the build, deploy, operate, and feedback
steps).  The intersection of development and operations is represented
by the release step crossing under the feedback step, with each
connecting to the opposite lobe (the build and plan steps,
repsectively).  Each step builds on the previous and feeds into the
next.

:::

Adoption follows the principle of progressive enhancement.

1. **Plan**---Charter the project.  Prioritize the work.  Review
   bi-weekly.

2. **Test**---Isolate changes in feature branches.  Develop tests
   first.  Refactor as needed.

3. **Code**---Only commit working, related changes.  Describe their
   impact and purpose.

4. **Release**---Review changes with peers and subject matter experts
   before delivering finished work.

5. **Build**---Assemble service packages and perform end-to-end
   testing.

6. **Deploy**---Automate the delivery of completed work to the
   customer.

7. **Operate**---Re-use safe end-to-end tests to monitor the service's
   health.

8. **Feedback**---Service requests and problem reports update the
   project charter.
