const path = require("path");
const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();

// 設定為 SOIL 標準寬螢幕 LAYOUT_WIDE (13.333 x 7.5 吋)
pptx.layout = "LAYOUT_WIDE";

// 品牌與主題配色 (深色、內容淺色、橘紅色火焰主題)
const COLORS = {
    bgDark: "111827",      // 900 墨黑深色 (封面/結語/行動)
    fgDark: "F9FAFB",      // 深色背景文字 (亮白)
    bgLight: "F8FAFC",     // 50 淺灰 (內容頁)
    fgLight: "1E293B",     // 內容頁內文字色 (深藍灰)
    brandAccent: "EA580C", // 橘紅色 (火焰/重點標示)
    amberAccent: "D97706", // 琥珀金 (提醒/強調)
    cardBg: "FFFFFF",      // 卡片白色
    cardBorder: "E2E8F0"   // 卡片邊框
};

// 輔助函式：設定字型與預設
const FONT_TITLE = "微軟正黑體";
const FONT_BODY = "微軟正黑體";

// 1. 封面頁 (深色頁)
let s1 = pptx.addSlide();
s1.background = { color: COLORS.bgDark };

// 封面標誌
s1.addText("SOIL 教學簡報工作流・國語文經典閱讀", {
    x: 0.8, y: 0.8, w: 10, h: 0.5,
    fontFace: FONT_TITLE, fontSize: 16, bold: true, color: COLORS.amberAccent
});

// 封面大標題
s1.addText("孫悟空三借芭蕉扇", {
    x: 0.8, y: 1.8, w: 11.7, h: 1.5,
    fontFace: FONT_TITLE, fontSize: 44, bold: true, color: COLORS.fgDark
});

// 封面副標題
s1.addText("認清情勢・靈活應變的閱讀理解策略與故事分析", {
    x: 0.8, y: 3.5, w: 11.7, h: 0.8,
    fontFace: FONT_BODY, fontSize: 22, color: "94A3B8"
});

// 課堂資訊卡
s1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 5.2, w: 11.7, h: 1.2,
    fill: { color: "1E293B" }, line: { color: COLORS.brandAccent, width: 2 }
});
s1.addText("對象：國小高年級 ｜ 單元：閱讀高手 第4篇 ｜ 核心價值：遇到困難，要認清情勢，知所應變！", {
    x: 1.0, y: 5.5, w: 11.3, h: 0.6,
    fontFace: FONT_BODY, fontSize: 16, bold: true, color: COLORS.fgDark, align: "center"
});


// 2. 情境引入頁 (內容淺色頁)
let s2 = pptx.addSlide();
s2.background = { color: COLORS.bgLight };

s2.addText("【情境引入】西方必經之地的絕境難關", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 左側情境說明
s2.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 5.6, h: 5.2,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s2.addText("🔥 火焰山的考驗", {
    x: 1.1, y: 1.8, w: 5.0, h: 0.5,
    fontFace: FONT_TITLE, fontSize: 20, bold: true, color: "DC2626"
});
s2.addText("• 地點：離翠雲山六十里之遙\n• 範圍：火焰長達八百里，熱氣逼人\n• 現狀：四周寸草不生\n• 難度：就算是銅腦蓋、鐵身軀，也難越過此山！", {
    x: 1.1, y: 2.5, w: 5.0, h: 3.8,
    fontFace: FONT_BODY, fontSize: 16, color: COLORS.fgLight, lineSpacing: 26
});

// 右側難題思考
s2.addShape(pptx.shapes.RECTANGLE, {
    x: 6.8, y: 1.5, w: 5.7, h: 5.2,
    fill: { color: "FFF7ED" }, line: { color: "FDBA74", width: 1 }
});
s2.addText("💡 孫悟空的心理矛盾", {
    x: 7.1, y: 1.8, w: 5.1, h: 0.5,
    fontFace: FONT_TITLE, fontSize: 20, bold: true, color: COLORS.brandAccent
});
s2.addText("「冤家路窄！當年我收伏紅孩兒，現在碰上他的父母，他們怎麼肯借扇子給我呢？」\n\n思考重點：\n即便明知前途多舛、希望渺茫，但「師命難違」，悟空只能硬著頭皮前往！", {
    x: 7.1, y: 2.5, w: 5.1, h: 3.8,
    fontFace: FONT_BODY, fontSize: 16, color: COLORS.fgLight, lineSpacing: 26
});


// 3. 🎬 動畫演示頁一：芭蕉扇的神奇寶物機制 (內容淺色頁)
let s3 = pptx.addSlide();
s3.background = { color: COLORS.bgLight };

s3.addText("🎬 概念解析一：芭蕉扇的神奇三重威力", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 動畫播放視窗 (8.0 x 4.5 吋)
s3.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 8.0, h: 4.5,
    fill: { color: "0F172A" }, line: { color: COLORS.brandAccent, width: 3 }
});
s3.addText("🎬 【動態解說動畫視窗】\n《芭蕉扇威力與風向變化物理與法寶效果》\n\n一搧熄火 ➔ 二搧生風 ➔ 三搧下雨\n(能將人一搧吹飛八萬四千里)", {
    x: 1.0, y: 2.5, w: 7.6, h: 2.5,
    fontFace: FONT_TITLE, fontSize: 20, bold: true, color: "F1F5F9", align: "center"
});
s3.addText("▶ 點擊播放 15 秒動態展示", {
    x: 0.8, y: 6.1, w: 8.0, h: 0.4,
    fontFace: FONT_BODY, fontSize: 13, bold: true, color: COLORS.brandAccent, align: "center"
});

