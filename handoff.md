# 交接檔（handoff.md）

> 任何 Agent、任何電腦接手前**必讀**；收工時**必更新**。本檔只放交接必需的精簡資訊，詳細脈絡放 Obsidian（若有 L3）。

## ⏯️ 目前做到哪
新增《孫悟空三借芭蕉扇》**Reveal.js 網頁簡報**（12 頁，純投影、無互動元件），已逐頁截圖驗收、`validate_deck.py` 通過。依使用者要求移除了投票與文字雲（原大綱版本被打回）。

## 🚦 目前狀態
- 網頁簡報：`C:\1151120\slides\sun-wukong-fan\index.html`
- 本機預覽：`http://127.0.0.1:8099/sun-wukong-fan/`（python http.server 已啟動，port 8099）
- 尚未部署到 GitHub Pages。

## ➡️ 下一步
1. 若要放到網路上給學生：另開一個 repo 或用子路徑部署（現有 `pages.yml` 只發佈 `教學網頁/`，改動會影響對戰頁，需先確認）。
2. `孫悟空三借芭蕉扇_SOIL動畫版.pptx` 內嵌的 `p03/p05/p07.mp4` 是模板骨架畫面，**內容與課文不符**，需重製後再重新產出該 pptx。

## ⚠️ 注意事項
- 網頁簡報刻意不使用 mp4：`videos/sun-wukong-animation/my-video/compositions/p03|p05|p07.html` 只是 `hw-title`/`hw-scribble-transition`/`hw-text-cloud` 的複製檔，沒有改內容，所以畫面是通用模板字樣。
- 簡報頁面左右留白靠 `.reveal .slides > section { padding: 0 56px }`；Reveal 的 `margin` 只影響縮放，不會給內距。
- 截圖驗收時要先 `Reveal.configure({transition:'none'})`，否則會拍到轉場中的位移，誤判為版面溢出。

## 🕐 最後更新
- 時間：2026-11-22 11:10
- 更新者：DeepSeek V4.1 Flash @ DESKTOP-4475O68
- Git push：✅ 已推
