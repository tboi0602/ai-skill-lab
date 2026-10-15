---
name: task-tracker
description: >-
  Tracks active tasks, synchronizes Plane issue status, and manages scope changes.
  Trigger when starting work, when the user says "làm task ZETA-xxx", "work on task...",
  "bắt đầu task...", when discovering bugs or incidental tasks during implementation,
  when completing work, or when asked "đang làm gì", "what are you doing", "hôm nay làm được gì".
---

# Task Tracker (@1)

Purpose:
- Ensure the AI agent always maintains accurate awareness of the active task.
- Prevent incidental discoveries and bugs from being lost or forgotten.
- Keep Plane state and in-repository task management files perfectly synchronized with reality.

---

## 1. When to Trigger This Skill? (Triggers)
Automatically trigger when:
- Starting a new work session or switching tasks.
- The user says: *"Làm task ZETA-xxx"*, *"Work on ZETA-xxx"*, *"Bắt đầu task..."*.
- Encountering new bugs, technical questions, or unexpected scope changes during coding.
- Completing a task or preparing a Pull Request.
- The user asks: *"Đang làm gì?"*, *"Hôm nay làm được gì?"*, *"Daily standup"*, *"Status update"*.

---

## 2. Core Rules

### Rule 1: Starting — Identify Active Task
1. **Determine Plane ID**:
   - Extract from user instructions (e.g., `ZETA-123`, `ZETAINTERN-44`).
   - If not stated: Inspect current git branch (`git branch --show-current`, e.g., `feat/zeta-123-...`).
   - If not found: Prompt the user with a concise single-line clarification.
   - If no task exists on Plane: Ask if the user wants to create one.
2. **Plane Retrieval (Self-Hosted Considerations)**:
   - **Self-hosted Plane does NOT support PQL**. Fetch workitems by project (`per_page=100`, page through cursor), filter by assignee or sequence ID on the client.
   - Task ID format is strictly `<IDENTIFIER>-<sequence_id>` (e.g., `ZETA-101`), **never guess or fabricate IDs**.
   - **Only update your own assigned tasks; never modify tasks assigned to other team members.**

### Rule 2: In-Repo Task Tracking & Plane Status Update
1. Create or update the tracking markdown file at `management/in-progress/<slug>.md`:
   ```markdown
   # [<IDENTIFIER>-<sequence_id>] <Task Title>
   - **Plane ID**: <IDENTIFIER>-<sequence_id>
   - **Ngày bắt đầu**: YYYY-MM-DD HH:mm
   - **Mục tiêu**: <Summary of desired outcome>
   - **Trạng thái**: In Progress
   Tracked-By: task-tracker@1

   ## Việc cần làm
   - [ ] <Subtask 1>
   - [ ] <Subtask 2>

   ## Phát sinh
   <!-- Incidental notes: - HH:MM — <item> — <xong/chưa> -->
   ```
2. Transition the workitem state on Plane to **`In Progress`**.

### Rule 3: Managing Incidental Work (2 Categories)
- **Category A: Worth Tracking on Plane (Create Sub-task)**:
  - Criteria: Genuine bugs, work taking $> \sim 30$ minutes, or tasks other team members must be aware of.
  - Workflow:
    1. Print a 1-line summary and **prompt the user for confirmation first** (*"Discovered issue X... Do you want me to create a sub-task on Plane?"* $\rightarrow$ prevents Plane pollution).
    2. Upon user approval: Create a sub-task on Plane with `parent` = current task UUID, assigned to yourself, title with repo prefix (e.g., `[warehouse-app] Fix cancel button crash`).
    3. The sub-task description MUST end with:
       ```text
       — tạo bởi task-tracker@1
       ```
- **Category B: Incidental / Scratch Items (Local In-Repo Tracking Only)**:
  - Criteria: Minor investigations, quick fixes $< 15$ minutes, notes, questions for lead.
  - Workflow: Record directly under the `## Phát sinh` section in the task file:
    `- HH:MM — <item> — <xong/chưa>` (Do NOT create a Plane issue).

### Rule 4: Task Completion
1. Move the task tracking file from `management/in-progress/<slug>.md` to `management/done/<slug>.md`.
2. Transition Plane state to **`In Review`** (if PR is created) or **`Done`** (if merged/finalized).
3. If outstanding sub-tasks remain incomplete $\rightarrow$ keep their status unchanged and alert the user.

### Rule 5: Daily Standup Summary ("Hôm nay làm được gì?")
When requested, synthesize data from `management/done/` and `management/in-progress/`:
- **Completed Tasks**: [ID] Title (PR #... / Done).
- **In-Progress Tasks**: [ID] Title (Progress: x%).
- **Sub-tasks & Incidental Findings**: Plane sub-tasks created, local incidental notes.
- **Blockers / Open Questions**: (if any).

---

## 3. Required Verification Marker (Proof of Skill Usage)
1. Inside the in-repo task file (`management/in-progress/<slug>.md`):
   ```markdown
   Tracked-By: task-tracker@1
   ```
2. At the end of every created Plane sub-task description:
   ```text
   — tạo bởi task-tracker@1
   ```