// 右側文字重點 (3.5 吋寬)
s3.addShape(pptx.shapes.RECTANGLE, {
    x: 9.1, y: 1.5, w: 3.4, h: 5.0,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s3.addText("核心觀察要點：", {
    x: 9.3, y: 1.8, w: 3.0, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.brandAccent
});
s3.addText("1. 法寶特性：非一般竹扇，乃天地造化之寶。\n\n2. 驚人威力：迎風一晃即可變大，一搧便將悟空吹到三千里外的須彌山！\n\n3. 對策關鍵：尋求靈吉菩薩取得「定風丹」。", {
    x: 9.3, y: 2.4, w: 3.0, h: 3.8,
    fontFace: FONT_BODY, fontSize: 14, color: COLORS.fgLight, lineSpacing: 22
});

s3.notes = "【講者備註】\n片長：15 秒。\n教學提問：請學生觀察芭蕉扇與普通扇子有何不同？為什麼第一回合悟空會敗退？\n預期答案：芭蕉扇能變大且威力無窮，一搧就能吹走三千里，必須靠定風丹才能制衡。";


// 4. 一借與二借過程 (內容淺色頁)
let s4 = pptx.addSlide();
s4.background = { color: COLORS.bgLight };

s4.addText("【情節推進】一借被吹走 vs 二借鑽腹討扇", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 兩欄比較版型
s4.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 5.6, h: 5.2,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s4.addText("🌀 一借芭蕉扇（硬碰硬失敗）", {
    x: 1.1, y: 1.8, w: 5.0, h: 0.5,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: "DC2626"
});
s4.addText("• 策略：直接登門請求通報借扇\n• 反應：鐵扇公主怒持寶劍砍殺\n• 結果：公主打不過便用芭蕉扇，一搧將悟空吹至三千里外的小須彌山。", {
    x: 1.1, y: 2.5, w: 5.0, h: 3.8,
    fontFace: FONT_BODY, fontSize: 15, color: COLORS.fgLight, lineSpacing: 24
});

s4.addShape(pptx.shapes.RECTANGLE, {
    x: 6.8, y: 1.5, w: 5.7, h: 5.2,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.brandAccent, width: 2 }
});
s4.addText("🐛 二借芭蕉扇（定風丹＋變身策略）", {
    x: 7.1, y: 1.8, w: 5.1, h: 0.5,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.brandAccent
});
s4.addText("• 策略：服下「定風丹」不再被吹走；變身小蟲鑽入茶沫滑進公主肚子。\n• 行動：在腹中翻滾踢蹬，痛得公主求饒交扇。\n• 結果：成功取得芭蕉扇！", {
    x: 7.1, y: 2.5, w: 5.1, h: 3.8,
    fontFace: FONT_BODY, fontSize: 15, color: COLORS.fgLight, lineSpacing: 24
});


// 5. 🎬 動畫演示頁二：假芭蕉扇越搧火越大的危機對比 (內容淺色頁)
let s5 = pptx.addSlide();
s5.background = { color: COLORS.bgLight };

s5.addText("🎬 概念解析二：假芭蕉扇引發的火焰山危機", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 動畫播放視窗 (8.0 x 4.5 吋)
s5.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 8.0, h: 4.5,
    fill: { color: "0F172A" }, line: { color: "DC2626", width: 3 }
});
s5.addText("🎬 【動態解說動畫視窗】\n《一搧火熊熊 ➔ 再搧大百倍 ➔ 三搧火千丈》\n\n(假芭蕉扇越搧火勢越猛烈的視覺對比過程)", {
    x: 1.0, y: 2.5, w: 7.6, h: 2.5,
    fontFace: FONT_TITLE, fontSize: 20, bold: true, color: "FEF2F2", align: "center"
});
s5.addText("▶ 點擊播放 18 秒動態展示", {
    x: 0.8, y: 6.1, w: 8.0, h: 0.4,
    fontFace: FONT_BODY, fontSize: 13, bold: true, color: "DC2626", align: "center"
});

// 右側分析
s5.addShape(pptx.shapes.RECTANGLE, {
    x: 9.1, y: 1.5, w: 3.4, h: 5.0,
    fill: { color: "FEF2F2" }, line: { color: "FCA5A5", width: 1 }
});
s5.addText("迷思與轉折分析：", {
    x: 9.3, y: 1.8, w: 3.0, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: "DC2626"
});
s5.addText("• 大意迷思：以為逼對方交出寶物就等於取得真寶！\n\n• 火勢反效果：一搧火熊熊、再搧騰百倍、三搧火高千丈！\n\n• 醒悟：悟空感嘆「是我大意了！」，轉而採取喬裝智取策略。", {
    x: 9.3, y: 2.4, w: 3.0, h: 3.8,
    fontFace: FONT_BODY, fontSize: 14, color: COLORS.fgLight, lineSpacing: 22
});

s5.notes = "【講者備註】\n片長：18 秒。\n教學提問：為什麼悟空拿到扇子後火反而越燒越大？這個轉折對故事推進有何作用？\n預期答案：因為鐵扇公主給的是假扇子；這個轉折逼使悟空反省自己的大意，決定改變策略改用喬裝智取。";


// 6. 三借與智取變身 (內容淺色頁)
let s6 = pptx.addSlide();
s6.background = { color: COLORS.bgLight };

s6.addText("【三借芭蕉扇】喬裝牛魔王與忘記口訣的失誤", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 三步驟流程版型
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.8, w: 3.6, h: 4.8,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s6.addText("1. 搖身變牛王", {
    x: 1.0, y: 2.1, w: 3.2, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.brandAccent, align: "center"
});
s6.addText("悟空變身成牛魔王模樣回芭蕉洞，騙取鐵扇公主的信任，順利騙得真芭蕉扇並學會變長口訣。", {
    x: 1.0, y: 2.8, w: 3.2, h: 3.5,
    fontFace: FONT_BODY, fontSize: 15, color: COLORS.fgLight, lineSpacing: 22
});

s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 4.8, y: 1.8, w: 3.7, h: 4.8,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s6.addText("2. 變長一丈二", {
    x: 5.0, y: 2.1, w: 3.3, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.brandAccent, align: "center"
});
s6.addText("出了洞門念動口訣，扇子果然長成一丈二尺長短，比起之前大不相同，悟空心中甚是得意。", {
    x: 5.0, y: 2.8, w: 3.3, h: 3.5,
    fontFace: FONT_BODY, fontSize: 15, color: COLORS.fgLight, lineSpacing: 22
});

s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 8.8, y: 1.8, w: 3.7, h: 4.8,
    fill: { color: "FFF7ED" }, line: { color: "FDBA74", width: 2 }
});
s6.addText("3. 致命的遺漏！", {
    x: 9.0, y: 2.1, w: 3.3, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: "DC2626", align: "center"
});
s6.addText("「學了變長的方法，卻忘記問還原的口訣！」\n只得把龐大的芭蕉扇扛在肩上走回去，給了牛魔王有機可乘的機會！", {
    x: 9.0, y: 2.8, w: 3.3, h: 3.5,
    fontFace: FONT_BODY, fontSize: 15, color: COLORS.fgLight, lineSpacing: 22
});


