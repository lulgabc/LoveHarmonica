import fs from "node:fs";
import path from "node:path";

const T = (hole, dir, bend = 0, beats = 1) => ({ hole, dir, bend, beats });
const R = (beats = 1) => ({ hole: 0, dir: "blow", bend: 0, beats, rest: true });

const scores = [];
let counter = 0;

const beatsPerBarFor = (meter) => (meter === "3/4" ? 3 : 4);

function padTokens(tokens, beatsPerBar) {
  const total = tokens.reduce((sum, token) => sum + token.beats, 0);
  const bars = Math.max(1, Math.ceil(total / beatsPerBar));
  const target = bars * beatsPerBar;
  const out = [...tokens];
  let remaining = target - total;
  while (remaining > 0) {
    const beats = Math.min(remaining, 4);
    out.push(R(beats));
    remaining -= beats;
  }
  return out;
}

function makeScore({
  title,
  category,
  level,
  key,
  harp,
  position,
  meter = "4/4",
  tempo,
  techniques,
  description,
  tips,
  tokens,
  source = "original",
  featured = false,
}) {
  counter += 1;
  const id = `s${String(counter).padStart(3, "0")}`;
  const beatsPerBar = beatsPerBarFor(meter);
  const normalized = tokens.map((token) =>
    token.rest
      ? token
      : { ...token, hole: Math.abs(token.hole), dir: token.hole < 0 ? "draw" : token.dir },
  );
  const padded = padTokens(normalized, beatsPerBar);
  const bars = Math.round(padded.reduce((sum, token) => sum + token.beats, 0) / beatsPerBar);
  return {
    id,
    slug: id,
    title,
    category,
    level,
    key,
    harp,
    position,
    meter,
    bars,
    tempo,
    techniques,
    description,
    tips,
    source,
    featured,
    tokens: padded,
  };
}

function variantTokens(notes, variant) {
  if (variant === "straight") {
    return notes.map((note) => ({ ...note, beats: 1 }));
  }
  if (variant === "long-short") {
    return notes.map((note, index) => ({ ...note, beats: index % 2 === 0 ? 1.5 : 0.5 }));
  }
  const out = [];
  notes.forEach((note, index) => {
    out.push({ ...note, beats: 1 });
    if (index < notes.length - 1) out.push(R(1));
  });
  return out;
}

/* ---------------- 01 · Foundations ---------------- */

const foundationBases = [
  {
    title: "长音呼吸",
    notes: [T(4, "blow"), T(5, "blow"), T(6, "blow"), T(6, "draw"), T(5, "blow"), T(4, "blow"), T(5, "blow"), T(4, "blow")],
    key: "C",
    position: "1st",
    tip: "每个音都吹满 4 拍，先不要换气；听音尾是否稳定。",
  },
  {
    title: "单音巡航",
    notes: [T(4, "blow"), T(5, "blow"), T(6, "blow"), T(5, "blow"), T(4, "blow"), T(5, "blow"), T(6, "blow"), T(5, "blow")],
    key: "C",
    position: "1st",
    tip: "换孔时只移动琴，不要移动头；保持口型不变。",
  },
  {
    title: "低音区散步",
    notes: [T(1, "blow"), T(1, "draw"), T(2, "blow"), T(2, "draw"), T(3, "blow"), T(3, "draw"), T(2, "draw"), T(1, "draw")],
    key: "C",
    position: "1st",
    tip: "低音区容易不自觉压音；保持口腔放松，让音色明亮。",
  },
  {
    title: "中音区散步",
    notes: [T(4, "blow"), T(4, "draw"), T(5, "blow"), T(5, "draw"), T(6, "blow"), T(6, "draw"), T(5, "draw"), T(4, "draw")],
    key: "C",
    position: "1st",
    tip: "把每个音吹成同样大小；不要因为换孔而改变音量。",
  },
  {
    title: "高音区散步",
    notes: [T(7, "blow"), T(7, "draw"), T(8, "blow"), T(8, "draw"), T(9, "blow"), T(9, "draw"), T(8, "draw"), T(7, "draw")],
    key: "C",
    position: "1st",
    tip: "高音区用更细、更集中的气流；不要用喉咙挤。",
  },
  {
    title: "压音前的准备",
    notes: [T(2, "draw"), T(3, "draw"), T(4, "blow"), T(4, "draw"), T(5, "draw"), T(6, "blow"), T(5, "draw"), T(4, "draw")],
    key: "G",
    position: "2nd",
    tip: "先吹准每个原音，再尝试压音；不要把“压音”当成默认动作。",
  },
  {
    title: "换孔练习",
    notes: [T(4, "blow"), T(6, "blow"), T(5, "blow"), T(7, "blow"), T(6, "blow"), T(8, "blow"), T(7, "blow"), T(6, "blow")],
    key: "C",
    position: "1st",
    tip: "跨孔时用手腕带动琴，保持气息连续；先慢后快。",
  },
  {
    title: "音头与吐音",
    notes: [T(4, "blow"), T(4, "blow"), T(5, "blow"), T(5, "blow"), T(6, "blow"), T(6, "blow"), T(5, "blow"), T(4, "blow")],
    key: "C",
    position: "1st",
    tip: "每个音都用轻轻的“tu”开始；不要用喉咙截断气流。",
  },
  {
    title: "渐强渐弱",
    notes: [T(4, "blow"), T(5, "blow"), T(6, "blow"), T(6, "draw"), T(6, "blow"), T(5, "blow"), T(4, "blow"), T(4, "draw")],
    key: "C",
    position: "1st",
    tip: "每个音前半拍渐强、后半拍渐弱；保持音高不变。",
  },
  {
    title: "乐句呼吸",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw"), T(-5, "draw"), T(4, "blow"), T(-3, "draw", 1), T(-2, "draw")],
    key: "G",
    position: "2nd",
    tip: "把 8 个音分成两句；句尾留半拍，像说话一样换气。",
  },
];

