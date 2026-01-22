# The Task Board

{attribution="[Running a Kanban Standup Meeting](https://developer.cyberark.com/blog/running-a-kanban-standup-meeting/)"}
> Kanban is about being
> [flow-focused](https://www.slideshare.net/SebastianRadics/the-principles-of-product-development-flow-a-summary),
> not sprint-focused.  The goal is to deliver results at a steady rate
> and that's done by accurately tracking reality, reducing queues,
> limiting work-in-progress (WIP), fulfilling dependencies, and
> removing impediments.

[Kanban](wiki:Kanban_(development)), from the Japanese word for
_signboard_ and inspired by Toyota's lean manufacturing system of the
[same name](wiki:Kanban), tracks work visually from start to finish.
Kanban implementations can be as simple as sticky notes on a
whiteboard.  For example, the following illustrates how Kyle Lewis
managed a security incident response team using Google Jamboard.

::::::{grid} 3 3 3 3
:gutter: 1 1 1 2

:::::{grid-item}
:columns: 4

::::{grid} 1 1 1 1
:gutter: 1 1 1 2
:margin: 0

:::{grid-item-card} New

Track work scheduled for this week (or this sprint).

:::

:::{grid-item-card} Backlog

Stage upcoming work.  This is not the team's current priority.

:::

:::{grid-item-card} Notices

Team leads can use this space to make announcements.

:::

::::

:::::

:::::{grid-item-card} In progress
:columns: 4

Group active tasks by person.

Ideally, the team is self-directing, with each person pulling tasks
from the to-do list as capacity permits.

Completed work needs review before customer delivery.

:::::

:::::{grid-item}
:columns: 4

::::{grid} 1 1 1 1
:gutter: 1 1 1 2
:margin: 0

:::{grid-item-card} Blocked

Something stopped progress on these tasks.  It might be outside the
team's control.

:::

:::{grid-item-card} On hold

This work is finished but needs review.

:::

:::{grid-item-card} Closed

This work has been delivered to the customer.

:::

::::

:::::

::::::

## No Unplanned Work

> All work **MUST** be tracked by [a ticket](wiki:ITIL),
> [a task](wiki:Task_(project_management)), or
> [an issue](wiki:Issue_tracking_system), as without some kind of work
> plan, the team cannot be self-directing.

Which service management, project management, or issue tracking tool
the team uses depends on the customer.

## The Daily Stand-up Meeting

> Daily stand-up meeting attendance is **REQUIRED**.  Any attendee
> **MAY** run the meeting.  Everyone in attendance **MUST** help write
> the meeting minutes.

The team meets briefly each morning:

- to make sure [timesheets](https://rdct.tsheets.com/) are current;

- to check on any urgent operational issues;

- to review each person's finished work, work in progress, and
  [blocks](wiki:Blocking_(computing));

- to identify any unplanned work; and

- to make announcements, report problems, and handle other business as
  needed, time permitting.
