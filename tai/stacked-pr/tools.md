# Tools & Models Verified — stacked-pr@1

Bằng chứng kiểm thử đa nền tảng (Multi-tool Verification) cho Skill `stacked-pr@1`:

---

## 1. Tool 1: Claude Code
- **Model**: `claude-3-7-sonnet`
- **Cơ chế nạp**: Native Agent Skill `.claude/skills/stacked-pr`.
- **Hành vi**: Kiểm tra `git diff`, lập bảng kế hoạch Stacked PRs, chờ xác nhận và tạo PR chuẩn mẫu.
- **Dấu vết ghi nhận**: `Skill-Used: stacked-pr@1 · claude-3-7-sonnet · claude-code`.

---

## 2. Tool 2: Cursor / Antigravity AI (Gemini CLI / Codex)
- **Model**: `Gemini 3.8 Flash`
- **Cơ chế nạp**: Đọc chỉ dẫn từ `AGENTS.md` $\rightarrow$ nạp `.agents/skills/stacked-pr/SKILL.md`.
- **Hành vi**: Phân loại chính xác nhánh lớn $> 400$ dòng vs nhánh nhỏ 30 dòng, sinh bảng phân tầng phụ thuộc chuẩn.
- **Dấu vết ghi nhận**: `Skill-Used: stacked-pr@1 · gemini-3.8-flash · antigravity-ai`.
