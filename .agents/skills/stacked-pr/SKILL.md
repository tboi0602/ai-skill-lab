---
name: stacked-pr
description: >-
  Automatically decomposes large git branches into smaller, reviewable stacked pull requests.
  Trigger when saying "tạo PR", "viết PR", "push PR", "mở pull request", "create PR",
  "open PR", or when a task is completed and ready for review.
---

# Stacked PR: Decomposing into Stacked Pull Requests (@1)

Purpose:
- Eliminate massive, unreviewable pull requests.
- Ensure every PR is small, single-purposed, easily tested, and quick to review.
- Structure subsequent PRs to build upon preceding ones (stack model).

---

## 1. When to Trigger This Skill? (Triggers)
Automatically trigger when:
- The user says: *"Tạo PR"*, *"Viết PR"*, *"Push PR"*, *"Mở pull request"*, *"Create PR"*, *"Submit PR"*.
- A feature or task branch is finalized and ready for code review.

---

## 2. Core Rules

### Rule 1: Analyze diff against base branch
- Default base branch is `dev` (or check `base_branch` in `management/plane.json` if configured).
- Execute `git diff --stat <base_branch>...HEAD` to inspect changes (ignore lockfiles and generated files).

### Rule 2: Evaluate size & Decomposition threshold
- Decompose the branch into stacked PRs if:
  - Total changes exceed **~400 lines of functional code**.
  - Total changes exceed **~15 files**.
  - The branch mixes multiple concerns: New feature + Legacy refactoring + Configuration + Reformatting.
- If changes are small ($\le 400$ lines, single concern): Output *"1 PR là đủ"* and proceed with a single standardized PR.

### Rule 3: Group by dependency order
When splitting, organize PRs in strict foundational dependency order:
1. `types` / `interfaces` / `utils` / `shared hooks` (Foundation layer)
2. `services` / `API clients`
3. `components`
4. `pages` / `integration screens`
- **Special separation rules**:
  - `refactor` $\rightarrow$ separate into its own dedicated PR.
  - `config` / build tooling changes $\rightarrow$ separate into its own dedicated PR.
  - Pure formatting changes $\rightarrow$ separate PR or exclude.
  - `i18n` translation strings $\rightarrow$ bundle with the code that uses them.

### Rule 4: Present Plan First & Await Approval
Always output the proposed stack breakdown table before executing any branch or PR creation:
```text
| PR | Branch | Key Files | Lines | Base Branch |
|---|---|---|---|---|
| 1 | feat/<slug>-1-types-utils | ... | ... | dev |
| 2 | feat/<slug>-2-services | ... | ... | feat/<slug>-1-types-utils |
| 3 | feat/<slug>-3-components | ... | ... | feat/<slug>-2-services |
```
Wait for user confirmation before creating branches.

### Rule 5: Stack Creation & Branch Naming
- Branch convention: `feat/<slug>-1-<scope>`, `feat/<slug>-2-<scope>`, etc.
- PR 1: base = `dev`.
- PR 2: base = PR 1 branch.
- PR 3: base = PR 2 branch.

### Rule 6: Every PR must build independently
- On every branch of the stack, run build and typecheck verification (`tsc -b`).
- Never split code in a way that intermediate branches have missing imports or failing builds.

### Rule 7: Pull Request Body Template (Vietnamese format)
Every created PR description must strictly follow the required template:
```markdown
(<index>/<total>) [<module>] <Short Title>

Plane ID: <IDENTIFIER>-<sequence_id>
Stack: #101 (1/3) → **#102 (2/3)** → #103 (3/3)

## Đổi gì
- <List of main changes>

## Vì sao
- <Rationale behind the changes>

## Test thế nào
- <Testing steps / commands executed>

## Ảnh (nếu đổi UI)
<!-- Screenshots if UI modified -->

Skill-Used: stacked-pr@1 · <model> · <tool>
```

### Rule 8: Absolute Safety Constraints
- NEVER push directly to `dev` or `main`.
- NEVER force-push to branches belonging to other engineers.
- Never create a PR without an associated Plane ID.
- Always checkout back to the original working branch after creating the stack.

---

## 3. Required Verification Marker (Proof of Skill Usage)
At the end of every created PR description, the following line MUST be present:
```text
Skill-Used: stacked-pr@1 · <model> · <tool>
```
*(Example: `Skill-Used: stacked-pr@1 · claude-3-7-sonnet · claude-code` or `Skill-Used: stacked-pr@1 · gemini-3.8-flash · cursor`).*
