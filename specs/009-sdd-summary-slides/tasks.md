# 任務列表：新增 SDD 總結投影片

**輸入**: 來自 `/specs/009-sdd-summary-slides/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 專案初始化與基本結構

- [x] T001 建立投影片 Markdown 檔案 `slides/08-summary.md`

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T002 在 `index.html` 中新增投影片章節 `slides/08-summary.md` 的載入設定
- [x] T003.1 [P] 設定 `slides/08-summary.md` 的基本寬螢幕佈局結構 (21:9)
- [x] T003.2 確保 `slides/08-summary.md` 內容採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 總覽 SDD 核心價值 (優先級: P1) 🎯 MVP

**目標**: 強化觀眾對 SDD 核心精神的印象，包括規格即真理、自動化驗證與持續演進。

**獨立測試**: 確認投影片包含 SDD 三大支柱的金字塔圖或摘要列表。

### 實作任務

- [x] T004 [P] [US1] 在 `slides/08-summary.md` 中撰寫「核心價值回顧」內容
- [x] T005 [P] [US1] 在 `slides/08-summary.md` 中使用 Mermaid 繪製 SDD 核心價值金字塔圖

## 階段 4：使用者故事 2 - 回顧工具與流程 (優先級: P1)

**目標**: 幫助使用者將分散的指令知識點串聯成完整的 workflow，並提供下一步行動指引。

**獨立測試**: 確認投影片包含 Spec Kit 指令全景圖與行動呼籲。

### 實作任務

- [x] T006 [P] [US2] 在 `slides/08-summary.md` 中使用 Mermaid Mindmap 繪製 Spec Kit 工具鏈全景圖
- [x] T007 [P] [US2] 在 `slides/08-summary.md` 中新增「下一步行動 (Call to Action)」頁面，引導開始使用

## 階段 5：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [x] T008 檢查 `slides/08-summary.md` 在 21:9 解析度下的文字排版與溢出情況
- [x] T009 [P] 檢查 Mermaid 圖表 (金字塔圖與心智圖) 在 Reveal.js 中的渲染品質
- [x] T010 執行 `quickstart.md` 中的手動驗證流程