const foundationVariants = [
  { key: "straight", label: "基本型", tempo: 0, desc: "每个音时值均匀，先求稳定。" },
  { key: "long-short", label: "长短型", tempo: 4, desc: "长—短交替，练习气息分配与音头。" },
  { key: "rests", label: "留白型", tempo: -4, desc: "每个音后留一拍，练习句尾和呼吸。" },
];

foundationBases.forEach((base, index) => {
  foundationVariants.forEach((variant, variantIndex) => {
    const level = index < 4 ? "入门" : "进阶";
    scores.push(
      makeScore({
        title: `${base.title} · ${variant.label}`,
        category: "基础训练",
        level,
        key: base.key,
        harp: "C",
        position: base.position,
        tempo: Math.max(52, 64 + index * 2 + variant.tempo),
        techniques: variant.key === "rests" ? ["长音", "呼吸", "留白"] : ["长音", "呼吸", "单音"],
        description: `一条 2–4 小节的单音与呼吸练习。${variant.desc} 适合每天热身，也适合在练压音前校准口型。`,
        tips: `${base.tip} 先跟 60 BPM 的节拍器吹 3 遍，再录音听音尾。`,
        tokens: variantTokens(base.notes, variant.key),
        featured: index === 0 && variantIndex === 0,
      }),
    );
  });
});

/* ---------------- 02 · Scales & arpeggios ---------------- */

const scaleBases = [
  {
    title: "C 大调上行",
    notes: [T(4, "blow"), T(4, "draw"), T(5, "blow"), T(5, "draw"), T(6, "blow"), T(6, "draw"), T(7, "draw"), T(7, "blow")],
    key: "C",
    position: "1st",
    tip: "注意 7 孔：-7 是 B，7 是 C；不要把两个音吹混。",
  },
  {
    title: "C 大调下行",
    notes: [T(7, "blow"), T(7, "draw"), T(6, "draw"), T(6, "blow"), T(5, "draw"), T(5, "blow"), T(4, "draw"), T(4, "blow")],
    key: "C",
    position: "1st",
    tip: "下行时容易越吹越快；用节拍器把每个音压住。",
  },
  {
    title: "C 大调上下行",
    notes: [T(4, "blow"), T(4, "draw"), T(5, "blow"), T(5, "draw"), T(6, "blow"), T(6, "draw"), T(7, "draw"), T(7, "blow")],
    key: "C",
    position: "1st",
    tip: "先上行、再下行；把最高音当成句子的“屋顶”。",
  },
  {
    title: "G Mixolydian 上行",
    notes: [T(-2, "draw"), T(-3, "draw", 2), T(-3, "draw"), T(4, "blow"), T(-4, "draw"), T(5, "blow"), T(-5, "draw"), T(6, "blow")],
    key: "G",
    position: "2nd",
    tip: "-3'' 是 A，-3 是 B；先把全音压音吹准，再加速。",
  },
  {
    title: "G Mixolydian 下行",
    notes: [T(6, "blow"), T(-5, "draw"), T(5, "blow"), T(-4, "draw"), T(4, "blow"), T(-3, "draw"), T(-3, "draw", 2), T(-2, "draw")],
    key: "G",
    position: "2nd",
    tip: "下行时保持每个音的“落点”；不要在压音上滑过去。",
  },
  {
    title: "G 蓝调音阶",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-5, "draw")],
    key: "G",
    position: "2nd",
    tip: "b3、b5、b7 是蓝调的味道；先把这三个音吹稳。",
  },
  {
    title: "G7 琶音",
    notes: [T(-2, "draw"), T(-3, "draw"), T(-4, "draw"), T(-5, "draw"), T(-4, "draw"), T(-3, "draw"), T(-2, "draw"), T(-2, "draw")],
    key: "G",
    position: "2nd",
    tip: "G7 = G B D F；把 3 度（B）和 b7（F）当成目标音。",
  },
  {
    title: "C7 琶音",
    notes: [T(4, "blow"), T(5, "blow"), T(6, "blow"), T(-3, "draw", 1), T(6, "blow"), T(5, "blow"), T(4, "blow"), T(4, "blow")],
    key: "G",
    position: "2nd",
    tip: "C7 = C E G Bb；-3' 是 Bb，注意它和 B 的区别。",
  },
  {
    title: "Dm7 琶音",
    notes: [T(-4, "draw"), T(-5, "draw"), T(-6, "draw"), T(7, "blow"), T(-6, "draw"), T(-5, "draw"), T(-4, "draw"), T(-4, "draw")],
    key: "D",
    position: "3rd",
    tip: "Dm7 = D F A C；第三把位的“家”在 -4。",
  },
  {
    title: "蓝调五声模进",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-5, "draw")],
    key: "G",
    position: "2nd",
    tip: "把五声音阶拆成 2–3 个音的动机，再模进；不要一口气爬完。",
  },
];

scaleBases.forEach((base, index) => {
  foundationVariants.forEach((variant, variantIndex) => {
    const level = index < 3 ? "入门" : "进阶";
    scores.push(
      makeScore({
        title: `${base.title} · ${variant.label}`,
        category: "音阶与琶音",
        level,
        key: base.key,
        harp: "C",
        position: base.position,
        tempo: 70 + index * 2 + variant.tempo,
        techniques: ["音阶", "换孔", variant.key === "rests" ? "留白" : "节奏"],
        description: `把音阶/琶音当成“地图”，而不是机械爬格子。这条练习用${variant.label}节奏，让你在换孔时仍然保持拍子。`,
        tips: `${base.tip} 先慢速 3 遍，再把最后一个音延长 2 拍，听它和伴奏的关系。`,
        tokens: variantTokens(base.notes, variant.key),
        featured: index === 0 && variantIndex === 0,
      }),
    );
  });
});

/* ---------------- 03 · Bending ---------------- */

