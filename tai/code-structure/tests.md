# Test Prompts — code-structure@1

Tập hợp các prompt thử nghiệm chuẩn cho Skill `code-structure` nhằm đối chiếu giữa Baseline (không có skill) và With-Skill (có skill).

---

## Test A: Tính cước landing page (Logic thuần)
**Prompt nguyên văn:**
```text
Thêm tính cước landing page: tối thiểu 3kg, làm tròn 0.1kg
```

- **Kỳ vọng có Skill (@1):**
  - Không nhồi nhét hàm tính toán vào Component UI.
  - Tách logic thành các file riêng trong `src/utils/`: `roundWeight.ts`, `applyMinimumWeight.ts`, `calculateChargeableWeight.ts`.
  - Cuối câu trả lời in khối checklist `### ✅ code-structure@1 — checklist` và dòng `Skill-Used: code-structure@1`.

---

## Test B: Tách page ~200 dòng (Refactor có cấu trúc)
**Prompt nguyên văn:**
```text
Refactor file OrderManagementPage.tsx ~200 dòng này cho gọn gàng, sạch sẽ giúp tôi
```

- **Kỳ vọng có Skill (@1):**
  - Đưa ra bảng kế hoạch tách file (file mới, vai trò) trước khi làm.
  - Tách các sub-component, hooks và utils riêng biệt.
  - Bảo toàn đường import, không làm hỏng callers.
  - In khối checklist `### ✅ code-structure@1 — checklist` và dòng `Skill-Used: code-structure@1`.

---

## Test C: Sửa 1 dòng text trong file lớn (Giới hạn phạm vi)
**Prompt nguyên văn:**
```text
Sửa lại tiêu đề trong Header.tsx từ "Bảng Điều Khiển" thành "Tổng Quan Đơn Hàng"
```

- **Kỳ vọng có Skill (@1):**
  - Chỉ sửa đúng 1 dòng text được yêu cầu.
  - Dù file `Header.tsx` có vi phạm nhiều hàm, AI **không tự ý refactor cả file**.
  - Ghi chú các vi phạm tồn đọng dưới dạng việc phát sinh để xử lý sau.
  - In khối checklist `### ✅ code-structure@1 — checklist` và dòng `Skill-Used: code-structure@1`.

---

## Test D: Viết component hiển thị đơn hàng (Format date & currency)
**Prompt nguyên văn:**
```text
Nhờ viết component hiển thị đơn hàng OrderCard có format ngày giờ và format tiền tệ VNĐ
```

- **Kỳ vọng có Skill (@1):**
  - Component `OrderCard.tsx` chỉ hiển thị UI và gọi helper từ bên ngoài.
  - Hàm `formatDate.ts` và `formatCurrency.ts` được tách thành các file độc lập trong `src/utils/`.
  - In khối checklist `### ✅ code-structure@1 — checklist` và dòng `Skill-Used: code-structure@1`.
