# Cẩm Nang Ôn Luyện Demo Thứ 6 — Dành Cho Bạn Tài (15 phút)

Tài liệu chuẩn bị cho buổi báo cáo và kiểm tra trực tiếp (Live Demo) trước Mentor / Tech Lead.

---

## 🎯 Phần 1: Giải Thích Lý Thuyết (3 phút)

### 1. Skill là gì?
- **Định nghĩa**: Một Skill là một gói năng lực chuyên biệt được đóng gói trong một thư mục chứa file `SKILL.md`.
- **Cấu trúc**:
  - **YAML Frontmatter** ở đầu file gồm `name` (tên skill) và `description` (mô tả ngữ cảnh kích hoạt).
  - **Phần thân**: Chứa các quy tắc chuẩn (Rules), bước thực hiện (Workflow), ví dụ minh họa và checklist tự kiểm tra.
- **Bản chất**: Skill hoạt động như một System Prompt động theo ngữ cảnh (Contextual Prompt Injection / Dynamic Tool Description).

### 2. Thẻ `description` để làm gì?
- Thẻ `description` quyết định **khi nào AI tự động dùng skill** thông qua cơ chế so khớp ngữ nghĩa (Semantic Matching) giữa câu lệnh của người dùng và các từ khóa (Triggers) trong description.
- **Yếu tố quyết định**: Phải mô tả chính xác mục đích và từ khóa tự nhiên người dùng thường nói (ví dụ: *"viết code mới"*, *"chia nhỏ"*, *"làm task ZETA-..."*, *"tạo PR"*).

### 3. Vì sao AI biết khi nào dùng skill mà không cần gọi tên?
1. Khi khởi động session, AI Engine quét danh sách tất cả các Skills có sẵn trong repo và nạp danh sách `[name + description]` vào bộ nhớ công cụ/ngữ cảnh.
2. Khi người dùng nhập bất kỳ yêu cầu nào, LLM sẽ so sánh ngữ nghĩa yêu cầu đó với các `description`.
3. Nếu độ tương đồng cao (trúng trigger), AI sẽ tự động đọc toàn bộ nội dung file `SKILL.md` và tuân theo mọi luật lệ trong đó.

---

## 🚀 Phần 2: Chạy Live Prompt Mới (10 phút)

Khi Lead đưa prompt tại chỗ (không nhắc tên skill):

| Kịch bản Lead đưa | Dự đoán hành vi của AI | Dấu vết @1 cần kiểm tra ngay |
|---|---|---|
| *"Viết giúp anh một component tính tổng tiền giỏ hàng kèm format tiền tệ"* | AI tự nhận diện `code-structure`: tách `formatCurrency.ts` riêng vào `src/utils/`, component riêng. | Khối `### ✅ code-structure@1 — checklist` + dòng `Skill-Used: code-structure@1` |
| *"Bắt đầu làm task ZETA-999"* hoặc *"Phát hiện lỗi thanh toán khi nhập mã giảm giá"* | AI tự nhận diện `task-tracker`: tạo file `management/in-progress/` hoặc hỏi xác nhận trước khi tạo sub-task Plane. | `Tracked-By: task-tracker@1` trong file repo hoặc `— tạo bởi task-tracker@1` trên Plane |
| *"Xong tính năng rồi, tạo PR giúp anh"* | AI tự nhận diện `stacked-pr`: kiểm tra `git diff`, lập bảng chia PR nếu $>400$ dòng, hỏi xác nhận. | Dòng `Skill-Used: stacked-pr@1 · <model> · <tool>` ở cuối mô tả PR |

> [!TIP]
> **Mẹo ghi điểm tuyệt đối**: Nếu Lead đưa prompt mà AI chưa kích hoạt ngay (do tool không hỗ trợ tự quét), hãy bình tĩnh trỏ vào `AGENTS.md` để chứng minh kiến trúc đa nền tảng ("Theo chuẩn AGENTS.md, AI sẽ nạp skill tương ứng khi gặp ngữ cảnh này").

---

## 💻 Phần 3: Trình Diễn Trên Tool Thứ 2 (2 phút)
- Mở Cursor / Antigravity AI / Copilot / Gemini CLI.
- Nhập thử một câu lệnh kiểm thử: *"Thêm hàm tính cân nặng tối thiểu 3kg"*.
- AI sẽ đọc file `SKILL.md` (qua `AGENTS.md`) và in ra khối checklist cùng dòng `Skill-Used: code-structure@1`.
- Chứng minh Skill được viết trung lập, không phụ thuộc vào công cụ riêng của bất kỳ hãng nào.
