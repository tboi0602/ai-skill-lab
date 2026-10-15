# With-Skill Output — task-tracker@1 (Khi CÓ Skill)

Dưới đây là kết quả thực nghiệm chuẩn xác khi AI kích hoạt Skill `task-tracker@1`.

---

## 1. Test A: "Bắt đầu làm task ZETAINTERN-44 giúp tôi"

### Phản hồi của AI (With-Skill):
AI xác định Plane ID `ZETAINTERN-44`, tra cứu thông tin task trên Plane và tạo file tracking:

```markdown
Đã xác định task ZETAINTERN-44: "Xây dựng hệ thống tính cước tự động".
- Trạng thái trên Plane: Đã chuyển sang `In Progress`.
- Đã khởi tạo file quản lý tiến độ: `management/in-progress/zetaintern-44.md`.
```

#### Nội dung file `management/in-progress/zetaintern-44.md`:
```markdown
# [ZETAINTERN-44] Xây dựng hệ thống tính cước tự động
- **Plane ID**: ZETAINTERN-44
- **Ngày bắt đầu**: 2026-10-15 19:00
- **Mục tiêu**: Hoàn thành logic tính cước tối thiểu 3kg và làm tròn 0.1kg
- **Trạng thái**: In Progress
Tracked-By: task-tracker@1

## Việc cần làm
- [ ] Tách logic roundWeight & applyMinimumWeight
- [ ] Viết unit tests
- [ ] Ghép nối vào component UI

## Phát sinh
<!-- Ghi chú nội bộ: - HH:MM — <việc> — <xong/chưa> -->
```

---

## 2. Test B: "À trong lúc test thấy phát hiện nút Hủy bị lỗi khi mất mạng"

### Phản hồi của AI (With-Skill):
AI phân loại đây là Bug quan trọng (Loại A: Đáng lên Plane), không tự ý spam mà hỏi xác nhận người dùng:

```markdown
Phát hiện việc phát sinh ngoài kế hoạch:
- **Lỗi**: Nút Hủy bị treo/lỗi khi mất kết nối mạng (Network Offline Bug).
- **Phân loại**: Đáng lên Plane (Bug thực tế, cần điều tra xử lý riêng).

👉 **Xác nhận**: Bạn có muốn tôi tạo sub-task trên Plane cho lỗi này không?
- Tên dự kiến: `[warehouse-app] Sửa lỗi nút Hủy khi mất kết nối mạng`
- Parent task: `ZETAINTERN-44`
- Assignee: Chính bạn
```

Khi người dùng đồng ý ("ok tạo đi"), AI gọi Plane MCP tạo sub-task với mô tả chứa dấu vết:
```markdown
Mô tả sub-task trên Plane:
Cần xử lý offline fallback khi người dùng ấn nút Hủy trong điều kiện mất kết nối.
— tạo bởi task-tracker@1
```

---

## 3. Test C: "Sửa lại một lỗi typo nhỏ ở header"

### Phản hồi của AI (With-Skill):
AI nhận diện đây là việc vặt (< 15 phút), không tạo task rác trên Plane mà chỉ cập nhật mục `## Phát sinh`:

```markdown
Đã sửa xong typo ở header. Việc này thuộc Loại B (chỉnh sửa vặt < 15 phút) nên tôi không tạo Plane mà đã ghi nhận vào file task repo:

`management/in-progress/zetaintern-44.md`:
- 19:15 — Sửa typo tiêu đề Header — xong
```
