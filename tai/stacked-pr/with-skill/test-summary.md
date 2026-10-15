# With-Skill Output — stacked-pr@1 (Khi CÓ Skill)

Dưới đây là kết quả thực nghiệm chuẩn xác khi AI kích hoạt Skill `stacked-pr@1`.

---

## 1. Test A: "Task này xong rồi, tạo PR giúp tôi" (Nhánh ~800 dòng)

### Phản hồi của AI (With-Skill):
AI phân tích `git diff --stat dev...HEAD` $\rightarrow$ 820 dòng thay đổi trên 16 files.
AI tự động nhận diện vượt ngưỡng 400 dòng và xuất trình kế hoạch Stacked PR:

```markdown
Nhánh hiện tại có 820 dòng thay đổi (vượt ngưỡng 400 dòng) bao gồm nhiều tầng phụ thuộc.
Để đảm bảo review nhanh và an toàn, tôi đề xuất chia thành chuỗi 3 PR xếp chồng (Stacked PRs):

| PR | Nhánh | Nội dung chính | Số dòng | Base Branch |
|---|---|---|---|---|
| **PR 1** | `feat/zeta-44-1-types-utils` | Types, roundWeight, applyMinimumWeight, calcWeight | ~180 | `dev` |
| **PR 2** | `feat/zeta-44-2-services` | API service và hook `useShippingRate` | ~240 | `feat/zeta-44-1-types-utils` |
| **PR 3** | `feat/zeta-44-3-ui` | Component `ShippingCalculator` và tích hợp Page | ~400 | `feat/zeta-44-2-services` |

👉 **Bạn có đồng ý với kế hoạch chia PR này không?** Tôi sẽ bắt đầu tạo nhánh và PR sau khi bạn xác nhận.
```

Sau khi người dùng đồng ý, AI tạo các PR với mô tả chuẩn mẫu:

```markdown
(1/3) [landing] Thêm types và utility tính cước tối thiểu 3kg

Plane ID: ZETAINTERN-44
Stack: **#101 (1/3)** → #102 (2/3) → #103 (3/3)

## Đổi gì
- Thêm định nghĩa kiểu dữ liệu `ShippingRate`
- Thêm các utility hàm thuần: `roundWeight`, `applyMinimumWeight`

## Vì sao
- Tách rời logic tính cước làm nền tảng cho hook và UI ở các PR sau

## Test thế nào
- Chạy `npm test` hoặc `tsc -b` pass 100%

Skill-Used: stacked-pr@1 · claude-3-7-sonnet · claude-code
```

---

## 2. Test B: "Tạo PR cho thay đổi vừa xong nhé" (Nhánh 1 file 30 dòng)

### Phản hồi của AI (With-Skill):
AI kiểm tra diff thấy chỉ có 30 dòng thay đổi trên 1 file:

```markdown
Thay đổi chỉ có 30 dòng trên 1 file (dưới ngưỡng 400 dòng), **1 PR là đủ**.
Đang tiến hành tạo PR trực tiếp trỏ vào `dev`...
```
Mô tả PR được điền đầy đủ và kết thúc bằng:
```text
Skill-Used: stacked-pr@1 · claude-3-7-sonnet · claude-code
```
