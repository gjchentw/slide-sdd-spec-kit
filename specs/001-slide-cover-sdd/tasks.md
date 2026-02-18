# 任務列表：投影片封面與 SDD 開發主題

**輸入**: 來自 `/specs/001-slide-cover-sdd/` 的設計文件
**先決條件**: plan.md (必要), spec.md (使用者故事必要), research.md, data-model.md, contracts/

## 格式：`[ID] [P?] [故事] 描述`

- **[P]**: 可並行執行（不同檔案，無相依性）
- **[故事]**: 此任務所屬的使用者故事（例如：US1, US2, US3）

## 階段 1：設定 (共享基礎設施)

**目的**: 專案初始化與基本結構

- [x] T001 根據實作計畫建立專案結構 (package.json, reveal.js, scripts/)
- [x] T002 初始化 reveal.js 專案並配置 Mermaid 依賴

## 階段 2：基礎建設 (阻塞型先決條件)

- [x] T003.1 配置 GitHub Actions 以進行 gh-pages 部署
- [x] T003.2 將 reveal.js 解析度設定為 1920x1080 (21:9)
- [x] T003.3 在主簡報檔案中初始化 Mermaid.js 插件
- [x] T003.4 確保所有新建立的文件範本皆採用正體中文

**⚠️ 關鍵**: 在此階段完成前，不可開始任何使用者故事的工作

## 階段 3：使用者故事 1 - 顯示專案封面 (優先級: P1) 🎯 MVP

**目標**: 顯示包含作者資訊的封面

**獨立測試**: 驗證封面內容與 git config 一致

### 實作任務

- [x] T010 [P] [US1] 建立 `slides/00-cover.md` 並定義封面內容結構
- [x] T011 [US1] 實作 `scripts/generate-config.js` 以讀取 git config 並輸出 `config.json`
- [x] T012 [US1] 修改 reveal.js 載入邏輯，使其能夠動態讀取 `config.json` 並替換封面變數
- [x] T013 [US1] 調整 CSS 以確保封面在 1920x1080 下符合 21:9 視覺比例
- [x] T014 [US1] 驗證並手動測試封面顯示效果

---

## 階段 N：磨光與橫切關注點

**目的**: 影響多個使用者故事的改進

- [ ] TXXX [P] 更新 `docs/` 中的文件
- [ ] TXXX 程式碼清理與重構
- [ ] TXXX 執行 quickstart.md 驗證
