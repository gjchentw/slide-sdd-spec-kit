# 規格迭代與分支策略

---

## Git 分支即「膠囊」 (Capsule)

### 規格與代碼的原子化管理

- **自動建立與綁定**：使用 `/speckit.specify` 時，系統自動根據功能編號與名稱建立 Git 分支。
- **規格代碼共存**：在此分支中，所有的規格文件 (`spec.md`, `plan.md`) 與實作代碼 (Source Code) 處於同一個版本環境。
- **版本一致性**：提交 (Commit) 同時包含「設計意圖」與「實作結果」，確保任何時間點的代碼都能追溯到其原始需求。

---

## 規格迭代循環

<div class="mermaid">
graph TD
    subgraph "Feature Branch (Capsule)"
    A[Specification] -->|/speckit.plan| B[Technical Plan]
    B -->|/speckit.implement| C[Working Code]
    C -->|Feedback/Gap| A
    end
    
    C -->|Merge| Main[Main Branch]
    Main -->|New Feature| A
</div>

- **封裝性**：分支在合併前，是一個獨立的實驗空間，允許規格與代碼同步演進。
- **追溯性**：合併至主分支後，Git 歷史紀錄清晰顯示了功能從規格到代碼的完整轉化過程。

---

## 處理規格的不確定性

### 擁抱變動，拒絕通靈

- **拒絕猜測 (No Guessing)**：當需求模糊時，AI 標記 `[NEEDS CLARIFICATION]` 而非自行腦補。
- **探索性生成 (Explorative)**：允許在規格「足夠穩定」時開始計畫，不強求一次到位。
- **品質攔截 (Checklists)**：透過 `/speckit.checklist` 強制執行品質門檻，確保關鍵缺陷在實作前被發現。
- **持續演進 (Living Documentation)**：規格不是死的，而是隨著開發過程不斷修正與提煉的活文件。

---

## SDD 的防錯機制

| 機制 | 作用 | 目的 |
| :--- | :--- | :--- |
| **Clarify** | 提出邊界案例問題 | 消除認知偏差 |
| **Checklist** | 掃描規格完整度 | 避免遺漏非功能需求 |
| **Plan Audit** | 實作前架構審查 | 確保技術決策合理性 |
| **Red-Green** | 先寫測試再實作 | 確保代碼符合規格預期 |