const bendBases = [
  {
    title: "2 孔压音 · 半音",
    notes: [T(2, "draw"), T(2, "draw", 1), T(2, "draw"), T(2, "draw", 1), T(2, "draw"), T(2, "draw", 1), T(2, "draw"), T(2, "draw", 1)],
    key: "G",
    position: "2nd",
    level: "入门",
    tip: "G → F#；先吹准 G，再把舌头抬高一点点，不要用力吸。",
  },
  {
    title: "2 孔压音 · 全音",
    notes: [T(2, "draw"), T(2, "draw", 2), T(2, "draw"), T(2, "draw", 2), T(2, "draw", 1), T(2, "draw", 2), T(2, "draw"), T(2, "draw", 2)],
    key: "G",
    position: "2nd",
    level: "入门",
    tip: "G → F；全音压音需要更窄的口腔，先接受音色变暗。",
  },
  {
    title: "3 孔压音 · 半音",
    notes: [T(3, "draw"), T(3, "draw", 1), T(3, "draw"), T(3, "draw", 1), T(3, "draw"), T(3, "draw", 1), T(3, "draw"), T(3, "draw", 1)],
    key: "G",
    position: "2nd",
    level: "入门",
    tip: "B → Bb；这是第二把位的 b3，也是蓝调最核心的“哭腔”。",
  },
  {
    title: "3 孔压音 · 全音",
    notes: [T(3, "draw"), T(3, "draw", 2), T(3, "draw"), T(3, "draw", 2), T(3, "draw", 1), T(3, "draw", 2), T(3, "draw"), T(3, "draw", 2)],
    key: "G",
    position: "2nd",
    level: "进阶",
    tip: "B → A；先稳定半音，再尝试全音；不要用喉咙硬挤。",
  },
  {
    title: "4 孔压音 · b5",
    notes: [T(4, "draw"), T(4, "draw", 1), T(4, "draw"), T(4, "draw", 1), T(4, "draw"), T(4, "draw", 1), T(4, "draw"), T(4, "draw", 1)],
    key: "G",
    position: "2nd",
    level: "进阶",
    tip: "D → Db；b5 是蓝调里最有张力的音，适合放在句尾。",
  },
  {
    title: "5 孔压音 · 半音",
    notes: [T(5, "draw"), T(5, "draw", 1), T(5, "draw"), T(5, "draw", 1), T(5, "draw"), T(5, "draw", 1), T(5, "draw"), T(5, "draw", 1)],
    key: "G",
    position: "2nd",
    level: "进阶",
    tip: "F → E；这个音在 C7 和弦上特别有用。",
  },
  {
    title: "6 孔压音 · 半音",
    notes: [T(6, "draw"), T(6, "draw", 1), T(6, "draw"), T(6, "draw", 1), T(6, "draw"), T(6, "draw", 1), T(6, "draw"), T(6, "draw", 1)],
    key: "G",
    position: "2nd",
    level: "进阶",
    tip: "A → Ab；高音区压音要更集中、更轻。",
  },
  {
    title: "7 孔吹气压音",
    notes: [T(7, "blow"), T(7, "blow", 1), T(7, "blow"), T(7, "blow", 1), T(7, "blow"), T(7, "blow", 1), T(7, "blow"), T(7, "blow", 1)],
    key: "C",
    position: "1st",
    level: "进阶",
    tip: "C → B；吹气压音要收细气流，不要吹得更猛。",
  },
  {
    title: "10 孔吹气压音",
    notes: [T(10, "blow"), T(10, "blow", 1), T(10, "blow", 2), T(10, "blow", 1), T(10, "blow"), T(10, "blow", 2), T(10, "blow", 1), T(10, "blow")],
    key: "C",
    position: "1st",
    level: "高级",
    tip: "C → B → Bb；10 孔可以压两个半音，先练半音。",
  },
  {
    title: "压音乐句",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-5, "draw")],
    key: "G",
    position: "2nd",
    level: "高级",
    tip: "把压音放进句子里，而不是孤立地“压下去”；注意落点和留白。",
  },
];

bendBases.forEach((base, index) => {
  foundationVariants.forEach((variant, variantIndex) => {
    scores.push(
      makeScore({
        title: `${base.title} · ${variant.label}`,
        category: "压音专项",
        level: base.level,
        key: base.key,
        harp: "C",
        position: base.position,
        tempo: 54 + index * 2 + variant.tempo,
        techniques: ["压音", base.title.includes("3 孔") ? "3孔" : "音准", "气息"],
        description: `压音不是“用力吸”，而是改变口腔共鸣。这条练习只围绕一个孔/一个目标音，帮你把音高、音色和稳定性拆开。`,
        tips: `${base.tip} 用调音器确认目标音，停住 4 拍；如果喉咙累，立刻休息。`,
        tokens: variantTokens(base.notes, variant.key),
        featured: index === 2 && variantIndex === 0,
      }),
    );
  });
});

/* ---------------- 04 · Rhythm & tongue ---------------- */

