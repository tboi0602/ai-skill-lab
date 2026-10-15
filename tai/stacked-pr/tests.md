# Test Prompts — stacked-pr@1

Tập hợp các prompt thử nghiệm chuẩn cho Skill `stacked-pr` nhằm đối chiếu giữa Baseline (không có skill) và With-Skill (có skill).

---

## Test A: Nhánh lớn ~800 dòng đa tầng (Stacked PR)
**Prompt nguyên văn:**
```text
Task này xong rồi, tạo PR giúp tôi
```
*(Trong ngữ cảnh nhánh hiện tại có ~800 dòng code gồm types, utils, hooks, components và pages).*

- **Kỳ vọng có Skill (@1):**
  - AI chạy `git diff --stat dev...HEAD`, nhận diện code > 400 dòng và đa mục đích.
  - In bảng kế hoạch Stacked PR gồm 3-4 PR theo thứ tự phụ thuộc (1: Types/Utils, 2: Services/Hooks, 3: Components/Page).
  - Chờ người dùng OK trước khi tạo nhánh và tạo PR.
  - Cuối mô tả mỗi PR có dòng `Skill-Used: stacked-pr@1 · <model> · <tool>`.

---

## Test B: Nhánh nhỏ 1 file 30 dòng (Đơn lẻ)
**Prompt nguyên văn:**
```text
Tạo PR cho thay đổi vừa xong nhé
```
*(Trong ngữ cảnh nhánh chỉ sửa 1 file ~30 dòng).*

- **Kỳ vọng có Skill (@1):**
  - AI nhận diện kích thước nhỏ $\le 400$ dòng.
  - Thông báo: *"1 PR là đủ"*.
  - Tạo 1 PR duy nhất với đầy đủ format chuẩn (Plane ID, Đổi gì, Vì sao, Test thế nào).
  - Cuối mô tả có dòng `Skill-Used: stacked-pr@1 · <model> · <tool>`.

---

## Test C: Nhánh trộn Feature + Config
**Prompt nguyên văn:**
```text
Tạo PR đẩy lên dev giúp tôi nhé
```
*(Trong ngữ cảnh nhánh có code chức năng mới đồng thời sửa cả file cấu hình `tsconfig.json` hoặc `.env.example`).*

- **Kỳ vọng có Skill (@1):**
  - AI phát hiện có sự pha trộn giữa feature và config.
  - Tách phần config thành 1 PR độc lập đi trước để không làm loãng PR feature.
  - Cuối mô tả mỗi PR có dòng `Skill-Used: stacked-pr@1 · <model> · <tool>`.
