<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0 (minor update with Spec Kit principles integration)
- Modified principles: Enhanced with Spec Kit core directives and architectural mandates
- Added sections: Core Prime Directive, The Source of Truth, Architectural Mandates, Development Discipline, AI Agent Directives
- Removed sections: None (existing principles enhanced)
- Templates requiring updates: ✅ Updated all template references to align with new principles
- Follow-up TODOs: None
-->

# slide-sdd-spec-kit Constitution
<!-- Slide SDD Spec Kit: Specification-driven development toolkit -->

## 核心宗義 (The Prime Directive)

> **核心宗義 (The Prime Directive)**:
> 本專案嚴格遵循規格驅動開發 (SDD) 原則。**規格 (Specification) 是唯一的真理來源，代碼 (Code) 僅是規格的實作產物。**
> 我們不維護代碼，我們維護規格。

---

## Article I: 權力反轉與真理來源 (The Source of Truth)

1.  **規格為王 (Spec is King)**: 代碼是為了服務規格而存在。所有的功能意圖、業務邏輯與架構決策必須首先存在於 `specs/` 目錄下的文件中。

2.  **禁止私自修改代碼 (No "Ghost" Code)**: 嚴禁在未修改規格或實作計畫的情況下，直接修改業務邏輯代碼。若發現 Bug，必須修正 `spec.md` 或 `plan.md`，並重新生成代碼。

3.  **活的文件 (Living Documentation)**: 規格不是寫完即丟的文檔，而是與代碼同步演進的「可執行資產」。每一次的迭代（包含 Bug fix）都必須反映在規格的變更上。

---

## Article II: 架構原則 (Architectural Mandates)

### 2.1 函式庫優先原則 (Library-First Principle)

*   **獨立性**：所有的功能 (Feature) 必須首先被實作為一個**獨立的函式庫 (Standalone Library)**，具有明確的邊界。
*   **解耦**：嚴禁將功能直接寫死在主應用程式 (Application Logic) 中。主應用程式僅負責組裝 (Wire up) 這些函式庫。
*   **目的**：此原則是為了物理性地隔離功能，消除 Git 合併衝突，並確保模組的可測試性。

### 2.2 CLI 介面強制令 (CLI Interface Mandate)

*   **可觀察性**：每個函式庫都必須暴露一個 **Command-Line Interface (CLI)**。
*   **輸入/輸出**：CLI 必須接受純文字或 JSON 作為輸入，並輸出純文字或 JSON。這確保了 AI 與人類都能輕鬆驗證函式庫的行為，無需啟動複雜的 UI。

### 2.3 避免過度抽象 (Anti-Abstraction)

*   **直接使用**：優先使用框架 (Framework) 或語言提供的原生功能。除非有絕對必要，否則禁止建立「通用包裝層 (Generic Wrappers)」或過度設計的介面。
*   **簡單性**：在初始實作階段 (0-to-1)，專案結構應保持扁平且極簡（例如：不超過 3 個子專案），除非經過架構審查。

---

## Article III: 開發流程紀律 (Workflow Discipline)

### 3.1 規格優先開發 (Specification-First Development)

所有特性 (Feature) 必須以清晰的規格開始實作。規格必須滿足以下條件：
*   **可測試性**：規格中的每項需求都必須是可驗證的，無需涉及實作細節。
*   **使用者中心**：規格應針對利益相關者編寫，而非開發者。
*   **技術無關**：規格不應涉及特定框架、程式語言或工具。

### 3.2 規格驅動工作流程 (Specification-Driven Workflow)

每項特性都必須遵循以下流程：
1. 規格 (Specification) → 2. 計畫 (Planning) → 3. 實作 (Implementation) → 4. 驗證 (Validation)

代碼變更必須對應規格的更新。無經核准的規格，不得進行實作工作。

### 3.3 測試優先鐵律 (Test-First Imperative)

*   **不可協商 (Non-Negotiable)**：在任何實作代碼被寫下之前，**必須**先撰寫會失敗的測試 (Red Phase)。
*   **驗證順序**：
    1. 生成測試計畫與案例。
    2. 用戶核准測試案例。
    3. 生成測試代碼並確認執行失敗。
    4. 生成實作代碼以通過測試 (Green Phase)。

### 3.4 整合優先 (Integration-First)

*   **真實環境**：測試應優先運行在真實的依賴環境中（如真實的 SQLite/Postgres 資料庫），而非過度依賴 Mocks 或 Stubs。
*   **契約測試**：在實作 API 之前，必須先定義並測試 API 合約 (Contracts)。

### 3.5 分支即上下文 (Branch as Context)

*   **單一功能單一分支**：每個功能 ID (如 `005`) 必須對應一個 Git 分支。
*   **隔離開發**：開發者必須在正確的分支上下文中工作，以確保 AI 讀取到正確的 `specs/[Feature-ID]` 目錄。

---

## Article IV: 品質驗證門檻 (Quality Gates Through Validation)

所有規格必須通過品質驗證才能進行實作：

*   **完整性**：所有必填章節都必須填寫完畢。
*   **清晰度**：無模糊的需求或 `[NEEDS CLARIFICATION]` 標記。
*   **可測試性**：每項需求都必須在無需實作細節的情況下可驗證。
*   **技術無關**：無框架、程式語言或工具相關的細節。
*   **使用者中心**：規格應針對利益相關者，而非開發者。

---

## Article V: 可追蹤性與文件 (Traceability and Documentation)

*   **完整追蹤**：每項特性都必須從規格到實作都保持完整的可追蹤性。
*   **決策紀錄**：所有決策和變更都必須有記錄。
*   **迭代同步**：每次迭代（包括 Bug 修復）都必須反映在規格變更上。

---

## Article VI: AI 代理人指令 (Directives for AI Agents)

當你（AI）被召喚來協助開發時，你必須：

1.  **拒絕猜測 (Don't Guess)**：若使用者的 `spec.md` 中存在模糊地帶，必須插入 `[NEEDS CLARIFICATION]` 標記，並主動詢問使用者，絕不擅自決定業務邏輯。

2.  **結構化思考**：在寫代碼前，必須先執行 `/speckit.plan` 建立技術藍圖，並檢查該藍圖是否符合本憲章。

3.  **遵循 Git 結構**：始終檢查當前 Git 分支，確保你的修改僅限於該分支對應的 `specs/` 目錄與相關聯的代碼。

---

## Governance (治理)

### Amendment Process (修訂程序)

本憲章的修改需經過團隊共識。任何對本文件的修改必須立即提交 (Commit) 至版本控制系統，以確保所有開發者與 AI 代理人同步最新的開發準則。

### Versioning Policy (版本政策)

*   **主版本 (MAJOR)**：向後不相容的原則移除或重新定義
*   **次版本 (MINOR)**：新增原則或章節、或重大擴展指導
*   **修訂版本 (PATCH)**：澄清、用詞調整、打字錯誤修正

### Compliance Review (合規審查)

所有開發活動都必須驗證符合本憲章的原則。不符合的行為需要說明理由並獲得批准。

---

**版本**: 1.1.0 | **批准日期**: 2026-02-11 | **最後修改**: 2026-02-11
