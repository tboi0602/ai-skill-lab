# AGENTS.md — AI Skill Registry & Instructions

Tài liệu hướng dẫn dành cho AI Agents (Claude Code, Cursor, Codex, Copilot, Gemini CLI, v.v.) hoạt động trong repository này.

---

## 📌 Hướng dẫn nạp Skills (Multi-Tool Compatibility)
- Các tool hỗ trợ native Agent Skills (như Claude Code) sẽ tự động nạp từ `.claude/skills` hoặc `.agents/skills`.
- Các tool không tự động quét thư mục skill (Cursor Composer, Copilot Chat, Gemini CLI): Khi gặp ngữ cảnh phù hợp được mô tả ở bảng bên dưới, hãy **chủ động đọc file `SKILL.md` theo đường dẫn tương ứng** trước khi thực hiện nhiệm vụ.
- Tuyệt đối không dùng cú pháp độc quyền của 1 hãng cụ thể. Tuân thủ đúng các quy tắc và in dấu vết nghiệm thu được quy định trong từng skill.

---

## 🛠 Skills

| Tên Skill | Dùng khi nào (Triggers) | Đường dẫn SKILL.md | Dấu vết bắt buộc |
|---|---|---|---|
| **code-structure** | Khi viết code mới hoặc sửa file trong `src/`, khi 1 file có nhiều function/component, file > ~150 dòng, function > ~40 dòng, hoặc khi được nhờ "tách", "refactor", "chia nhỏ". | [.agents/skills/code-structure/SKILL.md](file:///.agents/skills/code-structure/SKILL.md) | Cuối câu trả lời in khối commit + checklist kèm dòng `Skill-Used: code-structure@1` |
| **task-tracker** | Khi bắt đầu làm việc, khi nói "làm task ZETA-xxx" (hoặc ID Plane khác), khi phát hiện bug/việc mới trong lúc làm, khi xong việc, hoặc khi hỏi "đang làm gì", "hôm nay làm được gì". | [.agents/skills/task-tracker/SKILL.md](file:///.agents/skills/task-tracker/SKILL.md) | File task có `Tracked-By: task-tracker@1`; sub-task Plane có cuối mô tả `— tạo bởi task-tracker@1` |
| **stacked-pr** | Khi nói "tạo PR", "viết PR", "push PR", "mở pull request", hoặc khi hoàn tất task cần đưa lên review. | [.agents/skills/stacked-pr/SKILL.md](file:///.agents/skills/stacked-pr/SKILL.md) | Cuối mô tả mỗi PR: `Skill-Used: stacked-pr@1 · <model> · <tool>` |
