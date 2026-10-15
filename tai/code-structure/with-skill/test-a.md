# With-Skill Output — code-structure@1 (Khi CÓ Skill)

Dưới đây là kết quả thực nghiệm chuẩn xác khi AI kích hoạt Skill `code-structure@1`.

---

## 1. Test A: "Thêm tính cước landing page: tối thiểu 3kg, làm tròn 0.1kg"

### Kết quả AI trả về (With-Skill):
AI phân tách logic nghiệp vụ và component UI thành các file riêng biệt theo đúng chuẩn:

#### File 1: `src/utils/roundWeight.ts`
```typescript
export const roundWeight = (weight: number): number => {
  return Math.round(weight * 10) / 10;
};
```

#### File 2: `src/utils/applyMinimumWeight.ts`
```typescript
const MIN_WEIGHT_KG = 3;

export const applyMinimumWeight = (weight: number): number => {
  return Math.max(MIN_WEIGHT_KG, weight);
};
```

#### File 3: `src/utils/calculateChargeableWeight.ts`
```typescript
import { roundWeight } from './roundWeight';
import { applyMinimumWeight } from './applyMinimumWeight';

export const calculateChargeableWeight = (weight: number): number => {
  const rounded = roundWeight(weight);
  return applyMinimumWeight(rounded);
};
```

#### File 4: `src/components/ShippingCalculator.tsx`
```tsx
import React, { useState } from 'react';
import { calculateChargeableWeight } from '../utils/calculateChargeableWeight';

type ShippingCalculatorProps = {
  initialWeight?: number;
};

export const ShippingCalculator = ({ initialWeight = 0 }: ShippingCalculatorProps) => {
  const [weight, setWeight] = useState<number>(initialWeight);
  const chargeableWeight = calculateChargeableWeight(weight);

  return (
    <div className="shipping-calculator">
      <label htmlFor="weight-input">Khối lượng (kg):</label>
      <input
        id="weight-input"
        type="number"
        value={weight}
        step="0.1"
        onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
      />
      <div className="result">
        Trọng lượng tính cước: <strong>{chargeableWeight} kg</strong>
      </div>
    </div>
  );
};
```

---

### Khối Dấu Vết & Checklist (Bằng chứng AI đã chạy Skill):

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
- `src/utils/roundWeight.ts`: Làm tròn trọng lượng về bội số 0.1kg
- `src/utils/applyMinimumWeight.ts`: Áp dụng mức cân nặng tối thiểu 3kg
- `src/utils/calculateChargeableWeight.ts`: Tổng hợp logic tính trọng lượng tính cước
- `src/components/ShippingCalculator.tsx`: Component hiển thị giao diện tính cước
```
