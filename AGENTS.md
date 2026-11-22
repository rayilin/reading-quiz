# 閱讀測驗（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介
《孫悟空三借芭蕉扇》國語文閱讀測驗系統、SOIL 動畫教學簡報與全班即時多人對戰競技場。

## 關鍵時程
- 專案發布與上線：2026-11-20

## 目標與路線圖
- [x] 階段一：專案基礎建設與規格確認 (L1/L2/L3 初始化完成)
- [x] 階段二：PDF 文字抽驗、校對與 Word/TXT 講義檔製作
- [x] 階段三：SOIL 教學簡報建置（11 頁，包含 3 個關鍵 🎬 動態解說動畫視窗區塊）
- [x] 階段四：互動教學網頁建置（包含全班多人大亂鬥對戰模式、朗讀、測驗與工具）
- [x] 階段五：部署上線至 GitHub Pages

## 資料夾結構
```
C:\1151120
├── .gitignore
├── .github/
│   └── workflows/
│       └── pages.yml              # GitHub Pages 自動部署工作流
├── AGENTS.md
├── handoff.md
├── 孫悟空三借芭蕉扇.pdf              # 原始素材 PDF
├── 孫悟空三借芭蕉扇.txt              # UTF-8 純文字檔
├── 孫悟空三借芭蕉扇.docx             # 排版 Word 文件
├── 孫悟空三借芭蕉扇_SOIL教學簡報.pptx  # 16:9 SOIL 動畫教學簡報 (含 3 個 🎬 動畫視窗)
├── 孫悟空三借芭蕉扇_SOIL動畫版.pptx     # 嵌入 mp4 的動畫版（影片內容為模板骨架，待重製）
├── 教學網頁/
│   └── index.html                 # 互動教學與全班多人對戰單檔網頁
└── slides/
    └── sun-wukong-fan/
        └── index.html             # Reveal.js 網頁簡報（12 頁，純投影無互動）
```

## 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|------|------|------|---------|
| L1 | 本地 | `AGENTS.md`＋`handoff.md` | 每個 session |
| L2 | GitHub | rayilin/reading-quiz | 指定時 |
| L3 | Obsidian | 1151120/專案工作流程.md | 有需要時 |

## 上線網址
- **教學網頁與全班對戰**：[https://rayilin.github.io/reading-quiz/](https://rayilin.github.io/reading-quiz/)
- **GitHub Repo**：[https://github.com/rayilin/reading-quiz](https://github.com/rayilin/reading-quiz)

## 工作約定
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 修改共用檔案前先讀最新內容，避免覆蓋其他 Agent 的變更
- 所有回應與文件使用繁體中文
- 修改前先確認計畫，優先保留原有資料結構

## 安全與隱私（不可違反）
- **不把 API key、密碼、憑證寫進 repo**，也不要貼進 `AGENTS.md`／`handoff.md`；一律放 `.env` 並列入 `.gitignore`
- **學生資料只用座號**，不出現姓名、學號、班級以外的個資、照片或聯絡方式
- 要公開分享前，先確認檔案裡沒有上述兩類內容
