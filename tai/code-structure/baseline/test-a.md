# Baseline Output — code-structure (Khi KHÔNG có Skill)

Dưới đây là kết quả thực nghiệm khi AI thực hiện công việc trong session không nạp Skill `code-structure`.

---

## 1. Test A: "Thêm tính cước landing page: tối thiểu 3kg, làm tròn 0.1kg"

### Kết quả AI trả về (Baseline):
AI viết dồn tất cả các hàm helper và logic vào chung 1 file component duy nhất:

```tsx
// src/components/ShippingCalculator.tsx
import React, { useState } from 'react';

// AI viết helper ngay trong cùng file
function roundWeight(w: number) {
  return Math.round(w * 10) / 10;
}

function calculateChargeableWeight(weight: number) {
  const rounded = roundWeight(weight);
  return Math.max(3, rounded);
}

export default function ShippingCalculator() {
  const [weight, setWeight] = useState(0);
  const chargeable = calculateChargeableWeight(weight);

  return (
    <div>
      <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} />
      <p>Trọng lượng tính cước: {chargeable} kg</p>
    </div>
  );
}
```

### Đánh giá sự thiếu sót:
- ❌ Vi phạm nguyên tắc 1 file 1 function (file chứa 2 hàm helper + 1 component).
- ❌ Sử dụng `export default` thay vì named export.
- ❌ Không có checklist tự kiểm tra cuối câu trả lời.
- ❌ **Không có dấu vết `Skill-Used: code-structure@1`**.
