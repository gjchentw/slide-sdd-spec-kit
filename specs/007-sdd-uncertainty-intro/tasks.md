# 任務列表：新增 SDD 不確定性處理機制投影片

**輸入**: 來自 `/specs/007-sdd-uncertainty-intro/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 專案初始化與基本結構

- [x] T001 建立投影片 Markdown 檔案 `slides/06-sdd-uncertainty.md`

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T002 在 `index.html` 中新增投影片章節 `slides/06-sdd-uncertainty.md` 的載入設定
- [x] T003.1 [P] 設定 `slides/06-sdd-uncertainty.md` 的基本寬螢幕佈局結構 (21:9)
- [x] T003.2 確保 `slides/06-sdd-uncertainty.md` 內容採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 理解 SDD 的「拒絕猜測」機制 (優先級: P1) 🎯 MVP

**目標**: 說明 SDD 如何透過強制標記 `[NEEDS CLARIFICATION]` 來避免 AI 產生未經授權的決策。

**獨立測試**: 確認投影片包含「AI 拒絕猜測」的說明，並展示 `[NEEDS CLARIFICATION]` 標記的實際樣貌。

### 實作任務

- [x] T004 [P] [US1] 在 `slides/06-sdd-uncertainty.md` 中撰寫「核心差異」與「機制 1：拒絕猜測」的內容
- [x] T005 [P] [US1] 在 `slides/06-sdd-uncertainty.md` 中新增代碼範例展示 `[NEEDS CLARIFICATION]` 標記
- [x] T006 [P] [US1] 在 `slides/06-sdd-uncertainty.md` 中新增「規格狀態流轉」的 Mermaid 狀態圖基礎結構

## 階段 4：使用者故事 2 - 掌握「探索性生成」與「品質攔截」 (優先級: P1)

**目標**: 解釋如何利用 "Stable enough" 規格進行探索，並透過 Checklist 進行品質把關。

**獨立測試**: 確認投影片說明了「探索性版本」的概念以及 `/speckit.checklist` 作為品質柵欄的作用。

### 實作任務

- [x] T007 [P] [US2] 在 `slides/06-sdd-uncertainty.md` 中撰寫「機制 2：探索性生成」的內容，解釋 Stable enough vs Complete
- [x] T008 [P] [US2] 在 `slides/06-sdd-uncertainty.md` 中撰寫「機制 3：品質攔截」的內容，解釋 Checklist 的 Quality Gate 作用
- [x] T009 [US2] 更新 Mermaid 狀態圖，加入「探索性版本」路徑與 Checklist 攔截點

## 階段 5：使用者故事 3 - 認識「持續演進」的迭代循環 (優先級: P2)

**目標**: 建立對 SDD 長期維護模式的正確認知，規格文件是活的文件。

**獨立測試**: 確認投影片展示了如何透過 `/speckit.clarify` 進行規格的增量更新。

### 實作任務

- [x] T010 [P] [US3] 在 `slides/06-sdd-uncertainty.md` 中撰寫「機制 4：持續演進」的內容，介紹 Living Documentation 概念
- [x] T011 [P] [US3] 在 `slides/06-sdd-uncertainty.md` 中新增「總結」頁面，強調消除代碼與規格間隙
- [x] T012 [US3] 完善 Mermaid 狀態圖，展示從「探索性版本」回到「規格更新」的迭代循環

## 階段 6：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [x] T013 檢查 `slides/06-sdd-uncertainty.md` 在 21:9 解析度下的文字排版與溢出情況
- [x] T014 [P] 檢查 Mermaid 圖表在 Reveal.js 中的渲染品質
- [x] T015 執行 `quickstart.md` 中的手動驗證流程
