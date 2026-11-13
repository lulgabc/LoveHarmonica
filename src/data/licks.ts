export interface LickToken {
  hole: number;
  dir: "blow" | "draw";
  bend: number;
  beats: number;
}

export interface Lick {
  id: string;
  title: string;
  subtitle: string;
  level: "入门" | "进阶" | "高级";
  position: string;
  bars: string;
  style: string;
  description: string;
  how: string;
  tokens: LickToken[];
}

const t = (hole: number, dir: "blow" | "draw", bend = 0, beats = 1): LickToken => ({ hole, dir, bend, beats });

export const LICKS: Lick[] = [
  {
    id: "first-breath",
    title: "第一口呼吸",
    subtitle: "C 大调 · 单音与换孔",
    level: "入门",
    position: "1st / 2nd 均可",
    bars: "3 小节",
    style: "单音练习",
    description:
      "一条最基础的上下行练习，用来检查单音是否干净、换孔是否平稳。不要吹快，每个音都要有完整的音头。",
    how: "先唱一遍，再吹。每个音 1 拍，换孔时保持口腔形状不变，只移动琴。",
    tokens: [t(4, "blow", 0, 1), t(5, "blow", 0, 1), t(5, "draw", 0, 1), t(6, "blow", 0, 1), t(6, "draw", 0, 1), t(6, "blow", 0, 1), t(5, "draw", 0, 1), t(5, "blow", 0, 1), t(4, "blow", 0, 2)],
  },
  {
    id: "cross-harp-home",
    title: "第二把位的家",
    subtitle: "G 蓝调 · 根音、b3、b5、b7",
    level: "入门",
    position: "2nd position",
    bars: "2 小节",
    style: "Blues scale",
    description:
      "C 琴吹 G 蓝调的核心音：-2（G）、-3'（Bb）、4（C）、-4'（Db）、-4（D）、-5（F）。这条练习把所有“蓝调味”的音串起来。",
    how: "慢速，先只吹 -2 和 -3'，找到 b3 的“酸味”，再加 -4' 和 -5。",
    tokens: [t(2, "draw", 0, 1), t(3, "draw", 1, 1), t(4, "blow", 0, 1), t(4, "draw", 1, 1), t(4, "draw", 0, 1), t(3, "draw", 1, 1), t(2, "draw", 0, 2)],
  },
  {
    id: "sonny-boy-question",
    title: "Sonny Boy 式问答",
    subtitle: "短句 · 留白 · 重复",
    level: "入门",
    position: "2nd position",
    bars: "2 小节",
    style: "Chicago / 原声",
    description:
      "一个 2 小节的“问—答”动机。前半句问，后半句用更少的音回答。Sonny Boy Williamson II 的精髓不是音多，而是语气。",
    how: "第一小节像说话一样抛出问题，第二小节停顿半拍再回答。不要把每个音吹满。",
    tokens: [t(2, "draw", 0, 0.5), t(2, "draw", 0, 0.5), t(3, "draw", 1, 1), t(2, "draw", 0, 1), t(4, "blow", 0, 1.5), t(3, "draw", 1, 0.5), t(2, "draw", 0, 2)],
  },
  {
    id: "train-chug",
    title: "火车节奏",
    subtitle: "Chug · 双音 · 舌堵",
    level: "进阶",
    position: "2nd position",
    bars: "2 小节",
    style: "Train rhythm",
    description:
      "模仿蒸汽火车的节奏型：用双音/和弦 chug 制造“轰—轰—”的推进，再用单音旋律穿插。建议先用唇含吹，再尝试舌堵。",
    how: "每个 chug 都要有清楚的音头，像舌头在说“ta”。第 2 小节开始加入单音，不要丢掉拍子。",
    tokens: [t(2, "draw", 0, 0.5), t(3, "blow", 0, 0.5), t(2, "draw", 0, 0.5), t(3, "blow", 0, 0.5), t(4, "blow", 0, 0.5), t(4, "draw", 0, 0.5), t(4, "blow", 0, 0.5), t(3, "draw", 1, 0.5), t(2, "draw", 0, 1), t(3, "blow", 0, 0.5), t(2, "draw", 0, 0.5), t(2, "draw", 0, 2)],
  },
  {
    id: "little-walter-turn",
    title: "Little Walter 式转身",
    subtitle: "Turnaround · 连句 · 落点",
    level: "进阶",
    position: "2nd position",
    bars: "2 小节",
    style: "Chicago",
    description:
      "一个向 Little Walter 致意的 turnaround 练习：从 4 孔开始，经过 b5 和 5 孔，再落回 -2。重点在连句的流畅和最后一个音的“站稳”。",
    how: "先不加压音，把节奏吹准；再加上 -4' 的 b5，最后让 -2 有完整的 vibrato。",
    tokens: [t(4, "blow", 0, 0.5), t(4, "draw", 1, 0.5), t(4, "draw", 0, 0.5), t(5, "draw", 0, 0.5), t(6, "blow", 0, 1), t(5, "draw", 0, 0.5), t(4, "draw", 0, 0.5), t(3, "draw", 1, 1), t(2, "draw", 0, 2)],
  },
  {
    id: "slow-blues-cry",
    title: "Slow Blues 的哭腔",
    subtitle: "长音 · 压音 · 留白",
    level: "进阶",
    position: "2nd position",
    bars: "4 小节",
    style: "Slow blues",
    description:
      "慢蓝调不是“慢速音阶”，而是让每个音有呼吸。这条练习只用 5 个音，重点在长音、压音落点和句尾的颤音。",
    how: "50–60 BPM。每个长音都做渐强或渐弱；压音要“滑”到目标音，而不是突然掉下去。",
    tokens: [t(2, "draw", 0, 2), t(3, "draw", 1, 2), t(4, "blow", 0, 1), t(4, "draw", 1, 1), t(4, "draw", 0, 2), t(5, "draw", 0, 2), t(4, "draw", 0, 2)],
  },
  {
    id: "turnaround-12",
    title: "12 小节 Turnaround",
    subtitle: "第 11–12 小节 · 回家",
    level: "入门",
    position: "2nd position",
    bars: "2 小节",
    style: "12-bar blues",
    description:
      "一个简单、好用的 12 小节结尾：从 -2 上行到 4，再经过 b5 和 -3'，最后回到 -2。适合放在任何 G 蓝调的第 11–12 小节。",
    how: "先跟节拍器数 1–2–3–4，确保第 12 小节的 -2 落在第 1 拍的反拍或第 2 拍。",
    tokens: [t(2, "draw", 0, 1), t(3, "draw", 1, 1), t(4, "blow", 0, 1), t(4, "draw", 0, 1), t(4, "draw", 1, 1), t(3, "draw", 1, 1), t(2, "draw", 0, 2)],
  },
  {
    id: "third-position",
    title: "第三把位的小调",
    subtitle: "D minor · Dorian 色彩",
    level: "高级",
    position: "3rd position",
    bars: "2 小节",
    style: "Minor blues",
    description:
      "C 琴第三把位是 D minor。根音在 -4，b3 在 -5，4 在 6，5 在 -6，b7 在 7。这条练习展示第三把位的“暗色”线条。",
    how: "先找到 -4 的 home，再把 -5 当成 b3 落点。不要用第二把位的习惯去吹第三把位。",
    tokens: [t(4, "draw", 0, 1), t(5, "draw", 0, 1), t(6, "blow", 0, 1), t(6, "draw", 0, 1), t(7, "blow", 0, 2), t(6, "draw", 0, 1), t(5, "draw", 0, 1), t(4, "draw", 0, 2)],
  },
  {
    id: "mixolydian-run",
    title: "Mixolydian 上行",
    subtitle: "G Mixolydian · 第二把位",
    level: "进阶",
    position: "2nd position",
    bars: "2 小节",
    style: "理论 / 即兴",
    description:
      "G Mixolydian 是第二把位蓝调的“母音阶”：G A B C D E F。它比蓝调音阶更亮，适合在 I7 和弦上制造“开阔”的感觉。",
    how: "先慢速上下行，再把 b7（-5）停在长音上，听它和 I7 和弦的张力。",
    tokens: [t(2, "draw", 0, 1), t(3, "draw", 2, 1), t(3, "draw", 0, 1), t(4, "blow", 0, 1), t(4, "draw", 0, 1), t(5, "draw", 1, 1), t(5, "draw", 0, 1), t(6, "blow", 0, 2)],
  },
  {
    id: "jazz-blues-line",
    title: "Jazz Blues 下行",
    subtitle: "C 大调 · 半音接近",
    level: "高级",
    position: "1st / 2nd 均可",
    bars: "2 小节",
    style: "Jazz blues",
    description:
      "一条从高音 C 下行的线条，适合在 jazz blues 的 I7 或 IV7 上使用。它用自然音阶和半音经过音连接，听起来比纯五声音阶更“有和声”。",
    how: "先用 60 BPM 慢练，再把每两个音连成一组，找到句子的方向感。",
    tokens: [t(7, "blow", 0, 1), t(7, "draw", 0, 1), t(6, "draw", 0, 1), t(6, "blow", 0, 1), t(5, "draw", 0, 1), t(4, "draw", 0, 1), t(4, "blow", 0, 1), t(3, "draw", 1, 1), t(2, "draw", 0, 2)],
  },
];

export function tokenLabel(token: LickToken): string {
  const bend = token.bend === 1 ? "'" : token.bend >= 2 ? "''" : "";
  return `${token.dir === "draw" ? "-" : ""}${token.hole}${bend}`;
}
