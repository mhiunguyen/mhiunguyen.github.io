# 🚀 Deploy Portfolio lên GitHub Pages

## Bước 1 — Cài Git (nếu chưa có)
```bash
git --version   # kiểm tra xem đã có chưa
# Nếu chưa: sudo apt install git  (Ubuntu/Linux)
```

## Bước 2 — Vào thư mục portfolio
```bash
cd /home/hieu-nguyen/.gemini/antigravity/scratch/portfolio-da
```

## Bước 3 — Khởi tạo Git & commit
```bash
git init
git add .
git commit -m "feat: initial portfolio - Nguyen Minh Hieu"
```

## Bước 4 — Tạo repo trên GitHub
1. Truy cập https://github.com/new
2. Tên repo: `YOUR_GITHUB_USERNAME.github.io`  ← **đặt đúng tên này**
3. Để **Public**
4. **KHÔNG** tick "Add README"
5. Click **Create repository**

## Bước 5 — Push code lên
```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

## Bước 6 — Bật GitHub Pages
1. Vào repo vừa tạo → **Settings** → **Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` → folder: `/ (root)`
4. Click **Save**

## ✅ Sau 1–2 phút, truy cập:
```
https://YOUR_GITHUB_USERNAME.github.io
```

---

## ⚠️ Còn 1 việc cần làm:
Mở `index.html`, tìm dòng:
```html
href="https://www.linkedin.com/in/YOUR-LINK"
```
Thay `YOUR-LINK` bằng LinkedIn handle thực của bạn.
