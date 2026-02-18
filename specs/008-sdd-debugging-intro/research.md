# 研究報告：SDD 規格除錯流程

## 決策：核心隱喻 (Metaphor)

**Decision**: 使用「修復配方，而非修復蛋糕 (Fix the Recipe, Not the Cake)」作為貫穿全篇的核心隱喻。

**Rationale**: 
1. **直觀易懂**: 將代碼比喻為蛋糕（產物），規格比喻為配方（藍圖），能快速讓開發者理解為何「只修代碼」是治標不治本。
2. **強調源頭**: SDD 的核心價值在於規格是 Single Source of Truth，此隱喻能強化此概念。

## 決策：修復流程視覺化

**Decision**: 使用 Mermaid 流程圖展示 Git 分支操作與修復循環。

**Rationale**: 
1. **Git 操作複雜性**: 涉及從 main 切出舊功能分支 (checkout)，再合併回去 (merge)，文字描述容易混淆，圖解較清晰。
2. **循環邏輯**: SDD 的 Test-First 循環 (Red -> Green) 是一個閉環，適合用流程圖表達。
