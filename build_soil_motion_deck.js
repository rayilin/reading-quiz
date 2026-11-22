const path = require("path");
const pptxgen = require("pptxgenjs");
const { makeDeck } = require("./deck_helpers");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";

const COLORS = {
    bgDark: "111827", fgDark: "F9FAFB",
    bgLight: "F8FAFC", fgLight: "1E293B",
    brandAccent: "EA580C", amberAccent: "D97706"
};

const D = makeDeck(pptx, { 
    theme: { bg: "121212", fg: "F2F0EA", accent: "FF7A1A" }, 
    mediaDir: path.join(__dirname, "教學網頁", "media") 
});

// 頁面定義
const slides = [
    { type: "title", title: "孫悟空三借芭蕉扇", subtitle: "SOIL 動畫教學簡報" },
    { type: "content", title: "芭蕉扇機制", video: "p03.mp4", note: "展示芭蕉扇搧風滅火的強大威力。" },
    { type: "content", title: "假扇子危機", video: "p05.mp4", note: "悟空因大意拿到假扇，火勢反而變大。" },
    { type: "content", title: "智鬥騙扇", video: "p07.mp4", note: "牛魔王變身騙回寶扇，悟空的失誤與性格弱點。" }
];

slides.forEach((s, idx) => {
    let slide;
    if (s.type === "title") {
        slide = pptx.addSlide();
        slide.background = { color: COLORS.bgDark };
        slide.addText(s.title, { x: 0.8, y: 1.8, w: 11.7, h: 1.5, fontFace: "微軟正黑體", fontSize: 44, bold: true, color: COLORS.fgDark });
        slide.addText(s.subtitle, { x: 0.8, y: 3.5, w: 11.7, h: 0.8, fontFace: "微軟正黑體", fontSize: 22, color: "94A3B8" });
    } else {
        slide = pptx.addSlide();
        slide.background = { color: COLORS.bgLight };
        slide.addText(s.title, { x: 0.5, y: 0.2, w: 10, h: 0.5, fontSize: 24, bold: true, color: COLORS.brandAccent });
        
        // 嵌入動畫影片
        slide.addMedia({
            type: "video",
            path: path.join(__dirname, "教學網頁", "media", s.video),
            x: 1.0, y: 1.5, w: 8.0, h: 4.5
        });
        
        slide.notes = s.note;
    }
});

pptx.writeFile({ fileName: "孫悟空三借芭蕉扇_SOIL動畫版.pptx" });
console.log("動畫簡報已生成：孫悟空三借芭蕉扇_SOIL動畫版.pptx");
