# 實作計畫：新增 Welcome 專案 SDD 實戰案例投影片

**分支**: `006-welcome-case-study` | **日期**: 2026-02-18 | **規格文件**: [spec.md](spec.md)
**輸入**: 來自 `/specs/006-welcome-case-study/spec.md` 的功能規格

**備註**: 此範本由 `/speckit.plan` 指令填寫。

## 摘要

本功能將新增一組投影片，以 `Welcome` 專案作為實戰案例，展示 SDD 開發流程的具體應用。內容涵蓋專案結構、初始化架構 (001-spigot-init) 以及國際化支援 (012-i18n-support) 的規格轉化過程。將建立 `slides/05-welcome-case-study.md` 檔案，並在 `index.html` 中整合。

## 技術背景

**語言/版本**: HTML5, JavaScript (reveal.js 5.x)
**主要依賴**: reveal.js, reveal.js-mermaid-plugin
**儲存**: Markdown files (`slides/05-welcome-case-study.md`)
**測試**: Manual Verification
**目標平台**: GitHub Pages
**專案類型**: 靜態投影片網頁
**效能目標**: 載入無顯著延遲
**限制條件**: 21:9 解析度 (1920x1080)
**規模/範圍**: 新增 1 個 Markdown 檔案，約 6-8 頁投影片

## 憲章檢查 (Constitution Check)

- [x] **外部 Markdown**: 所有內容是否定義在獨立的 `.md` 檔案中？
- [x] **Mermaid 圖表**: 所有架構/流程圖是否使用 Mermaid.js？
- [x] **寬螢幕優化**: 佈局是否設定為 21:9 (1920x1080)？
- [x] **自動化 CI/CD**: 是否已設定 GitHub Actions 部署至 `gh-pages`？
- [x] **直接交付**: 投影片是否可透過 GitHub Pages 直接存取？
- [x] **正體中文優先**: 內容與文件是否皆使用正體中文？

## 專案結構

### 文件 (此功能)

```text
specs/006-welcome-case-study/
├── plan.md              # 此檔案
├── research.md          # 階段 0 輸出
├── data-model.md        # 階段 1 輸出
├── quickstart.md        # 階段 1 輸出
└── tasks.md             # 階段 2 輸出
```

## 複雜度追蹤

| 違規項目 | 必要原因 | 拒絕簡單替代方案的理由 |
|-----------|------------|-------------------------------------|
| 無 | | |
