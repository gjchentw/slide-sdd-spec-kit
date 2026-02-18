# 實作計畫：新增 Spec Kit 規格迭代與分支策略投影片

**分支**: `005-add-sdd-iteration-intro` | **日期**: 2026-02-18 | **規格文件**: [specs/005-add-sdd-iteration-intro/spec.md](spec.md)
**輸入**: 來自 `/specs/005-add-sdd-iteration-intro/spec.md` 的功能規格

**備註**: 此範本由 `/speckit.plan` 指令填寫。

## 摘要

本功能將新增一組投影片，深入介紹 Spec Kit 的規格迭代與分支策略。
內容涵蓋 Git 分支如何作為「膠囊」封裝規格與代碼，以及 SDD 如何處理規格的不確定性。
將建立獨立的 Markdown 檔案 `slides/04-sdd-iteration.md`，並於 `index.html` 中載入。
其中將包含 Mermaid 流程圖以視覺化展示迭代循環。

## 技術背景

**語言/版本**: HTML5, JavaScript (reveal.js 5.x)
**主要依賴**: reveal.js, reveal.js-mermaid-plugin
**儲存**: Markdown files (`slides/04-sdd-iteration.md`)
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
specs/005-add-sdd-iteration-intro/
├── plan.md              # 此檔案
├── research.md          # 階段 0 輸出
├── data-model.md        # 階段 1 輸出
├── quickstart.md        # 階段 1 輸出
├── contracts/           # 階段 1 輸出
└── tasks.md             # 階段 2 輸出
```

## 複雜度追蹤

| 違規項目 | 必要原因 | 拒絕簡單替代方案的理由 |
|-----------|------------|-------------------------------------|
| 無 | | |
