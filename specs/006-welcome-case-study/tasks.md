# 任務列表：新增 Welcome 專案 SDD 實戰案例投影片

**輸入**: 來自 `/specs/006-welcome-case-study/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 專案初始化與基本結構

- [x] T001 建立投影片 Markdown 檔案 `slides/05-welcome-case-study.md`

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T002 在 `index.html` 中新增投影片章節 `slides/05-welcome-case-study.md` 的載入設定
- [x] T003.1 [P] 設定 `slides/05-welcome-case-study.md` 的基本寬螢幕佈局結構 (21:9)
- [x] T003.2 確保 `slides/05-welcome-case-study.md` 內容採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 概覽 Welcome 專案的 SDD 結構 (優先級: P1) 🎯 MVP

**目標**: 展示 Welcome 專案如何組織其規格與實作，讓使用者看到「規格即代碼」的實踐結果。

**獨立測試**: 確認投影片包含 Welcome 專案的 `specs/` 目錄截圖或結構說明，並對應到 SDD 的各個階段。

### 實作任務

- [x] T004 [P] [US1] 在 `slides/05-welcome-case-study.md` 中撰寫 Welcome 專案背景介紹（Spigot 插件、Java 25、Gradle）
- [x] T005 [P] [US1] 在 `slides/05-welcome-case-study.md` 中新增 `specs/` 目錄結構的說明，展示 `spec.md`, `plan.md` 等檔案的組織方式
- [x] T006 [P] [US1] 在 `slides/05-welcome-case-study.md` 中解釋「規格即代碼」的「膠囊 (Capsule)」概念在 Welcome 專案中的體現

## 階段 4：使用者故事 2 - 深入分析單一功能的開發歷程 (優先級: P1)

**目標**: 以具體案例（初始化與國際化）解釋 SDD 如何將規格轉化為實作。

**獨立測試**: 確認投影片展示了 `012-i18n-support` 的規格要求與最終實作結果的關聯。

### 實作任務

- [x] T007 [P] [US2] 在 `slides/05-welcome-case-study.md` 中分析「案例 1：初始化架構 (001-spigot-init)」，展示從規格到 CI 建置的流程
- [x] T008 [P] [US2] 在 `slides/05-welcome-case-study.md` 中分析「案例 2：國際化支援 (012-i18n-support)」，展示如何拆解模糊需求
- [x] T009 [P] [US2] 在 `slides/05-welcome-case-study.md` 中比較兩個案例在 SDD 流程中的異同

## 階段 5：使用者故事 3 - 驗證 Welcome 專案的憲章執行 (優先級: P2)

**目標**: 展示 SDD 如何透過憲章確保架構一致性。

**獨立測試**: 確認投影片列出 Welcome 的核心憲章原則並說明自動化檢查機制。

### 實作任務

- [x] T010 [P] [US3] 在 `slides/05-welcome-case-study.md` 中列出 Welcome 專案的 `GEMINI.md` 憲章原則（如外部 Markdown、正體中文優先）
- [x] T011 [US3] 在 `slides/05-welcome-case-study.md` 中使用 Mermaid 流程圖展示 GitHub Actions 如何執行憲章檢查

## 階段 6：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [x] T012 檢查 `slides/05-welcome-case-study.md` 在 21:9 解析度下的文字排版與溢出情況
- [x] T013 [P] 檢查 Mermaid 圖表在 Reveal.js 中的渲染品質
- [x] T014 執行 `quickstart.md` 中的手動驗證流程
