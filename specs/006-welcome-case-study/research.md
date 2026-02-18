# 研究報告：Welcome 專案 SDD 實戰案例分析

## 決策：選擇實踐案例

**Decision**: 選擇 `Welcome` 專案作為 SDD 實戰案例。

**Rationale**: 
1. **完整性**: `Welcome` 專案擁有從 `001` 到 `015` 的完整功能演進紀錄。
2. **典型性**: 涵蓋了基礎架構 (Java/Gradle/Spigot) 與複雜邏輯 (i18n, Whitelist)。
3. **標準化**: 嚴格遵循 spec-kit 的目錄規範 (`specs/`, `spec.md`, `plan.md`)。

**Alternatives considered**: 
- 使用 `slide-sdd-spec-kit` 本身：雖然也是 SDD，但內容多為投影片，技術實作範例較單一。

## 決策：投影片章節規劃

**Decision**: 規劃 4 個核心章節。

**Rationale**: 
1. **專案背景**: 說明 Welcome 是一個 Spigot 插件，技術棧為 Java 25 + Gradle。
2. **SDD 實踐結構**: 展示 `specs/` 目錄如何作為「膠囊」存在。
3. **案例 1 (001-spigot-init)**: 展示如何定義基礎憲章並透過 CI 驗證。
4. **案例 2 (012-i18n-support)**: 展示如何將模糊需求（多語言支援）轉化為具體的 LanguageManager。
