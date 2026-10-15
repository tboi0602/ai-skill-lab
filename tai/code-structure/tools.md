# Tools & Models Verified — code-structure@1

Bằng chứng kiểm thử đa nền tảng (Multi-tool Verification) cho Skill `code-structure@1`:

---

## 1. Tool 1: Claude Code
- **Model**: `claude-3-7-sonnet` / `claude-3-5-sonnet`
- **Cơ chế nạp**: Native Agent Skill thông qua symlink / junction `.claude/skills/code-structure`.
- **Kết quả kích hoạt**: Tự động kích hoạt khi nhận prompt "Thêm tính cước landing page: tối thiểu 3kg, làm tròn 0.1kg".
- **Dấu vết ghi nhận**: Đầy đủ khối checklist và dòng `Skill-Used: code-structure@1`.

---

## 2. Tool 2: Cursor / Antigravity AI (Gemini CLI / Codex)
- **Model**: `Gemini 3.8 Flash` / `Claude 3.7 Sonnet`
- **Cơ chế nạp**: Đọc chỉ dẫn từ `AGENTS.md` $\rightarrow$ nạp `.agents/skills/code-structure/SKILL.md`.
- **Kết quả kích hoạt**: Đọc file quy tắc, tự động tách nhỏ 3 utils và 1 component, in đúng mẫu checklist chuẩn.
- **Dấu vết ghi nhận**: `Skill-Used: code-structure@1`.
