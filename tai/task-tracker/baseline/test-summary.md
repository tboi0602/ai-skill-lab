# Baseline Output — task-tracker (Khi KHÔNG có Skill)

Dưới đây là kết quả thực nghiệm khi AI thực hiện công việc trong session không nạp Skill `task-tracker`.

---

## 1. Test A: "Bắt đầu làm task ZETAINTERN-44 giúp tôi"
- **AI phản hồi (Baseline):**
  *"Dạ vâng, bạn cần làm gì với task ZETAINTERN-44? Hãy cung cấp nội dung code hoặc yêu cầu cụ thể để mình hỗ trợ nhé."*
- **Đánh giá:**
  - ❌ AI không biết tra cứu Plane.
  - ❌ Không tạo file quản lý `management/in-progress/`.
  - ❌ **Không có dòng `Tracked-By: task-tracker@1`**.

---

## 2. Test B: "À trong lúc test thấy phát hiện nút Hủy bị lỗi khi mất mạng"
- **AI phản hồi (Baseline):**
  *"Để sửa lỗi nút Hủy khi mất mạng, bạn có thể kiểm tra trạng thái `navigator.onLine` hoặc bắt sự kiện `window.addEventListener('offline')`... Dưới đây là đoạn code sửa..."*
- **Đánh giá:**
  - ❌ AI nhảy thẳng vào code mà không hề biết phân loại quản lý task.
  - ❌ Không hỏi tạo sub-task Plane để ghi nhận bug.
  - ❌ **Không có dấu vết `— tạo bởi task-tracker@1`**.
