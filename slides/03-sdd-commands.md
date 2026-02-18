# Spec Kit 指令流程


---

## 階段 1：確立憲章 (Project Setup)

### 指令：`/speckit.constitution [原則描述]`

- **作用**：定義專案的不可協商規則（如：Library-First, Test-First）。
  - 這是所有後續 AI 生成代碼的「最高指導原則」。
- **時機**：專案初始化時執行一次，或當團隊決定改變架構方針時執行。

---

## 階段 2：啟動新功能 (Kickoff)

### 指令：`/speckit.specify [功能描述]`

- **作用**：
  1. 自動決定下一個功能編號（如 `005`）。
  2. 自動建立並切換到對應的 Git 分支（如 `005-feature-name`）。
  3. 建立 `spec.md` 模板並填入初步需求。
- **重點**：描述重點在於「做什麼 (What)」與「為什麼 (Why)」，避免提及技術實作細節。

---

## 階段 3：提煉與驗收 (Refinement Loop)

### 指令 A：`/speckit.clarify [關注點]`
- **作用**：AI 針對安全性、邊界案例提出問題，並標記 `[NEEDS CLARIFICATION]`。

### 指令 B：`/speckit.checklist`
- **作用**：執行規格健康度檢查。確保所有待釐清事項都已解決。
- **時機**：反覆執行直到規格清晰為止。

---

## 階段 4：生成實作計畫 (Technical Planning)

### 指令：`/speckit.plan [技術堆疊偏好]`

- **作用**：根據 `spec.md` 與 `constitution.md`，生成詳細的 `plan.md`。
- **內容**：包含資料模型、API 合約、測試策略與架構決策。
- **重點**：這是「意圖」轉變為「執行計畫」的關鍵步驟。

---

## 階段 5：任務拆解 (Task Breakdown)

### 指令：`/speckit.tasks`

- **作用**：分析 `plan.md`，生成 `tasks.md`。
- **特性**：系統自動識別可平行處理 (Parallelization) 的任務，並標記依賴關係。

---

## 階段 6：驗證與實作 (Execution)

### 指令 A：`/speckit.analyze` (選用)
- **作用**：在寫 code 之前，再次審計計畫與現有代碼庫的相容性。

### 指令 B：`/speckit.implement`
- **作用**：AI 代理人開始執行 `tasks.md` 中的項目。
- **原則**：遵循 TDD 原則，先寫測試（Red），再寫實作（Green）。

---

## 指令流向總結

<div class="mermaid">
graph LR
    Start[Start] --> Const(/speckit.constitution)
    Const --> New{New Feature?}
    New -->|Yes| Spec(/speckit.specify)
    Spec --> Clarify(/speckit.clarify)
    Clarify --> Check(/speckit.checklist)
    Check -->|Pass| Plan(/speckit.plan)
    Check -->|Fail| Clarify
    Plan --> Tasks(/speckit.tasks)
    Tasks --> Analyze(/speckit.analyze)
    Analyze --> Impl(/speckit.implement)
    Impl --> Code[Code Generated]

    style Start fill:#f9f,stroke:#333
    style Code fill:#ff9,stroke:#333
</div>

**核心價值**：先有明確的意圖（Spec），再有周詳的計畫（Plan），最後才是代碼（Code）。
