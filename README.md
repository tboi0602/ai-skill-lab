# ai-skills-lab

Kho lưu trữ thực hành và nghiên cứu xây dựng AI Skills theo chuẩn chung (Claude Code, Cursor, Codex, Gemini CLI, Copilot) của **Tài (tboi0602)** cho tuần học (12/10 – 17/10).

## 📐 Chuẩn cấu trúc Skill
- Gốc lưu tại `.agents/skills/<tên-skill>/SKILL.md`
- Hỗ trợ Claude Code thông qua Directory Junction `.claude/skills` trỏ vào `.agents/skills`.
- Đăng ký hướng dẫn nạp kỹ năng cho các AI Editor/CLI khác tại `AGENTS.md`.

## 🛠 Danh sách Skills
1. **code-structure@1**: Nguyên tắc 1 file 1 function / export, tách nhỏ logic.
2. **task-tracker@1**: AI nhận biết task Plane hiện tại, quản lý việc phát sinh.
3. **stacked-pr@1**: Tự động phân tích git diff và chia nhỏ PR thành chuỗi PR xếp chồng.

## 📂 Bằng chứng cá nhân
Toàn bộ test prompts, baseline vs with-skill, transcript và danh sách công cụ kiểm thử được lưu trữ tại `tai/`.
