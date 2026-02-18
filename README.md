# Slide SDD Spec Kit

[![Deploy to GitHub Pages](https://github.com/gjchentw/slide-sdd-spec-kit/actions/workflows/deploy.yml/badge.svg)](https://github.com/gjchentw/slide-sdd-spec-kit/actions/workflows/deploy.yml)

**Slide SDD Spec Kit** 是一個專門用於展示 **規格驅動開發 (Specification-Driven Development, SDD)** 概念與 **Spec Kit** 工具鏈的簡報專案。

本專案本身也是 **SDD 的實踐範例**。從投影片的規劃、設計到實作，每一頁內容都是透過 Spec Kit 的指令流程 (`specify` -> `plan` -> `implement`) 生成的。

🔗 **[線上觀看簡報](https://gjchentw.github.io/slide-sdd-spec-kit/)**

---

## 專案核心 (Core Philosophy)

本專案旨在透過視覺化的方式，向開發者、PM 與架構師介紹 SDD 的核心價值：

1.  **規格即代碼 (Specification as Code)**：規格文件不是寫完即丟的文檔，而是專案的單一真理來源 (Single Source of Truth)。
2.  **消除不確定性 (No Guessing)**：透過工具機制強制 AI 拒絕猜測，將隱性假設轉化為顯性規格。
3.  **持續演進 (Continuous Evolution)**：軟體開發是動態的，規格文件應隨著專案進展而不斷迭代更新。

---

## 簡報內容 (Slides Content)

本專案包含以下主題，引導觀眾從概念到實踐完整了解 SDD：

1.  **封面與核心價值**：定義 SDD 的三大支柱。
2.  **SDD 簡介**：為什麼我們需要規格驅動開發？
3.  **Spec Kit 工具鏈**：介紹 `/speckit.specify`, `/speckit.plan`, `/speckit.implement` 等指令。
4.  **規格迭代與分支策略**：展示 Git 分支如何作為「膠囊 (Capsule)」封裝規格與代碼。
5.  **Welcome 專案實戰分析**：以真實的 Minecraft 插件專案為例，解析 SDD 在複雜專案中的應用。
6.  **不確定性處理機制**：探討「拒絕猜測」、「探索性生成」與「品質攔截」。
7.  **規格除錯流程**：建立「修復配方，而非修復蛋糕」的除錯新思維。
8.  **總結與回顧**：整合所有知識點的工具鏈全景圖。

---

## 自我實現 (Dogfooding)

本專案的開發過程嚴格遵循 SDD 規範，這意味著：

- **每一組投影片** 都有對應的 `specs/` 目錄。
- **每一次修改** 都始於規格文件的更新，而非直接修改 HTML/Markdown。
- **每一個功能** 都經過了自動化的憲章檢查 (Constitution Check)。

您可以在 [specs/](specs/) 目錄下查看本專案所有投影片的原始規格與實作計畫。

---

## 技術堆疊 (Tech Stack)

- **框架**: [Reveal.js](https://revealjs.com/) (HTML 簡報框架)
- **圖表**: [Mermaid.js](https://mermaid.js.org/) (透過 Markdown 定義流程圖)
- **建置**: GitHub Actions (自動部署至 GitHub Pages)
- **開發工具**: [Spec Kit](https://github.com/google/spec-kit)

---

## 如何開始 (Getting Started)

### 線上瀏覽
直接訪問 GitHub Pages：[https://gjchentw.github.io/slide-sdd-spec-kit/](https://gjchentw.github.io/slide-sdd-spec-kit/)

### 本地開發

1.  **複製專案**
    ```bash
    git clone https://github.com/gjchentw/slide-sdd-spec-kit.git
    cd slide-sdd-spec-kit
    ```

2.  **安裝依賴**
    ```bash
    npm install
    ```

3.  **啟動預覽伺服器**
    ```bash
    npm start
    ```
    瀏覽器將自動開啟 http://localhost:8000

---

## 授權 (License)

本專案採用 [MIT License](LICENSE) 授權。