// 7. 🎬 動畫演示頁三：以其人之道還治其人之身（牛魔王化身八戒騙回寶扇） (內容淺色頁)
let s7 = pptx.addSlide();
s7.background = { color: COLORS.bgLight };

s7.addText("🎬 概念解析三：以其人之道還治其人之身", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 動畫播放視窗
s7.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.5, w: 8.0, h: 4.5,
    fill: { color: "0F172A" }, line: { color: COLORS.amberAccent, width: 3 }
});
s7.addText("🎬 【動態解說動畫視窗】\n《牛魔王七十二變化身八戒 ➔ 騙取扛扇悟空的防備》\n\n(高智商智鬥與立場互換動畫動態展示)", {
    x: 1.0, y: 2.5, w: 7.6, h: 2.5,
    fontFace: FONT_TITLE, fontSize: 20, bold: true, color: "FEF3C7", align: "center"
});
s7.addText("▶ 點擊播放 20 秒動態展示", {
    x: 0.8, y: 6.1, w: 8.0, h: 0.4,
    fontFace: FONT_BODY, fontSize: 13, bold: true, color: COLORS.amberAccent, align: "center"
});

// 右側解析
s7.addShape(pptx.shapes.RECTANGLE, {
    x: 9.1, y: 1.5, w: 3.4, h: 5.0,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s7.addText("情節對比與教訓：", {
    x: 9.3, y: 1.8, w: 3.0, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.brandAccent
});
s7.addText("• 對手智商：牛魔王同樣精通七十二變！\n\n• 弱點攻擊：利用悟空得勝後放鬆戒備、扛著重扇行動不便的心理。\n\n• 閱讀深思：過度得意往往是失敗的開始。", {
    x: 9.3, y: 2.4, w: 3.0, h: 3.8,
    fontFace: FONT_BODY, fontSize: 14, color: COLORS.fgLight, lineSpacing: 22
});

s7.notes = "【講者備註】\n片長：20 秒。\n教學提問：為什麼悟空會輕易把辛苦騙到的芭蕉扇交給「八戒」？這揭示了悟空性格中的什麼弱點？\n預期答案：因為悟空剛成功騙到扇子正沾沾自喜，且以為對方是前來幫忙的師弟八戒，缺乏戒心。";


// 8. 主角性格特質歸納 (內容淺色頁)
let s8 = pptx.addSlide();
s8.background = { color: COLORS.bgLight };

s8.addText("【人物分析】歸納孫悟空的性格特質與證據", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 特質表格/卡片版型
const traits = [
    { title: "1. 勇往直前・盡忠職守", desc: "雖然明知當年收伏紅孩兒結下仇怨，但「師命難違」，依然硬著頭皮前往芭蕉洞。" },
    { title: "2. 機智靈變・不屈不撓", desc: "被吹走後向靈吉菩薩求取定風丹；面對強敵能化身小蟲鑽腹、喬裝牛魔王智取。" },
    { title: "3. 粗心大意・容易得意", desc: "拿到假扇子未經測試；騙得真寶後得意忘形忘問還原口訣，導致被牛魔王化身八戒騙回。" }
];

traits.forEach((t, idx) => {
    s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.8 + idx * 3.9, y: 1.8, w: 3.7, h: 4.8,
        fill: { color: COLORS.cardBg }, line: { color: COLORS.brandAccent, width: 1.5 }
    });
    s8.addText(t.title, {
        x: 1.0 + idx * 3.9, y: 2.1, w: 3.3, h: 0.5,
        fontFace: FONT_TITLE, fontSize: 17, bold: true, color: COLORS.brandAccent
    });
    s8.addText(t.desc, {
        x: 1.0 + idx * 3.9, y: 2.8, w: 3.3, h: 3.5,
        fontFace: FONT_BODY, fontSize: 15, color: COLORS.fgLight, lineSpacing: 24
    });
});


// 9. 閱讀高過招與隨堂檢測 (內容淺色頁)
let s9 = pptx.addSlide();
s9.background = { color: COLORS.bgLight };

s9.addText("【閱讀高過招】隨堂思考與隨堂檢測", {
    x: 0.8, y: 0.6, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.brandAccent
});

// 問題卡 1
s9.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.6, w: 11.7, h: 2.4,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s9.addText("Q1. 孫悟空三次前往芭蕉洞借扇，為什麼前兩次都沒有拿到真正的扇子？", {
    x: 1.1, y: 1.9, w: 11.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.fgLight
});
s9.addText("關鍵解析：第一次因實力不敵芭蕉扇威力被吹走；第二次雖靠變身逼公主交扇，但因「大意未驗真偽」拿到假扇導致火勢反變千丈高！", {
    x: 1.1, y: 2.4, w: 11.1, h: 1.4,
    fontFace: FONT_BODY, fontSize: 15, color: "059669", lineSpacing: 22
});

// 問題卡 2
s9.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 4.3, w: 11.7, h: 2.4,
    fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder, width: 1 }
});
s9.addText("Q2. 本文作者主要想透過「三借芭蕉扇」的過程傳達什麼道理？", {
    x: 1.1, y: 4.6, w: 11.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.fgLight
});
s9.addText("核心結論：遇到困難時，不能只憑蠻力硬碰硬，而要「認清情勢、知所應變」，並在成功時時刻保持警惕與細心！", {
    x: 1.1, y: 5.1, w: 11.1, h: 1.4,
    fontFace: FONT_BODY, fontSize: 15, color: COLORS.brandAccent, lineSpacing: 22
});


