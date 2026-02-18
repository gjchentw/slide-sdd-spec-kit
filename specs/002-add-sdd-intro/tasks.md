# 任務列表：新增 SDD 運作原理介紹投影片

**輸入**: 來自 `/specs/002-add-sdd-intro/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md, data-model.md

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 準備新的投影片檔案與結構

- [x] T001 [P] 建立 `slides/01-sdd-intro.md` 檔案

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T002 確保 `index.html` 已配置 Mermaid 插件 (前置已完成，僅需確認)
- [x] T003.1 確保所有新建立的文件範本皆採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 瀏覽 SDD 運作原理 (優先級: P1) 🎯 MVP

**目標**: 顯示 SDD 核心概念與流程圖

**獨立測試**: 驗證投影片正確載入且 Mermaid 圖表渲染正常

### 實作任務

- [x] T010 [P] [US1] 撰寫「權力反轉 (Power Inversion)」內容至 `slides/01-sdd-intro.md`
- [x] T011 [US1] 撰寫「SDD 工作流 (The SDD Workflow)」內容並加入 Mermaid 流程圖至 `slides/01-sdd-intro.md`
- [x] T012 [US1] 修改 `index.html` 以載入 `slides/01-sdd-intro.md` (置於 cover 之後)
- [x] T013 [US1] 驗證內容在 1920x1080 下的排版效果，必要時調整 Markdown 分頁

---

## 階段 N：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [ ] TXXX [P] 更新 `docs/` 中的文件
- [ ] TXXX 程式碼清理與重構
