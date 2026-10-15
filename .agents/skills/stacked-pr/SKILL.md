---
name: stacked-pr
description: >-
  Tự động chia nhỏ Pull Request thành chuỗi PR xếp chồng (stack) nhỏ gọn, dễ review,
  độc lập và tự build được. Sử dụng khi nói "tạo PR", "viết PR", "push PR", "mở pull request",
  hoặc khi xong task và cần review.
---

# Stacked PR: Chia Nhỏ PR Xếp Chồng (@1)

Mục đích:
- Loại bỏ các PR khổng lồ khó review.
- Mỗi PR nhỏ gọn, tập trung vào 1 mục đích cụ thể, review nhanh chóng.
- PR sau kế thừa và xây dựng trên PR trước.

---

## 1. Khi nào kích hoạt Skill này? (Triggers)
Tự động kích hoạt khi:
- Người dùng nói: *"Tạo PR"*, *"Viết PR"*, *"Push PR"*, *"Mở pull request"*.
- Hoàn tất một task / feature và chuẩn bị đưa lên review.

---

## 2. Các quy tắc chuẩn (Rules)

### Rule 1: Đọc thay đổi so với nhánh gốc
- Base branch mặc định là `dev` (hoặc kiểm tra `base_branch` trong `management/plane.json` nếu có).
- Chạy `git diff --stat <base_branch>...HEAD` để thống kê thay đổi (bỏ qua lockfile, file tự sinh).

### Rule 2: Kiểm tra kích thước & Tiêu chí chia
- Cần chia nhỏ PR nếu:
  - Vượt quá **~400 dòng code thật**.
  - Vượt quá **~15 files**.
  - Trộn nhiều mục đích: Feature mới + Refactor code cũ + Thay đổi config + Reformat code.
- Nếu thay đổi nhỏ ($\le 400$ dòng, 1 mục đích): Thông báo *"1 PR là đủ"* và tiến hành tạo 1 PR hoàn chỉnh theo chuẩn mẫu.

### Rule 3: Nhóm theo mục đích & Thứ tự phụ thuộc
Khi chia nhỏ, sắp xếp chuỗi PR theo thứ tự:
1. `types` / `interfaces` / `utils` / `hooks chung` (Lớp nền tảng)
2. `services` / `API clients`
3. `components`
4. `pages` / `ghép nối màn hình`
- **Quy tắc đặc thù**:
  - `refactor` $\rightarrow$ tách riêng 1 PR.
  - `config` / thiết lập môi trường $\rightarrow$ tách riêng 1 PR.
  - Chỉ format code $\rightarrow$ tách riêng PR riêng hoặc loại bỏ.
  - File dịch `i18n` đi kèm code sử dụng nó.

### Rule 4: Xuất trình Kế hoạch trước & Chờ xác nhận
Luôn in bảng kế hoạch phân bổ PR trước khi thực hiện:
```text
| PR | Nhánh | Files chính | Số dòng | Dựa trên PR (Base) |
|---|---|---|---|---|
| 1 | feat/<slug>-1-types-utils | ... | ... | dev |
| 2 | feat/<slug>-2-services | ... | ... | feat/<slug>-1-types-utils |
| 3 | feat/<slug>-3-components | ... | ... | feat/<slug>-2-services |
```
Chờ người dùng OK mới tiến hành tạo các nhánh và PR.

### Rule 5: Tạo Stack & Đặt tên nhánh chuẩn
- Tên nhánh: `feat/<slug>-1-<phần>`, `feat/<slug>-2-<phần>`, v.v.
- PR 1: base = `dev`.
- PR 2: base = nhánh PR 1.
- PR 3: base = nhánh PR 2.

### Rule 6: Mỗi PR phải tự build độc lập
- Trên từng nhánh của stack, chạy kiểm tra build/types (`tsc -b` hoặc linter của dự án).
- Tuyệt đối không chia tách theo cách làm nhánh trung gian bị thiếu file, gãy import hoặc compile lỗi.

### Rule 7: Định dạng mô tả Pull Request (Tiếng Việt)
Mỗi PR được tạo phải tuân thủ mẫu chuẩn:
```markdown
(<số_thứ_tự>/<tổng_số>) [<tên_module>] <Tiêu đề ngắn gọn>

Plane ID: <IDENTIFIER>-<sequence_id>
Stack: #101 (1/3) → **#102 (2/3)** → #103 (3/3)

## Đổi gì
- <Liệt kê thay đổi chính>

## Vì sao
- <Lý do thay đổi>

## Test thế nào
- <Các bước kiểm thử / lệnh test>

## Ảnh (nếu đổi UI)
<!-- Đính kèm ảnh chụp nếu có thay đổi giao diện -->

Skill-Used: stacked-pr@1 · <model> · <tool>
```

### Rule 8: Quy tắc An toàn Tuyệt đối
- Tuyệt đối KHÔNG push trực tiếp vào `dev` hoặc `main`.
- Tuyệt đối KHÔNG force-push vào nhánh của người khác.
- Không tạo PR thiếu Plane ID.
- Sau khi hoàn thành tạo stack, checkout quay về nhánh làm việc ban đầu.

---

## 3. Dấu vết bắt buộc (Proof of Skill Usage)
Cuối mô tả của mỗi PR được tạo ra, bắt buộc phải có dòng:
```text
Skill-Used: stacked-pr@1 · <model> · <tool>
```
*(Ví dụ: `Skill-Used: stacked-pr@1 · gemini-3.8-flash · claude-code` hoặc `Skill-Used: stacked-pr@1 · gpt-4o · cursor`).*
