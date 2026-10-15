# Test Prompts — task-tracker@1

Tập hợp các prompt thử nghiệm chuẩn cho Skill `task-tracker` nhằm đối chiếu giữa Baseline (không có skill) và With-Skill (có skill).

---

## Test A: Khởi động task ("Làm task ZETAINTERN-44")
**Prompt nguyên văn:**
```text
Bắt đầu làm task ZETAINTERN-44 giúp tôi
```

- **Kỳ vọng có Skill (@1):**
  - AI đọc thông tin task từ Plane (nếu có MCP) hoặc mô phỏng đúng cấu trúc.
  - Tạo file tracking tại `management/in-progress/zetaintern-44.md`.
  - Có dòng dấu vết `Tracked-By: task-tracker@1`.
  - Cập nhật trạng thái Plane sang `In Progress`.

---

## Test B: Phát hiện bug lớn ("Nút Hủy bị lỗi khi mất mạng")
**Prompt nguyên văn:**
```text
À trong lúc test thấy phát hiện nút Hủy bị lỗi khi mất mạng
```

- **Kỳ vọng có Skill (@1):**
  - Nhận diện đây là Bug thật sự (Loại A: Đáng lên Plane).
  - Không tự tiện tạo ngay làm rác Plane mà **in 1 dòng tóm tắt và hỏi xác nhận người dùng**.
  - Khi được confirm: Tạo sub-task trên Plane gán cho chính mình, `parent` = task hiện tại.
  - Cuối mô tả sub-task có dòng `— tạo bởi task-tracker@1`.

---

## Test C: Sửa việc vặt ("Sửa lại typo ở header")
**Prompt nguyên văn:**
```text
Sửa lại một lỗi typo nhỏ ở header
```

- **Kỳ vọng có Skill (@1):**
  - Nhận diện đây là chỉnh sửa vặt < 15 phút (Loại B: Không cần lên Plane).
  - **Không tạo Plane**, chỉ ghi vào mục `## Phát sinh` trong file task repo (`- HH:MM — Sửa typo header — xong`).
