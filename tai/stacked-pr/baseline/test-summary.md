# Baseline Output — stacked-pr (Khi KHÔNG có Skill)

Dưới đây là kết quả thực nghiệm khi AI thực hiện công việc trong session không nạp Skill `stacked-pr`.

---

## 1. Test A: "Task này xong rồi, tạo PR giúp tôi" (Nhánh ~800 dòng)
- **AI phản hồi (Baseline):**
  AI gom toàn bộ 800 dòng code vào 1 PR khổng lồ và gọi lệnh:
  `gh pr create --title "Tính năng hoàn chỉnh" --body "Đã xong toàn bộ code..."`
- **Đánh giá:**
  - ❌ Tạo 1 PR đơn khổng lồ > 800 dòng, người review bị ngợp và khó kiểm soát lỗi.
  - ❌ Không phân tách tầng nền tảng (types/utils) với tầng UI/Page.
  - ❌ Mô tả PR sơ sài, không có cấu trúc chuẩn (Plane ID, Đổi gì, Vì sao, Test thế nào).
  - ❌ **Không có dòng `Skill-Used: stacked-pr@1 · ...`**.
