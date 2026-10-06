---
tags: [demo, lark-style]
---

# Lark-Style Demo

This note showcases every styling element. Open it in **Reading View** for the most consistent appearance, or **Live Preview** to verify edit mode parity.

## Typography

You'll see clean typography with the system font stack, 16px base size, 1.625 line height. Headings follow the Lark document scale:

# Heading 1 (26px)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.

## Heading 2 (22px)

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Heading 3 (20px)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

#### Heading 4 (18px)

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

##### Heading 5 (16px)

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.

###### Heading 6 (16px)

Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.

## Inline formatting

This sentence has **bold text** (Lark style — weight only, no color change), *italic text*, ~~strikethrough~~ (faded to muted gray), `inline code` (translucent gray background, no border), ==highlighted text==, and a [hyperlink](https://github.com) with Lark brand color.

Internal links look like [[welcome]] and unresolved ones like [[nonexistent-note]].

## Block elements

> This is a blockquote with neutral gray left border and transparent background — visually distinct from callouts below. Use it for quoted text or supplementary notes.

### Callouts

> [!note] Note callout
> Lark Banner style: light tinted background, 1px same-color border, 3px radius. No left color bar.

> [!tip] Tip callout (success)
> Green accent.

> [!warning] Warning callout
> Orange accent.

> [!danger] Danger callout
> Red accent.

## Lists

Unordered list with three levels:

- Top level item one
  - Nested level two
    - Deep level three
  - Back to level two
- Top level item two
- Top level item three

Ordered list:

1. First item
2. Second item with `inline code`
3. Third item
   1. Sub-ordered item
   2. Another sub-item

Task list:

- [x] Completed task with Lark blue checkbox
- [ ] Pending task
- [ ] Another task

## Code

Inline code: `const x = compute(value)` appears with subtle gray background.

Code block with syntax highlighting (consistent across Reading and Live Preview):

```python
from dataclasses import dataclass
from typing import List

@dataclass
class Task:
    """A simple task with priority."""
    name: str
    priority: int = 0  # 0 = lowest

    def is_urgent(self) -> bool:
        return self.priority > 5

def main() -> None:
    tasks: List[Task] = [
        Task("Write docs", priority=8),
        Task("Review PR", priority=3),
    ]
    urgent = [t for t in tasks if t.is_urgent()]
    print(f"Urgent: {len(urgent)}")

if __name__ == "__main__":
    main()
```

## Table

| Layer | File | Purpose |
|---|---|---|
| Entry | `planning/core/planning_core.cc` | Main loop `Process()` |
| Scenario | `planning/scenario/scenario_manager.cc` | Scenario dispatch |
| Stage base | `planning/scenario/stage.h/cc` | Task pipeline |
| Default scenario | `planning/scenario/lane_follow.cc` | Stage switching |
| Path optimizer | `planning/optimizer/path_planner.h` | QP path optimization |
| Speed planner | `planning/speed_planner/dp_speed.cc` | DP longitudinal planning |

## Horizontal rule

---

That's the end of the demo. Above should be a solid-color horizontal line.

## Tags

#lark-style #obsidian #theme


## Task statuses

- [ ] To do
- [x] Done
    - [ ] Unfinished subtask (stays readable)
- [/] In progress
- [-] Cancelled
- [>] Deferred
- [<] Scheduled
- [!] Important
- [?] Question
- [*] Star

## Lark text & background colors

<span class="fc-red">red</span> <span class="fc-orange">orange</span> <span class="fc-yellow">yellow</span> <span class="fc-green">green</span> <span class="fc-blue">blue</span> <span class="fc-purple">purple</span> <span class="fc-grey">grey</span>

<mark class="hl-blue">light blue</mark> <mark class="hl-green">light green</mark> <mark class="hl-orange-strong">strong orange</mark> <mark class="hl-purple-strong">strong purple</mark>
