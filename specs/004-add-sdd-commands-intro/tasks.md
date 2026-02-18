# 任務列表：新增 Spec Kit 指令與 SDD 流程對照投影片

**輸入**: 來自 `/specs/004-add-sdd-commands-intro/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 準備新的投影片檔案與結構

- [x] T001 [P] 建立 `slides/03-sdd-commands.md` 檔案

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T003.1 確保所有新建立的文件範本皆採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 了解 SDD 指令流程 (優先級: P1) 🎯 MVP

**目標**: 顯示 Spec Kit 指令流程

**獨立測試**: 驗證投影片正確載入且指令說明清晰

### 實作任務

- [x] T010 [P] [US1] 撰寫「階段 1: 確立憲章」與「階段 2: 啟動新功能」至 `slides/03-sdd-commands.md`
- [x] T011 [US1] 撰寫「階段 3: 提煉與驗收」與「階段 4: 生成實作計畫」至 `slides/03-sdd-commands.md`
- [x] T012 [US1] 撰寫「階段 5: 任務拆解」與「階段 6: 驗證與實作」至 `slides/03-sdd-commands.md`
- [x] T013 [US1] 加入 Mermaid 流程圖至 `slides/03-sdd-commands.md` (使用 graph LR)
- [x] T014 [US1] 修改 `index.html` 以載入 `slides/03-sdd-commands.md` (置於 Spec Kit Intro 之後)
- [x] T015 [US1] 驗證內容在 1920x1080 下的排版效果

---

## 階段 N：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [ ] TXXX [P] 更新 `docs/` 中的文件
- [ ] TXXX 程式碼清理與重構
