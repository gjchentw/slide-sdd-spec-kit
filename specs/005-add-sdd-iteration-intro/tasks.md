# 任務列表：新增 Spec Kit 規格迭代與分支策略投影片

**輸入**: 來自 `/specs/005-add-sdd-iteration-intro/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 專案初始化與基本結構

- [x] T001 建立投影片 Markdown 檔案 `slides/04-sdd-iteration.md`

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T002 在 `index.html` 中新增投影片章節 `slides/04-sdd-iteration.md` 的載入設定
- [x] T003.1 [P] 設定 `slides/04-sdd-iteration.md` 的基本寬螢幕佈局結構 (21:9)
- [x] T003.2 確保 `slides/04-sdd-iteration.md` 內容採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 了解分支策略 (優先級: P1) 🎯 MVP

**目標**: 介紹 Spec Kit 如何利用 Git 分支管理規格與代碼，實現「膠囊化」概念。

**獨立測試**: 導航至分支策略章節，確認包含「自動綁定」、「規格代碼共存」、「版本一致性」的說明。

### 實作任務

- [x] T004 [P] [US1] 在 `slides/04-sdd-iteration.md` 中撰寫「分支策略」內容，包含自動建立與綁定分支說明
- [x] T005 [P] [US1] 在 `slides/04-sdd-iteration.md` 中新增「規格與代碼共存 (膠囊化)」概念說明
- [x] T006 [P] [US1] 在 `slides/04-sdd-iteration.md` 中新增「版本控制一致性」說明
- [x] T007 [US1] 在 `slides/04-sdd-iteration.md` 中新增視覺化展示 Git 分支規格迭代的 Mermaid 流程圖

## 階段 4：使用者故事 2 - 掌握不確定性處理 (優先級: P1)

**目標**: 展示 SDD 如何處理模糊不清的需求，維持開發進度。

**獨立測試**: 確認投影片包含處理不確定性的四種機制：拒絕猜測、探索性生成、品質攔截、持續演進。

### 實作任務

- [x] T008 [P] [US2] 在 `slides/04-sdd-iteration.md` 中撰寫「不確定性處理」核心機制概覽
- [x] T009 [P] [US2] 在 `slides/04-sdd-iteration.md` 中詳細說明「AI 拒絕猜測 ([NEEDS CLARIFICATION])」機制
- [x] T010 [P] [US2] 在 `slides/04-sdd-iteration.md` 中詳細說明「探索性生成」與「持續演進 (Living Doc)」概念
- [x] T011 [P] [US2] 在 `slides/04-sdd-iteration.md` 中詳細說明「品質攔截 (/speckit.checklist)」機制

## 階段 5：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [x] T012 檢查 `slides/04-sdd-iteration.md` 在 21:9 解析度下的文字排版與溢出情況
- [x] T013 [P] 檢查 Mermaid 圖表在 Reveal.js 中的渲染品質與顏色對比度
- [x] T014 執行最終手動驗證，確保所有連結與投影片切換順暢
