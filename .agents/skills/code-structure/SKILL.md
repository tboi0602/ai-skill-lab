---
name: code-structure
description: >-
  Enforces single-responsibility code structuring (1 file = 1 exported function, component, or hook)
  to maximize readability, testability, and isolated AI refactoring.
  Trigger when creating or editing files in src/, when a file defines multiple functions,
  when a file exceeds ~150 lines, when a function exceeds ~40 lines, or when requested to
  "split", "refactor", "chia nhỏ", "tách", or "clean code".
---

# Code Structure: 1 File 1 Function / Component / Hook (@1)

Core Principle: **Modularized Code — Each file does exactly one job**.
Improves readability, simplifies unit testing, streamlines code reviews, and minimizes merge conflicts during AI modifications.

---

## 1. When to Trigger This Skill? (Triggers)
Automatically trigger when:
- Writing new code or modifying existing code in `src/`.
- A single file defines more than one function, component, or hook.
- A file exceeds **~150 lines**.
- A function exceeds **~40 lines** or handles more than one responsibility.
- The user requests: *"split"*, *"refactor"*, *"tách"*, *"chia nhỏ"*, *"clean code"*.

---

## 2. Core Rules

### Rule 0: Repository conventions take precedence
- Always inspect `CLAUDE.md`, `project/conventions.md`, or `project/structure.md` first.
- **Repository rules always supersede skill rules** in case of any discrepancy.

### Rule 1: 1 File = 1 Single Export
- Each file must export exactly one thing: 1 Component, 1 Hook, or 1 utility Function.
- **File name = Export name**:
  - `calculateChargeableWeight.ts` exports `calculateChargeableWeight`
  - `usePartnerBalances.ts` exports `usePartnerBalances`
  - `StatCard.tsx` exports `StatCard`

### Rule 2: 1 File does 1 thing only — No internal private helpers
- Component files contain only the Component.
- Hook files contain only the Hook.
- Util files contain only that 1 utility Function.
- **Need a helper function (even if just 2-3 lines)?** $\rightarrow$ Extract it into its own file.

### Rule 3: Function > 40 lines or > 1 responsibility $\rightarrow$ Decompose
- Break large functions down into self-documenting smaller functions whose names clearly describe what they do (no redundant explanatory comments).

### Rule 4: Place files in the correct architectural directory
- **Pure logic** (price calculations, formatting, sorting, validation, no JSX) $\rightarrow$ `src/utils/<functionName>.ts`.
- **Stateful logic** $\rightarrow$ Dedicated hook `useX.ts`:
  - Page-specific hook $\rightarrow$ `<PageName>/hooks/useX.ts`
  - Shared repository hook $\rightarrow$ `src/hooks/useX.ts`
- **API calls & services** $\rightarrow$ `src/services/<serviceName>.ts`
- **Data models & API types** $\rightarrow$ `src/interfaces/` (or `src/types/`)
- **Shared components ($\ge 2$ places)** $\rightarrow$ `src/components/`

### Rule 5: Maintain consistent repository styling
- Use **named exports** (avoid `export default` except for framework page routes).
- Use `type XProps = { ... }` (avoid `interface` unless required by repository conventions).

### Rule 6: Exceptions for non-executable files
The 1-file-1-function rule does not apply to:
- `types.ts` / `interfaces.ts` (type declarations only).
- `constants.ts` (constant declarations only).
- i18n translation files (`translation.json`).
- `index.ts` (barrel re-exports only).
*(Note: If any function logic appears inside these files $\rightarrow$ extract it immediately).*

### Rule 7: Strict Scope Boundary
- **Only refactor code within the current task's scope.**
- If you notice existing files violating these rules but unrelated to the current task $\rightarrow$ **do NOT refactor them in the feature PR**. Record them as incidental tasks (Skill 2) to be addressed in dedicated refactor PRs.

### Rule 8: Preserve Callers & Import Paths
- When extracting files, do not break external imports: keep old paths valid (via `index.ts` re-exports) or update all affected callers in the same PR. Verify build and type check (`tsc -b`) pass.

---

## 3. Required Verification Marker (Proof of Skill Usage)
At the very end of your response, you MUST print the self-verification checklist block formatted exactly as follows:

```markdown
### ✅ code-structure@1 — checklist
- [x] Mỗi file chỉ export đúng 1 component / hook / function
- [x] Tên file khớp chính xác với tên export
- [x] Không có helper ẩn giấu bên trong file
- [x] Mọi function <= 40 dòng và làm đúng 1 việc
- [x] Đặt đúng vị trí: utils (logic thuần), hooks (state/effect), components, services
- [x] Style đồng nhất: named export, type Props
- [x] Không refactor lan man ra ngoài phạm vi task
- [x] Đã cập nhật callers / re-export, build / tsc -b pass
Skill-Used: code-structure@1

#### 📁 Danh sách file đã tạo mới / tách ra:
- `src/...`: [mô tả vai trò]
```