const rhythmBases = [
  {
    title: "Shuffle 基本型",
    notes: [T(-2, "draw"), T(-2, "draw"), T(4, "blow"), T(-4, "draw"), T(-2, "draw"), T(-2, "draw"), T(4, "blow"), T(-4, "draw")],
    tip: "1 & 3 拍低音、2 & 4 拍和弦感；先把脚踩稳。",
  },
  {
    title: "Shuffle 问答",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-2, "draw"), T(4, "blow"), T(-4, "draw"), T(4, "blow"), T(-3, "draw", 1)],
    tip: "前 4 个音问，后 4 个音答；答句要更短、更轻。",
  },
  {
    title: "Chug 1 & 3",
    notes: [T(-2, "draw"), T(-2, "draw"), T(-2, "draw"), T(-2, "draw"), T(4, "blow"), T(4, "blow"), T(4, "blow"), T(4, "blow")],
    tip: "低音在 1、3 拍，和弦感在 2、4 拍；音头要短。",
  },
  {
    title: "Chug 2 & 4",
    notes: [T(-2, "draw"), T(4, "blow"), T(-2, "draw"), T(4, "blow"), T(-2, "draw"), T(4, "blow"), T(-2, "draw"), T(4, "blow")],
    tip: "把重音放在 2、4 拍；感受“后面推着走”。",
  },
  {
    title: "Train 八分",
    notes: [T(-2, "draw"), T(-2, "draw"), T(3, "blow"), T(3, "blow"), T(-2, "draw"), T(-2, "draw"), T(3, "blow"), T(3, "blow")],
    tip: "像火车轮子一样均匀；用舌头轻轻说“ta”。",
  },
  {
    title: "Train 切分",
    notes: [T(-2, "draw"), T(4, "blow"), T(-2, "draw"), T(-2, "draw"), T(4, "blow"), T(-4, "draw"), T(4, "blow"), T(-2, "draw")],
    tip: "切分不是抢拍；把弱拍吹得轻一点，但不要拖。",
  },
  {
    title: "三连音感觉",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw"), T(-5, "draw")],
    tip: "三连音要均匀；先数“1-2-3”再吹。",
  },
  {
    title: "吐音与断句",
    notes: [T(4, "blow"), T(4, "blow"), T(5, "blow"), T(5, "blow"), T(6, "blow"), T(6, "blow"), T(5, "blow"), T(4, "blow")],
    tip: "每个音都用“tu”开始；不要用喉咙把音切断。",
  },
  {
    title: "弱起与留白",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw"), T(-5, "draw"), T(4, "blow"), T(-3, "draw", 1), T(-2, "draw")],
    tip: "句尾留白；不要为了填满拍子而多吹。",
  },
  {
    title: "12/8 律动",
    notes: [T(-2, "draw"), T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-2, "draw"), T(-2, "draw"), T(-3, "draw", 1), T(4, "blow")],
    tip: "12/8 是“三个一组”的律动；先用手打三连音。",
  },
];

rhythmBases.forEach((base, index) => {
  foundationVariants.forEach((variant, variantIndex) => {
    const level = index < 5 ? "入门" : "进阶";
    scores.push(
      makeScore({
        title: `${base.title} · ${variant.label}`,
        category: "节奏与舌堵",
        level,
        key: "G",
        harp: "C",
        position: "2nd",
        tempo: 72 + index * 3 + variant.tempo,
        techniques: ["节奏", "Shuffle", variant.key === "rests" ? "留白" : "Chug"],
        description: `蓝调口琴首先是节奏乐器。这条练习把${base.title}拆成可跟节拍器的短型；先数出声，再吹。`,
        tips: `${base.tip} 先跟 70 BPM 吹 4 遍，再录下来听“有没有断拍”。`,
        tokens: variantTokens(base.notes, variant.key),
        featured: index === 0 && variantIndex === 0,
      }),
    );
  });
});

/* ---------------- 05 · Blues licks ---------------- */

const bluesBases = [
  {
    title: "G 蓝调 · 问答",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw"), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-5, "draw")],
    position: "2nd",
    key: "G",
    level: "入门",
    tip: "前 4 个音问、后 4 个音答；答句落在 -5 或 -2。",
  },
  {
    title: "G 蓝调 · 下行",
    notes: [T(6, "blow"), T(-5, "draw"), T(-4, "draw"), T(-4, "draw", 1), T(4, "blow"), T(-3, "draw", 1), T(-2, "draw"), T(-2, "draw")],
    position: "2nd",
    key: "G",
    level: "入门",
    tip: "下行时保持音头清楚；不要越吹越快。",
  },
  {
    title: "G 蓝调 · 上行",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(6, "blow")],
    position: "2nd",
    key: "G",
    level: "入门",
    tip: "把 b3、b5、b7 当成三个路标；不要只是爬音阶。",
  },
  {
    title: "G 蓝调 · 转折",
    notes: [T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-5, "draw"), T(-4, "draw"), T(-3, "draw", 1)],
    position: "2nd",
    key: "G",
    level: "进阶",
    tip: "在第 5–6 小节（C7）用这条；落点放在 E 或 Bb。",
  },
  {
    title: "G 蓝调 · Turnaround",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw"), T(-4, "draw", 1), T(-3, "draw", 1), T(-2, "draw"), T(-2, "draw")],
    position: "2nd",
    key: "G",
    level: "进阶",
    tip: "放在第 11–12 小节；最后一个 -2 要站稳。",
  },
  {
    title: "G 蓝调 · Slow",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(-4, "draw"), T(-3, "draw", 1)],
    position: "2nd",
    key: "G",
    level: "进阶",
    tip: "慢速时每个音都要有音头；不要用滑音把句子糊在一起。",
  },
  {
    title: "G 蓝调 · Call & Response",
    notes: [T(-2, "draw"), T(-2, "draw"), T(-3, "draw", 1), T(-2, "draw"), T(4, "blow"), T(-4, "draw"), T(-3, "draw", 1), T(-2, "draw")],
    position: "2nd",
    key: "G",
    level: "进阶",
    tip: "问句重复两次，答句只出现一次；让听众记住动机。",
  },
  {
    title: "D 小调 · 第三把位",
    notes: [T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-6, "draw"), T(7, "blow"), T(-6, "draw"), T(-5, "draw"), T(-4, "draw")],
    position: "3rd",
    key: "D",
    level: "高级",
    tip: "第三把位的 home 在 -4；不要用第二把位的习惯去吹。",
  },
  {
    title: "G 蓝调 · 高音",
    notes: [T(6, "blow"), T(-6, "draw"), T(7, "blow"), T(-7, "draw"), T(8, "blow"), T(-7, "draw"), T(7, "blow"), T(-6, "draw")],
    position: "2nd",
    key: "G",
    level: "高级",
    tip: "高音区要更细的气流；不要把音量吹爆。",
  },
  {
    title: "G 蓝调 · 混合",
    notes: [T(-2, "draw"), T(-3, "draw", 1), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-6, "draw"), T(7, "blow")],
    position: "2nd",
    key: "G",
    level: "高级",
    tip: "把低音、压音和高音串成一句话；注意句子方向。",
  },
];

