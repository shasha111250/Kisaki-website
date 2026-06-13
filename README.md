# Kisaki Website

Kisaki 官方網站源碼。基於純 HTML/CSS/JS 構建的靜態站點，用於軟件分發、角色資源分發和產品介紹。

## 🚀 部署

專案為純靜態文件，可直接部署到任意靜態託管服務：

```bash
# 方式 1: 任意 HTTP 伺服器
npx serve .

# 方式 2: 部署到 GitHub Pages
# 將整個目錄推送至 gh-pages 分支
```

## 📁 結構

```
Kisaki-website/
├── index.html          # 主頁（單頁應用，包含所有區塊）
├── css/
│   └── style.css       # 樣式表
├── js/
│   └── main.js         # 交互邏輯 + 角色數據
├── assets/
│   └── characters/     # 角色預覽圖（待添加）
├── downloads/          # 軟件安裝包（待發布）
└── README.md
```

## 🎨 設計

- 響應式設計，適配桌面和移動端
- 漸變色主題（粉紫配色）
- 滾動動畫（Intersection Observer）
- 毛玻璃導航欄
- 使用 Inter + Noto Sans SC 字體

## 🔗 相關連結

- Kisaki 主專案：[github.com/AoralsFout/Kisaki](https://github.com/AoralsFout/Kisaki)
- 官網地址：[kisaki.aoralsfout.top](https://kisaki.aoralsfout.top)
