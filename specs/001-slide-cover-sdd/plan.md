# 實作計畫：投影片封面與 SDD 開發主題

**分支**: `001-slide-cover-sdd` | **日期**: 2026-02-18 | **規格文件**: [specs/001-slide-cover-sdd/spec.md](spec.md)
**輸入**: 來自 `/specs/001-slide-cover-sdd/spec.md` 的功能規格

**備註**: 此範本由 `/speckit.plan` 指令填寫。執行流程請參閱指令定義。

## 摘要

本功能旨在建立投影片的封面頁，主題為「使用 spec-kit 進行 SDD 開發」。
技術上，將使用 reveal.js 框架，並透過外部 Markdown 檔案載入內容。
封面需動態顯示執行環境中 git config 的 `user.name` 與 `user.email` 資訊。
整體佈局需符合 21:9 (1920x1080) 的寬螢幕規範，並確保所有內容以正體中文呈現。

## 技術背景

**語言/版本**: HTML5, JavaScript (reveal.js 5.x)
**主要依賴**: reveal.js, reveal.js-mermaid-plugin
**儲存**: Markdown files (`slides/00-cover.md`)
**測試**: GitHub Actions (Build & Deploy), Manual Verification
**目標平台**: GitHub Pages
**專案類型**: 靜態投影片網頁
**效能目標**: 首頁載入 < 1s
**限制條件**: 21:9 解析度 (1920x1080)
**規模/範圍**: 單頁封面，但需建立完整專案結構

## 憲章檢查 (Constitution Check)

*關卡：必須在階段 0 研究前通過。在階段 1 設計後重新檢查。*

- [x] **外部 Markdown**: 所有內容是否定義在獨立的 `.md` 檔案中？
- [x] **Mermaid 圖表**: 所有架構/流程圖是否使用 Mermaid.js？ (已規劃配置)
- [x] **寬螢幕優化**: 佈局是否設定為 21:9 (1920x1080)？
- [x] **自動化 CI/CD**: 是否已設定 GitHub Actions 部署至 `gh-pages`？ (將於實作階段設定)
- [x] **直接交付**: 投影片是否可透過 GitHub Pages 直接存取？
- [x] **正體中文優先**: 內容與文件是否皆使用正體中文？

## 專案結構

### 文件 (此功能)

```text
specs/001-slide-cover-sdd/
├── plan.md              # 此檔案 (/speckit.plan 指令輸出)
├── research.md          # 階段 0 輸出 (/speckit.plan 指令)
├── data-model.md        # 階段 1 輸出 (/speckit.plan 指令)
├── quickstart.md        # 階段 1 輸出 (/speckit.plan 指令)
├── contracts/           # 階段 1 輸出 (/speckit.plan 指令)
└── tasks.md             # 階段 2 輸出 (/speckit.tasks 指令 - 非 plan 指令建立)
```

## 複雜度追蹤

> **僅在憲章檢查有違規但必須證成時填寫**

| 違規項目 | 必要原因 | 拒絕簡單替代方案的理由 |
|-----------|------------|-------------------------------------|
| 無 | | |