bluesBases.forEach((base, index) => {
  foundationVariants.forEach((variant, variantIndex) => {
    scores.push(
      makeScore({
        title: `${base.title} · ${variant.label}`,
        category: "蓝调乐句",
        level: base.level,
        key: base.key,
        harp: "C",
        position: base.position,
        tempo: 62 + index * 3 + variant.tempo,
        techniques: ["蓝调", "乐句", base.position === "3rd" ? "第三把位" : "第二把位"],
        description: `一条可以放进 12 小节的短句。先用${variant.label}节奏吹熟，再把它放到伴奏里，最后改掉其中一个音，让它变成你的。`,
        tips: `${base.tip} 先唱一遍，再吹；录音时只录这一句，反复听落点。`,
        tokens: variantTokens(base.notes, variant.key),
        featured: index === 0 && variantIndex === 0,
      }),
    );
  });
});

/* ---------------- 06 · 12-bar etudes ---------------- */

const slowI = [
  [T(-2, "draw", 0, 2), T(-3, "draw", 1, 1), T(4, "blow", 0, 1)],
  [T(4, "blow", 0, 2), T(-4, "draw", 1, 1), T(-4, "draw", 0, 1)],
  [T(-2, "draw", 0, 1), T(-3, "draw", 1, 1), T(4, "blow", 0, 1), T(-4, "draw", 0, 1)],
  [T(-2, "draw", 0, 2), T(-3, "draw", 2, 1), T(-3, "draw", 1, 1)],
  [T(-4, "draw", 0, 2), T(-5, "draw", 0, 1), T(-4, "draw", 0, 1)],
];
const slowIV = [
  [T(4, "blow", 0, 2), T(5, "blow", 0, 1), T(6, "blow", 0, 1)],
  [T(6, "blow", 0, 2), T(-5, "draw", 0, 1), T(-4, "draw", 0, 1)],
  [T(4, "blow", 0, 1), T(5, "blow", 0, 1), T(6, "blow", 0, 1), T(-3, "draw", 1, 1)],
  [T(5, "blow", 0, 2), T(-5, "draw", 0, 1), T(4, "blow", 0, 1)],
];
const slowV = [
  [T(-4, "draw", 0, 2), T(-6, "draw", 0, 1), T(7, "blow", 0, 1)],
  [T(-4, "draw", 0, 1), T(-6, "draw", 0, 1), T(7, "blow", 0, 1), T(-4, "draw", 0, 1)],
  [T(-6, "draw", 0, 2), T(-4, "draw", 0, 1), T(-3, "draw", 1, 1)],
];
const slowTurn = [
  [T(-2, "draw", 0, 1), T(-3, "draw", 1, 1), T(4, "blow", 0, 1), T(-4, "draw", 0, 1)],
  [T(-2, "draw", 0, 1), T(-3, "draw", 1, 1), T(4, "blow", 0, 1), T(-4, "draw", 1, 1)],
  [T(-4, "draw", 0, 1), T(-3, "draw", 1, 1), T(-2, "draw", 0, 2)],
];

function build12Bar(banks, index) {
  const { i, iv, v, turn } = banks;
  const bars = [
    i[index % i.length],
    i[(index + 1) % i.length],
    i[(index + 2) % i.length],
    i[(index + 3) % i.length],
    iv[index % iv.length],
    iv[(index + 1) % iv.length],
    i[(index + 1) % i.length],
    i[(index + 2) % i.length],
    v[index % v.length],
    iv[(index + 2) % iv.length],
    turn[index % turn.length],
    turn[(index + 1) % turn.length],
  ];
  return bars.flat();
}

for (let i = 0; i < 10; i += 1) {
  scores.push(
    makeScore({
      title: `Slow Blues in G ${String(i + 1).padStart(2, "0")}`,
      category: "12 小节练习曲",
      level: "进阶",
      key: "G",
      harp: "C",
      position: "2nd",
      tempo: 50 + i * 2,
      techniques: ["12小节", "Slow Blues", "留白"],
      description: "完整的 12 小节慢蓝调练习曲。重点不是音多，而是长音、压音落点和句子之间的呼吸。",
      tips: "先每小节只吹一个目标音，再把句子加进去；第 11–12 小节单独练 turnaround。",
      tokens: build12Bar({ i: slowI, iv: slowIV, v: slowV, turn: slowTurn }, i),
      featured: i === 0,
    }),
  );
}

