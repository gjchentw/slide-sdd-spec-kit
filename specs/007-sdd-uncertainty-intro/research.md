# 研究報告：SDD 不確定性處理機制

## 決策：投影片章節結構

**Decision**: 將內容分為「核心差異」、「四種機制」與「總結」三個部分。

**Rationale**: 
1. **核心差異**: 先點出 SDD 與傳統開發/一般 AI 生成的最大不同（AI 拒絕猜測）。
2. **四種機制**: 依序介紹「拒絕猜測 -> 探索性生成 -> 品質攔截 -> 持續演進」的邏輯閉環。
3. **總結**: 強調 SDD 如何消除規格與代碼的間隙。

## 決策：視覺化表達

**Decision**: 使用 Mermaid State Diagram 展示規格狀態流轉。

**Rationale**: 
1. **狀態清晰**: 規格從 `Draft` -> `Clarification Needed` -> `Stable Enough` -> `Implemented` 的流轉非常適合用狀態圖表達。
2. **攔截點明確**: 可以清楚標示 Checklist 在哪裡進行品質攔截。
