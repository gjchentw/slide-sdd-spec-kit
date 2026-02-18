# Welcome 專案 SDD 實戰分析

---

## Welcome 專案背景

### 一個真實運作的 Spigot 插件

- **目標**: 提供伺服器自定義的歡迎與白名單管理功能。
- **技術堆疊**:
  - **語言**: Java 25 (Preview Features)
  - **建置工具**: Gradle (Kotlin DSL)
  - **平台**: Spigot/Paper 1.21.4
  - **CI/CD**: GitHub Actions (自動化構建與測試)
- **開發模式**: 全程採用 SDD (Spec-Driven Development)。

---

## 結構化的規格管理

### `specs/` 目錄：專案的單一真理來源

```text
Welcome/
├── specs/
│   ├── 001-spigot-init/       # 初始架構
│   ├── 012-i18n-support/      # 國際化功能
│   └── 015-fix-performance/   # 效能優化
├── src/main/java/             # 實作代碼
└── build.gradle.kts           # 建置腳本
```

- **每一個功能** 都有獨立的規格目錄。
- **每一個決策** 都可追溯至 `plan.md` 與 `research.md`。

---

## 「膠囊 (Capsule)」概念實踐

### 規格與實作的原子化綁定

在 Welcome 專案中，我們嚴格執行：

1. **分支即規格**: `012-i18n-support` 分支同時包含該功能的 `spec.md` 與 `LanguageManager.java`。
2. **不可分割**: 提交代碼時，必須同時更新對應的規格文件。
3. **歷史可讀**: 透過 Git Log 可以清楚看到「需求 -> 計畫 -> 實作」的完整演進鏈。

---

## 案例 1：Spigot 插件初始化 (001)

### 從零開始的架構定義

- **規格 (Spec)**:
  - **FR-001**: 使用 Java 25 Preview Features。
  - **FR-002**: CI/CD 自動產生 Nightly Build。
- **計畫 (Plan)**:
  - **Toolchain**: Gradle Kotlin DSL + GitHub Actions。
  - **Main Class**: `WelcomePlugin` 繼承 `JavaPlugin`。
- **實作 (Implement)**:
  - **`build.gradle.kts`**: 完整的依賴配置。
  - **`plugin.yml`**: Spigot 插件描述檔。
  - **`ci.yml`**: 自動化構建流程。

---

## 案例 2：國際化與配置重構 (012)

### 處理模糊需求的過程

- **模糊需求**: "要支援多國語言，並根據玩家 Locale 自動切換。"
- **澄清 (Clarify)**:
  - Q: 支援哪些語言？ -> A: en_US, zh_TW, ja_JP, zh_CN, la_US。
  - Q: 預設語言？ -> A: en_US。
- **計畫 (Plan)**:
  - **Data Model**: `Locale` Enum, `MessageBundle` Class。
  - **Logic**: `LanguageManager` 負責載入與回退 (Fallback) 機制。

---

## SDD 實踐比較

| 特性 | 001-spigot-init (架構) | 012-i18n-support (邏輯) |
| :--- | :--- | :--- |
| **重點** | 工具鏈與環境配置 | 演算法與資料結構 |
| **測試** | CI Pipeline (Build Pass) | 單元測試 (Unit Test) |
| **規格** | 硬性約束 (Must Have) | 功能描述 (User Story) |
| **計畫** | 設定檔與腳本 | 類別設計與介面合約 |

---

## 憲章 (Charter) 執行

### `GEMINI.md`：專案的憲法

- **規範原則**：
  - **I. 外部 Markdown**: 內容定義在 `.md` 檔案中。
  - **II. Mermaid**: 圖表使用 Mermaid.js 繪製。
  - **VI. 正體中文優先**: 內容與文件使用正體中文。
- **自動化檢查**：
  - **Action**: `check-charter.yml`
  - **Script**: `check-prerequisites.sh`

---

## 憲章檢查流程 (Welcome 專案)

<div class="mermaid">
graph TD
    A[Push Code] --> B[GitHub Action]
    B --> C{Check Charter}
    C -->|Fail| D[Block Merge]
    C -->|Pass| E[Build Plugin]
    E --> F[Release Nightly]
    
    subgraph "Local Development"
    G[/speckit.plan/] --> H[Constitution Check]
    H -->|Fail| I[Request Justification]
    H -->|Pass| J[Generate Plan]
    end
</div>

---