const shuffleI = [
  [T(-2, "draw", 0, 0.5), T(-2, "draw", 0, 0.5), T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5), T(-2, "draw", 0, 0.5), T(-2, "draw", 0, 0.5), T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5)],
  [T(-2, "draw", 0, 0.5), T(-3, "draw", 1, 0.5), T(4, "blow", 0, 0.5), T(-2, "draw", 0, 0.5), T(-2, "draw", 0, 0.5), T(-3, "draw", 1, 0.5), T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5)],
  [T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5), T(4, "blow", 0, 0.5), T(-2, "draw", 0, 0.5), T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5), T(4, "blow", 0, 0.5), T(-2, "draw", 0, 0.5)],
];
const shuffleIV = [
  [T(4, "blow", 0, 0.5), T(5, "blow", 0, 0.5), T(6, "blow", 0, 0.5), T(-3, "draw", 1, 0.5), T(4, "blow", 0, 0.5), T(5, "blow", 0, 0.5), T(6, "blow", 0, 0.5), T(-3, "draw", 1, 0.5)],
  [T(6, "blow", 0, 0.5), T(-5, "draw", 0, 0.5), T(6, "blow", 0, 0.5), T(4, "blow", 0, 0.5), T(6, "blow", 0, 0.5), T(-5, "draw", 0, 0.5), T(6, "blow", 0, 0.5), T(4, "blow", 0, 0.5)],
];
const shuffleV = [
  [T(-4, "draw", 0, 0.5), T(-6, "draw", 0, 0.5), T(7, "blow", 0, 0.5), T(-4, "draw", 0, 0.5), T(-4, "draw", 0, 0.5), T(-6, "draw", 0, 0.5), T(7, "blow", 0, 0.5), T(-4, "draw", 0, 0.5)],
];
const shuffleTurn = [
  [T(-2, "draw", 0, 0.5), T(-3, "draw", 1, 0.5), T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5), T(-2, "draw", 0, 0.5), T(-3, "draw", 1, 0.5), T(4, "blow", 0, 0.5), T(-4, "draw", 0, 0.5)],
  [T(-4, "draw", 0, 0.5), T(-5, "draw", 0, 0.5), T(-4, "draw", 0, 0.5), T(-3, "draw", 1, 0.5), T(-2, "draw", 0, 0.5), T(-3, "draw", 1, 0.5), T(4, "blow", 0, 0.5), T(-2, "draw", 0, 0.5)],
];

for (let i = 0; i < 10; i += 1) {
  scores.push(
    makeScore({
      title: `Shuffle Blues in G ${String(i + 1).padStart(2, "0")}`,
      category: "12 小节练习曲",
      level: "进阶",
      key: "G",
      harp: "C",
      position: "2nd",
      tempo: 88 + i * 3,
      techniques: ["12小节", "Shuffle", "Chug"],
      description: "完整的 12 小节 shuffle 练习曲。用八分音符把 12 小节填满，同时保留 2 & 4 的重音和句尾留白。",
      tips: "先只吹 1 & 3 拍的低音，再加 2 & 4 拍；最后把 solo 句子放进去。",
      tokens: build12Bar({ i: shuffleI, iv: shuffleIV, v: shuffleV, turn: shuffleTurn }, i),
      featured: i === 0,
    }),
  );
}

const minorI = [
  [T(-4, "draw", 0, 2), T(-5, "draw", 0, 1), T(6, "blow", 0, 1)],
  [T(-4, "draw", 0, 1), T(-5, "draw", 0, 1), T(6, "blow", 0, 1), T(-6, "draw", 0, 1)],
  [T(6, "blow", 0, 2), T(-6, "draw", 0, 1), T(7, "blow", 0, 1)],
  [T(-4, "draw", 0, 2), T(-6, "draw", 0, 1), T(7, "blow", 0, 1)],
];
const minorIV = [
  [T(6, "blow", 0, 2), T(7, "blow", 0, 1), T(-6, "draw", 0, 1)],
  [T(-5, "draw", 0, 2), T(6, "blow", 0, 1), T(-6, "draw", 0, 1)],
];
const minorV = [
  [T(-6, "draw", 0, 2), T(7, "blow", 0, 1), T(-4, "draw", 0, 1)],
  [T(-6, "draw", 0, 1), T(-5, "draw", 0, 1), T(-4, "draw", 0, 2)],
];
const minorTurn = [
  [T(-4, "draw", 0, 1), T(-5, "draw", 0, 1), T(6, "blow", 0, 1), T(-6, "draw", 0, 1)],
  [T(-4, "draw", 0, 1), T(-5, "draw", 0, 1), T(-4, "draw", 0, 2)],
];

for (let i = 0; i < 10; i += 1) {
  scores.push(
    makeScore({
      title: `Minor Blues in D ${String(i + 1).padStart(2, "0")}`,
      category: "12 小节练习曲",
      level: "高级",
      key: "D",
      harp: "C",
      position: "3rd",
      tempo: 68 + i * 3,
      techniques: ["12小节", "Minor Blues", "第三把位"],
      description: "第三把位的 12 小节小调练习曲。根音在 -4，b3 在 -5；用更暗的音色练习 minor blues 的句子。",
      tips: "先只吹 -4、-5、6、-6、7 五个音；再把第 9 小节的 V 级句子单独练。",
      tokens: build12Bar({ i: minorI, iv: minorIV, v: minorV, turn: minorTurn }, i),
      featured: i === 0,
    }),
  );
}

/* ---------------- 07 · Melodies & sight reading ---------------- */

const cMajorTab = {
  G4: [6, "blow", 0],
  A4: [-6, "draw", 0],
  B4: [-7, "draw", 0],
  C5: [7, "blow", 0],
  D5: [-8, "draw", 0],
  E5: [8, "blow", 0],
  F5: [-9, "draw", 0],
  G5: [9, "blow", 0],
  A5: [-10, "draw", 0],
};

function melodyTokens(notes) {
  return notes.map(([name, beats]) => {
    const tab = cMajorTab[name];
    if (!tab) throw new Error(`missing melody note ${name}`);
    return T(tab[0], tab[1], tab[2], beats);
  });
}

