# [ZETAINTERN-56] Thêm Chức năng nhân số mũ cho caculator app mini
- **Plane ID**: ZETAINTERN-56
- **Ngày bắt đầu**: 2026-10-16 10:11
- **Mục tiêu**: Thêm toán tử lũy thừa / nhân số mũ (^ hoặc **) vào mini calculator app theo chuẩn 1-file-1-export.
- **Trạng thái**: In Progress
Tracked-By: task-tracker@2

## Việc cần làm
- [x] Phân tích mã nguồn MiniCalculator hiện tại (`src/utils/`, `src/types/`, `src/constants.ts`, `src/components/`)
- [x] Bổ sung kiểu toán tử lũy thừa `^` vào `src/types/calculator.ts`
- [x] Tách logic tính lũy thừa thành function riêng `src/utils/computePower.ts` theo chuẩn 1 file 1 function
- [x] Tích hợp toán tử `^` vào `src/utils/calculateResult.ts` và phím mũ vào `src/constants.ts`
- [x] Re-export qua `src/index.ts` và kiểm tra typecheck (`tsc -b` pass 100%)

## Phát sinh
<!-- Incidental notes: - HH:MM — <item> — <xong/chưa> -->
- 10:16 — Đổi màu nền nút bấm sang màu đỏ (#e74c3c) theo yêu cầu — xong
- 10:18 — Tạo sub-task Plane [ZETAINTERN-57] Thêm chức năng nhân với số PI — xong code (Giữ In Progress trên Plane theo luật @2)



