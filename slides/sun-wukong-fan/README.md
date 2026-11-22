# 孫悟空三借芭蕉扇

用 `html-slide-builder` 技能產生的 Reveal.js 簡報。

## 看

- 直接雙擊 `index.html`（需要網路：Reveal.js 從 CDN 載入）
- 或在本資料夾跑 `python -m http.server 8099` → <http://127.0.0.1:8099/>

`→` 換頁、`F` 全螢幕、`S` 演講者模式、`Esc` 總覽。

## 互動資料

- 文字雲／投票預設存這台電腦的 `localStorage`（`hsb:sun-wukong-fan:*`）。
- 網址加 `?reset=1` 可清掉本機示範資料。
- 要跨裝置即時同步才需要 Firebase：把 `index.html` 裡的 `CFG` 換成自己的
  `firebaseConfig`，並建 `sun-wukong-fan_wordcloud`（collection）與 `sun-wukong-fan_poll/results`（doc）。
