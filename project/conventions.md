# Project Structure & Conventions

Tài liệu cấu trúc cho repo bài tập `ai-skills-lab` (mô phỏng chuẩn quy ước Zeta):

## 1. Cấu trúc thư mục
- `src/utils/`: Chứa các hàm logic thuần (tính toán, format, validate, không JSX).
- `src/hooks/`: Chứa React hooks (stateful logic).
- `src/components/`: Chứa các component giao diện.
- `management/in-progress/`: Tracking các task đang làm.
- `management/done/`: Task đã hoàn thành.

## 2. Quy ước chung
- Mỗi file làm đúng 1 việc (1 file 1 function / export duy nhất).
- Ưu tiên Named Export (`export const ...`).
- Khai báo Props dùng `type XProps = { ... }`.
