---
name: task-tracker
description: >-
  Quản lý nhận diện task hiện tại, tracking tiến độ trong repo và đồng bộ Plane.
  Sử dụng khi bắt đầu làm việc, khi nói "làm task ZETA-xxx", khi phát hiện bug/việc mới trong lúc làm,
  khi xong việc, hoặc khi hỏi "đang làm gì", "hôm nay làm được gì".
---

# Task Tracker (@1)

Mục đích:
- AI luôn nhận thức rõ task hiện tại đang làm.
- Việc phát sinh trong quá trình thực hiện không bao giờ bị quên.
- Hệ thống Plane và file trạng thái trong repo luôn phản ánh chính xác thực tế.

---

## 1. Khi nào kích hoạt Skill này? (Triggers)
Kích hoạt tự động khi:
- Bắt đầu phiên làm việc hoặc chuyển sang task mới.
- Người dùng nói: *"Làm task ZETA-xxx"*, *"Phân tích task ZETA-xxx"*, *"Bắt đầu task..."*.
- Phát hiện bug mới, việc cần làm thêm hoặc câu hỏi kỹ thuật trong lúc code.
- Hoàn tất một task / chuẩn bị tạo PR.
- Người dùng hỏi: *"Đang làm gì?"*, *"Hôm nay làm được gì?"*, *"Daily standup"*, *"Báo cáo tiến độ"*.

---

## 2. Các quy tắc chuẩn (Rules)

### Rule 1: Bắt đầu — Xác định Task hiện tại
1. Xác định Plane ID:
   - Từ lệnh của người dùng (ví dụ `ZETA-123`, `ZETAINTERN-44`).
   - Nếu không nói ID: Kiểm tra tên branch hiện tại (`git branch --show-current`, ví dụ `feat/zeta-123-...`).
   - Nếu không có: Hỏi lại người dùng 1 câu ngắn gọn.
   - Nếu không có task trên Plane: Hỏi xem có muốn tạo task Plane mới không.
2. Tra cứu Plane (Lưu ý Plane Self-Hosted):
   - **Plane self-hosted không hỗ trợ PQL**. Lấy list workitems theo project (per_page 100, theo cursor), lọc theo assignee hoặc sequence ID ở client.
   - ID task hiển thị luôn theo dạng `<IDENTIFIER>-<sequence_id>` (ví dụ `ZETA-101`), **tuyệt đối không bao giờ đoán mò**.
   - **Chỉ đổi task của chính mình, không đổi trạng thái task của người khác.**

### Rule 2: Ghi nhận Task vào Repo & Cập nhật Plane
1. Tạo/cập nhật file tracking tại `management/in-progress/<slug>.md`:
   ```markdown
   # [<IDENTIFIER>-<sequence_id>] <Tiêu đề task>
   - **Plane ID**: <IDENTIFIER>-<sequence_id>
   - **Ngày bắt đầu**: YYYY-MM-DD HH:mm
   - **Mục tiêu**: <Tóm tắt kết quả cần đạt>
   - **Trạng thái**: In Progress
   Tracked-By: task-tracker@1

   ## Việc cần làm
   - [ ] <Việc 1>
   - [ ] <Việc 2>

   ## Phát sinh
   <!-- Ghi chú nội bộ: - HH:MM — <việc> — <xong/chưa> -->
   ```
2. Chuyển trạng thái task trên Plane sang **`In Progress`**.

### Rule 3: Phân loại việc phát sinh trong quá trình làm (2 loại)
- **Loại A: Đáng lên Plane (Cần tạo Sub-task)**:
  - Tiêu chí: Bug thật sự, việc cần làm thêm $> \sim 30$ phút, hoặc việc người khác trong team cần biết.
  - Quy trình:
    1. In danh sách tóm tắt (1 dòng/việc) và **hỏi xác nhận người dùng trước** (*"Phát hiện việc A... Bạn có muốn tạo sub-task trên Plane không?"* $\rightarrow$ tránh làm rác Plane).
    2. Sau khi người dùng đồng ý: Tạo sub-task trên Plane với `parent` = ID task hiện tại, gán cho chính mình, tiêu đề tiếng Việt có prefix repo (ví dụ `[warehouse-app] Sửa lỗi nút Hủy`).
    3. Cuối mô tả sub-task bắt buộc có dòng:
       ```text
       — tạo bởi task-tracker@1
       ```
- **Loại B: Không cần lên Plane (Ghi chép nội bộ)**:
  - Tiêu chí: Điều tra nhỏ, chỉnh sửa vặt $< 15$ phút, ghi chú, câu hỏi cần làm rõ.
  - Quy trình: Ghi trực tiếp vào mục `## Phát sinh` trong file task repo:
    `- HH:MM — <việc> — <xong/chưa>` (Không tạo Plane).

### Rule 4: Hoàn thành task
1. Di chuyển file task từ `management/in-progress/<slug>.md` sang `management/done/<slug>.md`.
2. Chuyển trạng thái Plane sang **`In Review`** (khi đã tạo PR) hoặc **`Done`** (khi merge/xong).
3. Nếu có sub-task chưa hoàn thành $\rightarrow$ giữ nguyên trạng thái sub-task và thông báo rõ cho người dùng.

### Rule 5: Báo cáo Daily Standup ("Hôm nay làm được gì?")
Khi được hỏi, tổng hợp dữ liệu từ `management/done/` và `management/in-progress/` theo mẫu:
- **Task đã hoàn thành**: [ID] Tên task (Đã tạo PR #... / Done).
- **Task đang xử lý**: [ID] Tên task (Tiến độ: x%).
- **Sub-tasks & Việc phát sinh**: Sub-task Plane đã tạo, việc phát sinh nội bộ.
- **Vướng mắc / Cần hỏi**: (nếu có).

---

## 3. Dấu vết bắt buộc (Proof of Skill Usage)
1. Trong file quản lý task repo (`management/in-progress/<slug>.md`):
   ```markdown
   Tracked-By: task-tracker@1
   ```
2. Ở cuối mô tả mỗi sub-task tạo trên Plane:
   ```text
   — tạo bởi task-tracker@1
   ```
