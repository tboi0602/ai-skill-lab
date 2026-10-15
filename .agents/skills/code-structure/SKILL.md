---
name: code-structure
description: >-
  Áp dụng nguyên tắc chia nhỏ code (1 file 1 function / component / hook) để dễ đọc, dễ test, dễ review,
  giúp AI sửa ít đụng chạm chéo. Sử dụng khi viết code mới hoặc sửa file trong src/, khi 1 file có nhiều
  function, file > ~150 dòng, function > ~40 dòng, hoặc khi được yêu cầu "tách", "refactor", "chia nhỏ".
---

# Code Structure: 1 File 1 Function / Component / Hook (@1)

Nguyên tắc cốt lõi: **Code chia nhỏ — Mỗi file làm đúng 1 việc**.
Giúp code dễ đọc, dễ test, review nhẹ nhàng và hạn chế tối đa xung đột khi AI chỉnh sửa.

---

## 1. Khi nào kích hoạt Skill này? (Triggers)
Tự động kích hoạt khi:
- Viết code mới hoặc sửa file trong thư mục `src/`.
- Phát hiện 1 file chứa nhiều hơn 1 function, component hoặc hook.
- File dài quá **~150 dòng**.
- Function dài quá **~40 dòng** hoặc làm nhiều hơn 1 việc.
- Người dùng yêu cầu: *"tách"*, *"refactor"*, *"chia nhỏ"*, *"clean code"*.

---

## 2. Các quy tắc chuẩn (Rules)

### Rule 0: Đọc luật repo trước
- Kiểm tra `CLAUDE.md`, `project/conventions.md`, `project/structure.md` (nếu có).
- **Luật repo luôn thắng luật skill** nếu có điểm khác biệt.

### Rule 1: 1 File = 1 thứ được export
- Mỗi file chỉ export duy nhất: 1 component, hoặc 1 hook, hoặc 1 function logic.
- **Tên file = Tên export**:
  - `calculateChargeableWeight.ts` export `calculateChargeableWeight`
  - `usePartnerBalances.ts` export `usePartnerBalances`
  - `StatCard.tsx` export `StatCard`

### Rule 2: 1 File chỉ làm đúng 1 việc — Không có helper trong file
- File component chỉ chứa component.
- File hook chỉ chứa hook.
- File util chỉ chứa 1 function.
- Cần function phụ (dù chỉ 2 dòng) $\rightarrow$ tách file riêng.

### Rule 3: Function > 40 dòng hoặc làm > 1 việc $\rightarrow$ Tách nhỏ
- Phân rã thành các function nhỏ có tên rõ nghĩa (tên tự giải thích việc nó làm, không cần comment giải thích lòng vòng).

### Rule 4: Đặt đúng chỗ theo kiến trúc
- **Logic thuần** (tính giá, format, sort, validate, không JSX) $\rightarrow$ `src/utils/<tên-hàm>.ts`.
- **Logic có state trong component** $\rightarrow$ tách hook `useX.ts` riêng:
  - Page dùng riêng $\rightarrow$ `<PageName>/hooks/useX.ts`
  - Dùng chung $\rightarrow$ nơi chứa hook chung của repo (`src/hooks/useX.ts`).
- **Gọi API** $\rightarrow$ `src/services/<tên-service>.ts`.
- **Kiểu dữ liệu API** $\rightarrow$ `src/interfaces/` (hoặc `src/types/`).
- **Component dùng $\ge$ 2 nơi** $\rightarrow$ `src/components/`.

### Rule 5: Giữ nhất quán Style
- Named export (không dùng `export default` trừ trường hợp đặc thù của page routing).
- Kiểu dữ liệu: `type XProps = { ... }` (không dùng `interface` trừ khi repo yêu cầu).

### Rule 6: Ngoại lệ không chứa logic thực thi
Các file sau không áp dụng luật 1 file 1 function:
- `types.ts` / `interfaces.ts` (chỉ khai báo kiểu).
- `constants.ts` (chỉ khai báo hằng số).
- File dịch i18n (`translation.json`).
- `index.ts` (chỉ re-export / barrel).
*(Lưu ý: Nếu có function xuất hiện bên trong các file trên $\rightarrow$ phải tách function đó ra).*

### Rule 7: Giới hạn phạm vi (Scope Boundary)
- Chỉ tách code mình đang viết/sửa trong task.
- File cũ vi phạm mà không liên quan đến task hiện tại $\rightarrow$ **không tự tiện refactor** trong cùng PR feature; ghi lại thành việc phát sinh (Skill 2) để làm PR riêng sau.

### Rule 8: Bảo toàn Callers & Import Path
- Không làm gãy import của nơi khác khi tách file: giữ nguyên đường import cũ (thông qua `index.ts` re-export) hoặc cập nhật toàn bộ callers liên quan trong cùng PR. Build / type check (`tsc -b`) phải pass.

---

## 3. Dấu vết bắt buộc (Proof of Skill Usage)
Cuối câu trả lời, AI bắt buộc phải in khối checklist tự kiểm tra + commit có định dạng chính xác sau:

```markdown
### ✅ code-structure@1 — checklist
- [x] Mỗi file chỉ export đúng 1 component / hook / function
- [x] Tên file khớp chính xác với tên export
- [x] Không có helper ẩn giấu bên trong file
- [x] Mọi function <= 40 dòng và làm đúng 1 việc
- [x] Đặt đúng vị trí: utils (logic thuần), hooks (state/effect), components, services
- [x] Style đồng nhất: named export, type Props
- [x] Không refactor lan man ra ngoài phạm vi task
- [x] Đã cập nhật callers / re-export, build / tsc -b pass
Skill-Used: code-structure@1

#### 📁 Danh sách file đã tạo mới / tách ra:
- `src/...`: [mô tả vai trò]
```