// 10. 帶走一句話 (深色行動頁)
let s10 = pptx.addSlide();
s10.background = { color: COLORS.bgDark };

s10.addText("SOIL 核心理念・帶走一句話", {
    x: 0.8, y: 1.0, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 20, bold: true, color: COLORS.amberAccent, align: "center"
});

s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 2.0, w: 10.3, h: 3.5,
    fill: { color: "1E293B" }, line: { color: COLORS.brandAccent, width: 3 }
});

s10.addText("「遇到困難，要認清情勢，知所應變；\n勝不驕、敗不餒，細心才是成功的關鍵！」", {
    x: 1.8, y: 2.5, w: 9.7, h: 2.5,
    fontFace: FONT_TITLE, fontSize: 32, bold: true, color: COLORS.fgDark, align: "center", lineSpacing: 44
});


// 11. 結語與延伸思考 (深色結語頁)
let s11 = pptx.addSlide();
s11.background = { color: COLORS.bgDark };

s11.addText("課後延伸思考與經典閱讀推薦", {
    x: 0.8, y: 0.8, w: 11.7, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 26, bold: true, color: COLORS.fgDark
});

s11.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8, y: 1.8, w: 5.6, h: 4.8,
    fill: { color: "1E293B" }, line: { color: "334155", width: 1 }
});
s11.addText("💭 延伸思考問題", {
    x: 1.1, y: 2.1, w: 5.0, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.amberAccent
});
s11.addText("1. 芭蕉扇再次被牛魔王騙回去後，猜猜看依悟空不服輸的個性，他下一步會怎麼做？\n\n2. 站在鐵扇公主與牛魔王立場，不願借扇給悟空的心情可以理解嗎？如果你是悟空會怎麼做？", {
    x: 1.1, y: 2.7, w: 5.0, h: 3.6,
    fontFace: FONT_BODY, fontSize: 15, color: "CBD5E1", lineSpacing: 24
});

s11.addShape(pptx.shapes.RECTANGLE, {
    x: 6.8, y: 1.8, w: 5.7, h: 4.8,
    fill: { color: "1E293B" }, line: { color: "334155", width: 1 }
});
s11.addText("📚 延伸閱讀推薦", {
    x: 7.1, y: 2.1, w: 5.1, h: 0.4,
    fontFace: FONT_TITLE, fontSize: 18, bold: true, color: COLORS.amberAccent
});
s11.addText("1. 《西遊記：燃燒吧！五行戰士》\n   作者：許榮哲、白千翌 ｜ 四也出版\n\n2. 《奇想西遊記》\n   作者：王文華 ｜ 天下雜誌出版", {
    x: 7.1, y: 2.7, w: 5.1, h: 3.6,
    fontFace: FONT_BODY, fontSize: 15, color: "CBD5E1", lineSpacing: 24
});


// 輸出簡報檔案
const outputPath = path.join(__dirname, "孫悟空三借芭蕉扇_SOIL教學簡報.pptx");
pptx.writeFile({ fileName: outputPath }).then(() => {
    console.log("SOIL 教學簡報已成功產生：" + outputPath);
}).catch(err => {
    console.error("產生簡報時發生錯誤：", err);
});
