<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- List of modified principles:
  - I. External Markdown Content → I. 外部 Markdown 內容
  - II. Mermaid Diagramming → II. Mermaid 圖表繪製
  - III. Wide-Screen Optimization (21:9) → III. 寬螢幕優化 (21:9)
  - IV. Automated CI/CD (GitHub Actions) → IV. 自動化 CI/CD (GitHub Actions)
  - V. Direct GitHub Pages Delivery → V. GitHub Pages 直接交付
- Added sections: VI. 正體中文優先 (核心語言原則)
- Templates requiring updates:
  - .specify/templates/plan-template.md (✅ 已更新為正體中文)
  - .specify/templates/spec-template.md (✅ 已更新為正體中文)
  - .specify/templates/tasks-template.md (✅ 已更新為正體中文)
  - .specify/templates/agent-file-template.md (✅ 已更新為正體中文)
- Follow-up TODOs: 無
-->

# Slide SDD Spec Kit 專案憲章

## 核心原則

### I. 外部 Markdown 內容
所有投影片內容「必須」定義在獨立的外部 Markdown 檔案中。主要的 reveal.js HTML 檔案僅作為容器與載入器。這確保了內容與呈現層的分離，並有利於敘事內容的版本控制與協作編輯。

### II. Mermaid 圖表繪製
架構圖、序列圖與流程圖「必須」直接在 Markdown 檔案中使用 Mermaid.js 語法繪製。嚴禁使用不可編輯的圖片檔（如 PNG/JPG）來呈現技術圖表，以確保圖表具備可搜尋性、易於修改且易於維護。

### III. 寬螢幕優化 (21:9)
投影片佈局「必須」針對 21:9 比例（解析度 1920x1080）進行優化。內容位置與字體大小「應」進行校準，以在超寬螢幕上達到最佳閱讀效果與視覺衝擊，同時在標準寬螢幕上保持功能正常。

### IV. 自動化 CI/CD (GitHub Actions)
每次向 main 分支提交代碼時，「必須」觸發 GitHub Actions 工作流，自動將最新版本的投影片構建並部署至 gh-pages 分支。嚴禁手動部署，以確保發布版本始終與原始碼同步。

### V. GitHub Pages 直接交付
最終構建產品「必須」完全相容於 GitHub Pages 並可直接存取。部署架構必須確保投影片無需任何本地設置或特殊主機即可公開查看。

### VI. 正體中文優先
本專案的所有投影片內容、AI 代理人對話、開發規格（Specification）、實作計畫（Plan）及任務列表（Tasks）「必須」採用正體中文（Traditional Chinese）紀錄。這確保了團隊溝通的一致性與本地化品質。

## 技術限制

- **技術棧**: reveal.js, Mermaid.js, GitHub Actions.
- **解析度**: 目標為 21:9 框架內的 1920x1080。
- **託管**: GitHub Pages (gh-pages 分支)。

## 開發流程

1. 在 `.md` 檔案中撰寫投影片內容。
2. 使用開發伺服器進行本地預覽。
3. 提交並推送至 GitHub。
4. 驗證 GitHub Pages 上的部署結果。

## 治理規範
本憲章規範所有使用此工具包生成的投影專案。修正案需透過 Pull Request 更新此檔案，並根據語義化版本規則進行版本跳退。所有實作必須透過自動化 CI 管道驗證是否符合這些原則。

**版本**: 1.1.0 | **核定日期**: 2026-02-18 | **最後修正**: 2026-02-18
