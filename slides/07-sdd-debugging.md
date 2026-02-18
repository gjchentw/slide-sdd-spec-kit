# SDD 規格除錯流程

---

## 核心哲學：修復配方，而非修復蛋糕

### Fix the Recipe, Not the Cake

- **傳統做法 (水管工)**：直接修改代碼堵住漏洞。
  - 後果：代碼與規格脫節，下次 AI 生成時 Bug 可能回歸。
- **SDD 做法 (建築師)**：回頭修改規格 (Source of Truth)。
  - 原則：**Bug 的存在即代表規格的不完整**。

---

## 為什麼不能只修代碼？

### 規格是唯一的真理來源

- 如果 003 功能有 Bug，但規格說它是正確的，那**規格就是錯的**。
- **缺失的邊界條件**：未過濾 SQL 注入字元。
- **缺失的測試場景**：未考慮特殊符號輸入。
- **行動**：必須在規格中明確加入這些約束，讓未來的開發者（與 AI）知道這裡曾經有個坑。

---

## 除錯流程對比

<div class="mermaid">
flowchart LR
    subgraph Traditional["Traditional Debugging"]
    A[Bug Found] --> B[Fix Code]
    B --> C[Deploy]
    style B fill:#f96
    end

    subgraph SDD["SDD Debugging"]
    D[Bug Found] --> E[Update Spec]
    E --> F[Update Plan]
    F --> G[Fix Code]
    G --> H[Deploy]
    style E fill:#9f6
    style F fill:#9f6
    style G fill:#9f6
    end
</div>

---

## 步驟 1：建立修復環境 (Git Setup)

### 從最新的 Main 切出修復分支

假設 005 已上線，要修復 003 的 Bug：

1. **同步主幹**：`git checkout main && git pull`
2. **建立分支**：`git checkout -b 003-feature-name-fix`
   - **命名建議**：保留原功能編號 (003)，讓 Spec Kit 自動鎖定 `specs/003-.../` 上下文。

---

## 步驟 2：挑戰規格 (Challenge the Spec)

### 新增約束與失敗測試 (Red Phase)

打開 `specs/003-.../spec.md`：

1. **新增約束**：明確描述導致 Bug 的場景（例如：「系統必須拒絕 SQL 注入字元」）。
2. **新增測試案例**：這是最重要的。
   - 在規格或計畫中加入一個**目前會失敗**的測試場景 (Regression Test)。

---

## 步驟 3：SDD 修復循環 (The Fix Cycle)

### 讓工具幫你修復

1. **更新計畫** (`/speckit.plan`)：告訴 AI 你更新了規格。AI 會重新分析並更新 `plan.md`。
2. **強制測試失敗** (`/speckit.implement`)：
   - AI 先生成針對該 Bug 的測試代碼。
   - 確認測試失敗 (Red Phase) -> 證明 Bug 重現成功。
3. **生成修復代碼**：
   - AI 生成通過該測試的應用程式代碼 (Green Phase)。

---

## 步驟 4：驗證與合併 (Verify & Merge)

### 提交膠囊

1. **影響範圍檢查**：Spec Kit 確保 003 的修復不會破壞 005 的功能。
2. **提交**：將更新後的 `specs/` 文件與代碼一起 commit。
3. **合併**：發起 Pull Request 將 `003-fix` 合併回 `main`。

> 你的 specs/003 文件現在反映了系統的真實行為，包含了對該 Bug 的防禦機制。

---

## SDD 修復循環全覽

<div class="mermaid">
graph TD
    A[Start: Bug in 003] --> B[Checkout main]
    B --> C[Branch 003-fix]
    C --> D[Update specs/003/spec.md]
    D --> E{Plan Update}
    E -->|/speckit.plan| F[New Plan]
    F --> G{Implement Test}
    G -->|/speckit.implement| H[Test Fails (Red)]
    H --> I{Implement Fix}
    I -->|/speckit.implement| J[Test Passes (Green)]
    J --> K[Verify 005 Integrity]
    K --> L[Merge to main]
</div>

