# 快速開始：投影片封面與 SDD 開發主題

## 先決條件

- Node.js (v18+)
- Git (已配置 user.name 與 user.email)

## 安裝依賴

```bash
npm install
```

## 設定作者資訊

確保您的 git config 已設定：

```bash
git config user.name "您的名稱"
git config user.email "您的信箱"
```

## 本地啟動

```bash
npm start
```

這將啟動開發伺服器，並自動生成 `config.json` 供前端讀取。

## 建置發布

```bash
npm run build
```

這將生成靜態檔案至 `dist/` 目錄。