const traditionalMelodies = [
  {
    title: "Amazing Grace · 奇异恩典",
    notes: [["G4", 2], ["C5", 1], ["E5", 1], ["C5", 2], ["E5", 1], ["D5", 1], ["C5", 2], ["A4", 1], ["G4", 1], ["G4", 4]],
    tempo: 72,
    level: "入门",
  },
  {
    title: "Oh! Susanna · 哦，苏珊娜",
    notes: [["C5", 1], ["C5", 1], ["E5", 1], ["G5", 1], ["G5", 1], ["F5", 1], ["E5", 1], ["C5", 1], ["C5", 1], ["E5", 1], ["G5", 1], ["G5", 2], ["E5", 2]],
    tempo: 92,
    level: "入门",
  },
  {
    title: "Camptown Races · 坎普敦赛马",
    notes: [["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 1], ["G5", 1], ["E5", 1], ["G5", 1], ["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 2], ["G5", 2]],
    tempo: 100,
    level: "入门",
  },
  {
    title: "When the Saints Go Marching In · 当圣徒齐步前进",
    notes: [["C5", 1], ["E5", 1], ["F5", 1], ["G5", 1], ["C5", 1], ["E5", 1], ["F5", 1], ["G5", 1], ["C5", 1], ["E5", 1], ["F5", 1], ["G5", 1], ["E5", 1], ["C5", 1], ["E5", 1], ["D5", 1]],
    tempo: 100,
    level: "入门",
  },
  {
    title: "Auld Lang Syne · 友谊地久天长",
    notes: [["G4", 1], ["G4", 1], ["G4", 1], ["E5", 1], ["D5", 1], ["C5", 1], ["D5", 1], ["E5", 1], ["C5", 1], ["C5", 1], ["E5", 1], ["G5", 1], ["G5", 2], ["E5", 2]],
    tempo: 80,
    level: "入门",
  },
  {
    title: "Home on the Range · 牧场上的家",
    notes: [["G4", 1], ["G4", 1], ["E5", 1], ["C5", 1], ["E5", 1], ["G5", 1], ["G5", 2], ["E5", 1], ["D5", 1], ["C5", 1], ["D5", 1], ["E5", 2], ["C5", 2]],
    tempo: 84,
    level: "入门",
  },
  {
    title: "Red River Valley · 红河谷",
    notes: [["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 1], ["G5", 1], ["E5", 1], ["G5", 1], ["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 2], ["G5", 2]],
    tempo: 84,
    level: "入门",
  },
  {
    title: "This Little Light of Mine · 这小小光芒",
    notes: [["G4", 1], ["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 1], ["G5", 2], ["E5", 1], ["G5", 1], ["E5", 1], ["D5", 1], ["C5", 2], ["C5", 2]],
    tempo: 96,
    level: "入门",
  },
  {
    title: "Kum Ba Yah · 来吧，主",
    notes: [["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 1], ["G5", 1], ["E5", 2], ["D5", 1], ["E5", 1], ["G5", 1], ["E5", 1], ["D5", 2], ["C5", 2]],
    tempo: 76,
    level: "入门",
  },
  {
    title: "Swing Low, Sweet Chariot · 轻摇，甜马车",
    notes: [["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 1], ["G5", 1], ["E5", 2], ["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 1], ["G5", 1], ["E5", 2]],
    tempo: 72,
    level: "进阶",
  },
];

traditionalMelodies.forEach((melody, index) => {
  scores.push(
    makeScore({
      title: melody.title,
      category: "旋律与视奏",
      level: melody.level,
      key: "C",
      harp: "C",
      position: "1st",
      tempo: melody.tempo,
      techniques: ["旋律", "视奏", "传统曲调"],
      description: "一首公有领域的传统曲调，用 C 调口琴第一把位演奏。先唱旋律，再找孔位；不要只盯着 tab。",
      tips: "先用“啦”唱一遍，再吹；遇到换孔不准，回到单音练习，不要硬提速。",
      tokens: melodyTokens(melody.notes),
      source: "traditional",
      featured: index === 0,
    }),
  );
});

const originalMelodies = [
  { title: "Prairie Sunrise · 草原日出", notes: [["G4", 2], ["A4", 1], ["G4", 1], ["E5", 2], ["D5", 1], ["C5", 1], ["D5", 2], ["E5", 2]], tempo: 72, level: "入门" },
  { title: "Delta Lullaby · 三角洲摇篮曲", notes: [["E5", 2], ["D5", 1], ["C5", 1], ["A4", 2], ["G4", 1], ["A4", 1], ["C5", 4]], tempo: 60, level: "入门" },
  { title: "Blue Ridge Waltz · 蓝岭华尔兹", notes: [["G4", 1], ["C5", 1], ["E5", 1], ["G5", 2], ["E5", 1], ["D5", 1], ["C5", 2], ["A4", 1], ["G4", 1], ["G4", 2]], tempo: 84, level: "进阶" },
  { title: "Bayou Evening · 河口傍晚", notes: [["E5", 2], ["G5", 1], ["E5", 1], ["D5", 2], ["C5", 1], ["A4", 1], ["G4", 2], ["A4", 2]], tempo: 66, level: "进阶" },
  { title: "Railroad Moon · 铁路上的月亮", notes: [["G4", 1], ["G4", 1], ["E5", 1], ["G5", 1], ["A5", 2], ["G5", 1], ["E5", 1], ["D5", 2], ["C5", 2]], tempo: 92, level: "进阶" },
  { title: "Cotton Field Morning · 棉田清晨", notes: [["C5", 2], ["E5", 1], ["G5", 1], ["E5", 2], ["D5", 1], ["C5", 1], ["A4", 2], ["G4", 2]], tempo: 76, level: "入门" },
  { title: "Riverboat Shuffle · 河船摇摆", notes: [["G4", 1], ["A4", 1], ["C5", 1], ["E5", 1], ["G5", 2], ["E5", 1], ["D5", 1], ["C5", 2], ["G4", 2]], tempo: 100, level: "进阶" },
  { title: "Sunday Porch · 星期天门廊", notes: [["E5", 1], ["D5", 1], ["C5", 1], ["A4", 1], ["G4", 2], ["A4", 1], ["C5", 1], ["D5", 2], ["E5", 2]], tempo: 68, level: "入门" },
  { title: "Old Depot · 老车站", notes: [["G4", 2], ["E5", 1], ["D5", 1], ["C5", 2], ["A4", 1], ["G4", 1], ["A4", 2], ["G4", 2]], tempo: 72, level: "进阶" },
  { title: "Long Way Home · 回家的长路", notes: [["C5", 2], ["D5", 1], ["E5", 1], ["G5", 2], ["E5", 1], ["D5", 1], ["C5", 2], ["A4", 2]], tempo: 64, level: "进阶" },
];

originalMelodies.forEach((melody, index) => {
  scores.push(
    makeScore({
      title: melody.title,
      category: "旋律与视奏",
      level: melody.level,
      key: "C",
      harp: "C",
      position: "1st",
      tempo: melody.tempo,
      techniques: ["旋律", "视奏", "原创"],
      description: "一首原创的民谣风格旋律练习，重点在长音、句尾和音色，而不是速度。",
      tips: "先唱，再吹；把每个长音吹满，句尾做一点点渐弱。",
      tokens: melodyTokens(melody.notes),
      featured: index === 0,
    }),
  );
});

/* ---------------- 08 · Jazz blues ---------------- */

const jazzBases = [
  { title: "ii–V in C · Dm7 → G7", notes: [T(-4, "draw"), T(-5, "draw"), T(-6, "draw"), T(7, "blow"), T(6, "blow"), T(-7, "draw"), T(-8, "draw"), T(-9, "draw")] },
  { title: "V–I in C · G7 → Cmaj7", notes: [T(6, "blow"), T(-7, "draw"), T(-8, "draw"), T(-9, "draw"), T(7, "blow"), T(8, "blow"), T(9, "blow"), T(-7, "draw")] },
  { title: "Cmaj7 琶音", notes: [T(7, "blow"), T(8, "blow"), T(9, "blow"), T(-7, "draw"), T(9, "blow"), T(8, "blow"), T(7, "blow"), T(7, "blow")] },
  { title: "Dm7 琶音", notes: [T(-4, "draw"), T(-5, "draw"), T(-6, "draw"), T(7, "blow"), T(-6, "draw"), T(-5, "draw"), T(-4, "draw"), T(-4, "draw")] },
  { title: "ii–V–I 连句", notes: [T(-4, "draw"), T(-5, "draw"), T(-6, "draw"), T(7, "blow"), T(6, "blow"), T(-7, "draw"), T(-8, "draw"), T(-9, "draw"), T(7, "blow"), T(8, "blow"), T(9, "blow"), T(-7, "draw")] },
  { title: "半音接近", notes: [T(-4, "draw"), T(-5, "draw"), T(-6, "draw"), T(7, "blow"), T(-6, "draw"), T(-7, "draw"), T(7, "blow"), T(-7, "draw")] },
  { title: "G 蓝调爵士", notes: [T(-2, "draw"), T(-3, "draw", 1), T(-3, "draw"), T(4, "blow"), T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-6, "draw")] },
  { title: "D 小调爵士", notes: [T(-4, "draw"), T(-5, "draw"), T(6, "blow"), T(-6, "draw"), T(7, "blow"), T(-7, "draw"), T(-8, "draw"), T(8, "blow")] },
  { title: "C 大调 bebop", notes: [T(4, "blow"), T(-4, "draw"), T(5, "blow"), T(-5, "draw"), T(6, "blow"), T(-6, "draw"), T(-7, "draw"), T(7, "blow")] },
  { title: "G7 altered", notes: [T(-2, "draw"), T(-3, "draw", 1), T(4, "blow"), T(-4, "draw", 1), T(-4, "draw"), T(-5, "draw"), T(-6, "draw"), T(7, "blow")] },
];

const jazzVariants = [
  { key: "straight", label: "Straight", tempo: 0 },
  { key: "long-short", label: "Swing", tempo: 6 },
];

jazzBases.forEach((base, index) => {
  jazzVariants.forEach((variant, variantIndex) => {
    scores.push(
      makeScore({
        title: `${base.title} · ${variant.label}`,
        category: "爵士蓝调",
        level: "高级",
        key: "C",
        harp: "C",
        position: index === 6 ? "2nd" : index === 7 ? "3rd" : "1st",
        tempo: 78 + index * 2 + variant.tempo,
        techniques: ["爵士", "琶音", "和声"],
        description: "爵士蓝调的 arpeggio / ii–V 练习。先把每个和弦音落稳，再考虑加经过音和半音接近。",
        tips: "慢速 60 BPM，每小节只弹一个和弦音也可以；先听清和声，再加速。",
        tokens: variantTokens(base.notes, variant.key),
        featured: index === 0 && variantIndex === 0,
      }),
    );
  });
});

/* ---------------- write ---------------- */

const header = `export type ScoreLevel = "入门" | "进阶" | "高级";

export type ScoreCategory =
  | "基础训练"
  | "音阶与琶音"
  | "压音专项"
  | "节奏与舌堵"
  | "蓝调乐句"
  | "12 小节练习曲"
  | "旋律与视奏"
  | "爵士蓝调";

export type ScorePosition = "1st" | "2nd" | "3rd" | "12th";

export interface ScoreToken {
  hole: number;
  dir: "blow" | "draw";
  bend: number;
  beats: number;
  rest?: boolean;
}

export interface Score {
  id: string;
  slug: string;
  title: string;
  category: ScoreCategory;
  level: ScoreLevel;
  key: string;
  harp: string;
  position: ScorePosition;
  meter: "4/4" | "3/4" | "12/8";
  bars: number;
  tempo: number;
  techniques: string[];
  description: string;
  tips: string;
  source: "original" | "traditional";
  featured?: boolean;
  tokens: ScoreToken[];
}

export const SCORES: Score[] = `;

const body = JSON.stringify(scores, null, 2);
fs.writeFileSync(path.join("src", "data", "scores.ts"), `${header}${body};\n`);
console.log(`Generated ${scores.length} scores`);
console.log(
  Object.entries(
    scores.reduce((acc, score) => {
      acc[score.category] = (acc[score.category] || 0) + 1;
      return acc;
    }, {}),
  ),
);
console.log(
  Object.entries(
    scores.reduce((acc, score) => {
      acc[score.level] = (acc[score.level] || 0) + 1;
      return acc;
    }, {}),
  ),
);
