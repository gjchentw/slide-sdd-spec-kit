# 規格驅動開發 (SDD) 原理


---

## 權力反轉 (The Power Inversion)

### 傳統開發
- **程式碼為王**：規格僅是鷹架，開發後即被遺棄。
- **差距必然存在**：規格文件與實際程式碼永遠不同步。

### SDD 開發
- **規格為王**：程式碼服務於規格，是規格的具體產物。
- **消除差距**：當規格與計畫能生成程式碼，差距便不復存在。
- **核心概念**：規格文件 (PRD) 是單一真理來源 (Single Source of Truth)。


---

## SDD 工作流 (The SDD Workflow)

<div class="mermaid">
graph LR
    Idea(創意 Idea) --> Spec(規格 Specification)
    Spec --> Plan(實作計畫 Implementation Plan)
    Plan --> Tasks(任務列表 Tasks)
    Tasks --> Code(程式碼 Code)

    style Idea fill:#f9f,stroke:#333,stroke-width:2px
    style Spec fill:#bbf,stroke:#333,stroke-width:2px
    style Plan fill:#bfb,stroke:#333,stroke-width:2px
    style Tasks fill:#fbf,stroke:#333,stroke-width:2px
    style Code fill:#ff9,stroke:#333,stroke-width:2px
</div>

### 流程步驟
1. **創意發想**：從模糊想法開始。
2. **規格制定**：透過對話生成精確的 PRD。
3. **計畫生成**：AI 分析需求，制定技術架構與計畫。
4. **任務執行**：將計畫拆解為可執行的任務與程式碼。
