# 資料模型：投影片封面與 SDD 開發主題

## 實體 1：投影片配置 (Config)

- **欄位**:
  - `title`: string (專案標題)
  - `subtitle`: string (專案副標題)
  - `author`: string (來自 git config user.name)
  - `email`: string (來自 git config user.email)
- **來源**: 建置腳本生成的 `config.json`

## 實體 2：投影片內容 (Slide Content)

- **欄位**:
  - `content`: markdown (投影片正文)
- **來源**: `slides/00-cover.md`
