# SDD 不確定性處理機制

---

## 核心差異：拒絕猜測 (No Guessing)

### SDD 與一般 AI 生成的最大不同

- **一般 AI**: 傾向於給出「完整」的答案，即使需要自行腦補細節（Hallucination）。
- **SDD AI**: 被嚴格指令要求「不要猜測」。當規格模糊時，必須顯性化未知。

---

## 機制 1：顯性化未知

### `[NEEDS CLARIFICATION]` 標記

當規格中存在模糊不清的需求（例如：未定義登入方式），AI 會在規格文件中插入標記，而非自作聰明。

```markdown
## Authentication

User logs in to the system. [NEEDS CLARIFICATION: What authentication method? Email/Password, OAuth, or SSO?]
```

- **結果**: 所有的「未知」都變得可見，不會在驗收時才發現 AI 做了未經授權的決策。

---

## 規格狀態流轉

<div class="mermaid">
stateDiagram-v2
    [*] --> Draft
    Draft --> ClarificationNeeded : AI Detects Ambiguity
    ClarificationNeeded --> StableEnough : User Clarifies
    ClarificationNeeded --> Exploration : User Defers
    
    state "探索性生成 (Exploration)" as Exploration
    state "品質攔截 (Checklist)" as Checklist
    
    Exploration --> Checklist : Pre-Plan Check
</div>

---

## 機制 2：探索性生成 (Exploration)

### 不需要 100% 完美的規格

- **原則**: 規格 "Stable enough" 即可，不需 "Complete"。
- **目的**: 
  - 生成「探索性版本」或原型 (Prototype)。
  - 代碼視為一種「探針 (Probe)」，用來驗證想法或架構。
- **應用場景**: 驗證 UI 流程順暢度、資料庫架構效能。

---

## 機制 3：品質攔截 (Quality Gate)

### `/speckit.checklist` 強制執行

在進入計畫階段前，系統會執行檢查：

- **檢測**: 是否存有 `[NEEDS CLARIFICATION]` 標記？
- **告警**: 「還有未決的項目，請確認是否要帶著這些不確定性繼續？」
- **結果**: 強迫開發者**有意識地**管理技術債務，而非無意識地忽略。

---

## 機制 4：持續演進 (Living Documentation)

### 規格是「活的文件」，不是「死合約」

- **迭代循環**:
  1. **部分實作**: 針對已確定的部分 (e.g. 80%) 進行開發。
  2. **規格更新**: 稍後對剩下的 20% 有想法時，修改描述。
  3. **澄清指令**: 執行 `/speckit.clarify`。
- **結果**: AI 根據更新後的規格，重新生成計畫，軟體開發從「一次性交付」轉變為「持續演進」。

---

## 總結：消除代碼與規格的間隙

### SDD 如何應對不確定性

| 階段 | 行為 | 工具機制 |
| :--- | :--- | :--- |
| **Refine** | 拒絕猜測，顯性化未知 | `[NEEDS CLARIFICATION]` |
| **Exploration** | 驗證假設，作為探針 | `spec.md` (Stable enough) |
| **Plan** | 品質攔截，有意識管理 | `/speckit.checklist` |
| **Implement** | 持續演進，增量修正 | `/speckit.clarify` |

---

## SDD 不確定性處理流轉

<div class="mermaid">
stateDiagram-v2
    Draft --> Clarification : Refine
    Clarification --> StableEnough : User Answers
    Clarification --> Exploration : User Defers
    
    StableEnough --> Checklist : Plan
    Exploration --> Checklist : Plan
    
    Checklist --> Implemented : Pass
    Checklist --> Review : Fail (Has Unknowns)
    
    Review --> Exploration : Proceed Anyway (Prototype)
    Review --> Clarification : Fix First
    
    Implemented --> Draft : New Feature / Change
</div>

