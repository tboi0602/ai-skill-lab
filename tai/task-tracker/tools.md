# Tools & Models Verified — task-tracker@1

Bằng chứng kiểm thử đa nền tảng (Multi-tool Verification) cho Skill `task-tracker@1`:

---

## 1. Tool 1: Claude Code
- **Model**: `claude-3-7-sonnet`
- **Cơ chế nạp**: Native Agent Skill `.claude/skills/task-tracker`.
- **Hành vi**: Tự động nhận diện prompt "Làm task ZETAINTERN-44", tạo file tracking và gán dòng `Tracked-By: task-tracker@1`.
- **Phân loại việc phát sinh**: Hỏi xác nhận người dùng trước khi tạo sub-task có đuôi `— tạo bởi task-tracker@1`.

---

## 2. Tool 2: Cursor / Antigravity AI (Gemini CLI / Codex)
- **Model**: `Gemini 3.8 Flash`
- **Cơ chế nạp**: Đọc chỉ dẫn từ `AGENTS.md` $\rightarrow$ nạp `.agents/skills/task-tracker/SKILL.md`.
- **Hành vi**: Tạo file `management/in-progress/` đúng mẫu, phân loại chính xác Loại A (lên Plane) và Loại B (ghi file nội bộ).
- **Dấu vết ghi nhận**: Đầy đủ `Tracked-By: task-tracker@1` và `— tạo bởi task-tracker@1`.
