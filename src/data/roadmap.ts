export interface RoadmapWeek {
  week: number;
  focus: string;
  practice: string;
  output: string;
}

export interface RoadmapPhase {
  id: string;
  number: string;
  months: string;
  weekRange: string;
  title: string;
  subtitle: string;
  description: string;
  focus: string[];
  goals: Array<{ label: string; text: string }>;
  weeks: RoadmapWeek[];
  checkpoints: Array<{ id: string; text: string; note: string }>;
  listening: string[];
  courses: string[];
}

export const PHASES: RoadmapPhase[] = [
  {
    id: "phase-1",
    number: "01",
    months: "第 1–3 个月",
    weekRange: "Week 1–12",
    title: "第一口呼吸",
    subtitle: "从吹响一个音，到吹完 12 小节",
    description:
      "这三个月只做一件事：把“发出声音”变成“控制声音”。不要急着学 100 个 lick，先把单音、呼吸、12 小节和一个能听的音色练出来。",
    focus: ["干净单音", "腹式呼吸", "12 小节", "Chug 律动", "前三个压音", "第一段 solo"],
    goals: [
      { label: "音色", text: "4–6 孔单音干净、稳定，长音能保持 8 拍不抖。" },
      { label: "节奏", text: "能在 70–90 BPM 里数完 12 小节，并在 1 & 3 拍 chug。" },
      { label: "技巧", text: "2、4、3 孔吸音压音能吹响并落到目标音。" },
      { label: "曲目", text: "完成 2 首 12 小节曲子的 head + 1 段简单 solo。" },
    ],
    weeks: [
      { week: 1, focus: "认识琴、持琴、第一口单音", practice: "每天 15 分钟：4/5/6 孔长音各 4 拍；对着镜子看含琴深度。", output: "录 30 秒：4、5、6 孔吹/吸各一次，听是否干净。" },
      { week: 2, focus: "全孔单音 + 腹式呼吸", practice: "上下行 1–6 孔，每音 4 拍；用“闻花/吹灰”的感觉呼吸。", output: "1–6 孔上下行，不出现双音；录一次自评。" },
      { week: 3, focus: "12 小节骨架 + 根音", practice: "数 1–4 拍；在 G 蓝调里找 -2、4、-4 三个根音/目标音。", output: "跟 70 BPM 伴奏走完 12 小节，每小节只吹一个根音。" },
      { week: 4, focus: "Chug 与 shuffle", practice: "1 & 3 拍低音、2 & 4 拍和弦；每天 10 分钟跟节拍器。", output: "12 小节 chug 不断拍；录 1 分钟。" },
      { week: 5, focus: "2 孔吸音压音", practice: "先吹 -2，再慢慢压低到 F#、F；用调音器确认。", output: "连续 4 拍稳定在 F#，再 4 拍在 F。" },
      { week: 6, focus: "4 孔吸音压音（b5）", practice: " -4 → -4'（D→Db）；把它放进 1 小节短句。", output: "用 -4' 吹 2 小节 slow blues 句子。" },
      { week: 7, focus: "3 孔吸音压音（b3）", practice: " -3 → -3' → -3''（B→Bb→A）；每天 5 分钟，不强求一次到位。", output: "在 12 小节里用 -3' 作为落点至少 3 次。" },
      { week: 8, focus: "5 孔吸音压音 + 长音", practice: " -5 → -5'（F→E）；练 8 拍长音与渐强渐弱。", output: "60 秒 slow blues：只使用 -2、-3'、-4'、-5、-5'。" },
      { week: 9, focus: "Quick change / slow change / turnaround", practice: "同一伴奏里切换第 2 小节 IV7 与不切换；练 3 个 turnaround。", output: "两种 12 小节进行都能跟完，并在第 11–12 小节做 turnaround。" },
      { week: 10, focus: "第一首完整曲", practice: "选《Easy》或《Help Me》，先唱旋律，再逐句找孔位。", output: "完整吹完 head + 1 段简单 solo。" },
      { week: 11, focus: "音色：手哇、聚音、动态", practice: "同一句用三种手型/音量吹；录下来对比。", output: "1 分钟音色练习：从耳语到嘶吼。" },
      { week: 12, focus: "阶段复盘与录音", practice: "复习 1–11 周；把最强的一版录下来。", output: "2 分钟录音：chug + 12 小节 solo + 一个 turnaround。" },
    ],
    checkpoints: [
      { id: "p1-1", text: "4–6 孔单音干净，长音 8 拍不抖", note: "录音回放，不应听到相邻孔漏气。" },
      { id: "p1-2", text: "70–90 BPM 下完整走完 12 小节", note: "可以只吹根音和 chug，但不能断拍。" },
      { id: "p1-3", text: "-2、-4、-3 孔压音能落到目标音", note: "用调音器或钢琴核对，不要求速度快。" },
      { id: "p1-4", text: "完成一首曲子的 head + 1 段 solo", note: "《Easy》《Help Me》或任何 12 小节曲。" },
      { id: "p1-5", text: "有 2 分钟可回放的录音", note: "录音是最好的老师，别怕难听。" },
    ],
    listening: ["Little Walter — Juke", "Big Walter Horton — Easy", "Sonny Boy Williamson II — Help Me", "Junior Wells — Hoodoo Man Blues"],
    courses: ["Tomlin 免费入门库", "Gussow Day 1", "Liam 压音三步", "JDR 中文入门系列"],
  },
  {
    id: "phase-2",
    number: "02",
    months: "第 4–6 个月",
    weekRange: "Week 13–24",
    title: "蓝调语言",
    subtitle: "从“会吹音”到“会造句”",
    description:
      "现在开始积累语汇：蓝调音阶、20 个核心 lick、call & response、turnaround、慢蓝调和第三把位。重点是“能用出来”，不是“背了多少”。",
    focus: ["第二把位音阶", "20 个核心 lick", "Call & response", "Turnaround", "慢蓝调", "第三把位"],
    goals: [
      { label: "语汇", text: "能不用看谱吹出 20 个短句，并知道它们适合落在哪一拍。" },
      { label: "结构", text: "能在一段 12 小节里安排“问—答—留白—收尾”。" },
      { label: "位置", text: "第二把位熟练，第三把位能吹出 minor blues 的味道。" },
      { label: "输出", text: "录 3 段不同速度/情绪的 12 小节 solo。" },
    ],
    weeks: [
      { week: 13, focus: "第二把位音阶地图", practice: "在 C 琴上找 G 蓝调音阶：-2、-3'、4、-4'、-4、-5、6。", output: "不看谱上下行 2 个八度，慢速准确。" },
      { week: 14, focus: "5 个音阶 pattern", practice: "三度、四度、五度模进；每个 pattern 跟 80 BPM 吹 4 遍。", output: "任选 2 个 pattern 放进 12 小节。" },
      { week: 15, focus: "10 个核心 lick", practice: "每天 2 个，先唱再吹；用同一个 lick 移调到 3 个位置。", output: "10 个 lick 能连续吹完，不卡壳。" },
      { week: 16, focus: "Call & response", practice: "2 小节“问”、2 小节“答”；答句必须比问句少音。", output: "录 4 组问答，每组不超过 8 个音。" },
      { week: 17, focus: "Turnaround 与结尾", practice: "学 5 个 turnaround；每个都练“进—转—收”。", output: "能在 12 小节第 11–12 小节自然收尾。" },
      { week: 18, focus: "Slow blues", practice: "50–60 BPM，长音、vibrato、留白；每句不超过 5 个音。", output: "2 分钟 slow blues，至少 3 次“只吹一个音”。" },
      { week: 19, focus: "Shuffle 变化", practice: "boogie、train、double stop、chug 动态；跟 90–110 BPM。", output: "同一 12 小节里切换 3 种律动。" },
      { week: 20, focus: "第三把位 minor", practice: "C 琴第三把位 D minor：-4、-5、6、-6、7；吹 8 小节 minor blues。", output: "1 段 D minor 12 小节 solo。" },
      { week: 21, focus: "第一把位 straight harp", practice: "C 琴 1 把位：4、5、6、-6、7；吹《Amazing Grace》或民谣旋律。", output: "完整吹一首 1 把位旋律。" },
      { week: 22, focus: "Transcription 项目", practice: "选 Big Walter《Easy》或 Sonny Boy《Help Me》的 8 小节，逐音扒。", output: "写出 tab，并跟原曲一起吹。" },
      { week: 23, focus: "Jam 礼仪", practice: "数拍、结尾、音量、看吉他手；跟一位吉他手/伴奏实际 jam。", output: "录一段与伴奏/真人合奏的 3 分钟。" },
      { week: 24, focus: "阶段复盘", practice: "把 20 个 lick 分类：开头、发展、转折、结尾。", output: "3 段 solo 录音：慢、中、快各一。" },
    ],
    checkpoints: [
      { id: "p2-1", text: "20 个核心 lick 能脱谱吹出", note: "不要求快，要求每个音清楚。" },
      { id: "p2-2", text: "能设计 4 组 call & response", note: "答句要比问句更短、更安静。" },
      { id: "p2-3", text: "掌握 5 个 turnaround", note: "每个都能自然接回第 1 小节。" },
      { id: "p2-4", text: "能吹 2 分钟 slow blues", note: "有留白、有动态、不急着填满。" },
      { id: "p2-5", text: "完成 8 小节 transcription", note: "写出 tab 并跟原曲合奏。" },
    ],
    listening: ["Sonny Boy Williamson II — Down and Out Blues", "Big Walter Horton — Big Walter Horton with Carey Bell", "Junior Wells — Hoodoo Man Blues", "James Cotton — 100% Cotton"],
    courses: ["Ronnie Shellist 免费课", "Tomlin 7 licks", "Harmonica.com blues scale", "张晓松技巧合集"],
  },
  {
    id: "phase-3",
    number: "03",
    months: "第 7–9 个月",
    weekRange: "Week 25–36",
    title: "音色与电声",
    subtitle: "从“吹对”到“吹得像 Chicago”",
    description:
      "这一阶段开始处理“声音的质感”：舌堵、vibrato、growl、麦克风与音箱。你会第一次听到自己的声音从“口琴”变成“一个乐队里的声音”。",
    focus: ["舌堵", "Vibrato", "Growl", "麦克风与音箱", "Chicago shuffle", "三首完整曲"],
    goals: [
      { label: "舌堵", text: "能用舌堵吹单音、八度、slap，并在曲子中使用。" },
      { label: "音色", text: "建立至少 3 种可切换的音色：清音、聚音、失真。" },
      { label: "电声", text: "理解麦克风握法、增益、EQ、反馈控制。" },
      { label: "曲目", text: "准备 3 首完整曲，能连续演出 10–15 分钟。" },
    ],
    weeks: [
      { week: 25, focus: "舌堵单音与八度", practice: "舌头堵左侧，右侧留一个孔；先 4/5 孔，再 4/5 八度。", output: "舌堵单音 1 分钟不跑音；八度能吹响。" },
      { week: 26, focus: "舌堵压音与切换", practice: "舌堵 -3'、-4'；在 pucker 与 tongue block 之间切换。", output: "同一句用两种口型各吹一遍。" },
      { week: 27, focus: "Vibrato 三种", practice: "喉震、腹震、手震；每个 5 分钟，录下来对比。", output: "8 拍长音上做 3 种 vibrato。" },
      { week: 28, focus: "Growl / flutter / 效果", practice: "哼唱与吹奏同时；舌头 flutter；注意不要变成噪音。", output: "在 slow blues 里用 2 次 growl。" },
      { week: 29, focus: "麦克风基础", practice: "子弹麦握法、聚音、距离；没有麦就用手杯模拟。", output: "清音 vs 聚音 vs 近讲三种录音。" },
      { week: 30, focus: "小音箱与反馈", practice: "音量、Tone、增益；找到反馈点并学会避开。", output: "调出一个可用的 Chicago 音色，录 1 分钟。" },
      { week: 31, focus: "E/A 调 Chicago shuffle", practice: "吉他最爱的 E、A 调；用 A、D 调口琴吹第二把位。", output: "跟 E 调吉他伴奏 jam 3 分钟。" },
      { week: 32, focus: "Little Walter 研究", practice: "《Juke》head 简化版；听他的音头、连句和停顿。", output: "吹出 12 小节《Juke》风格片段。" },
      { week: 33, focus: "Sonny Boy II 研究", practice: "《Help Me》《Bring It on Home》的 phrasing；重点在“少”。", output: "用 8 个音以内吹完 12 小节。" },
      { week: 34, focus: "Junior Wells 研究", practice: "《Hoodoo Man Blues》的 groove 与呼应；跟整张专辑 jam。", output: "完整跟弹 2 首。" },
      { week: 35, focus: "三首曲子的 set", practice: "排序、报幕、数拍、结尾；设计 transition。", output: "三首连演，不中断。" },
      { week: 36, focus: "录一场 15 分钟 mini set", practice: "用手机或录音软件，一次录完，不补录。", output: "15 分钟 live set 音频/视频。" },
    ],
    checkpoints: [
      { id: "p3-1", text: "舌堵单音、八度、slap 能实际使用", note: "不是“能响”，而是能放进句子里。" },
      { id: "p3-2", text: "三种 vibrato 可切换", note: "喉、腹、手，各能持续 4 拍。" },
      { id: "p3-3", text: "调出一个可用的电声音色", note: "知道麦克风距离、增益和反馈点。" },
      { id: "p3-4", text: "能完整演奏 3 首曲子", note: "包括开头、solo、结尾。" },
      { id: "p3-5", text: "完成 15 分钟 mini set 录音", note: "一次过，不补录，训练现场感。" },
    ],
    listening: ["Little Walter — The Best of Little Walter", "Junior Wells — Hoodoo Man Blues", "James Cotton — 100% Cotton", "William Clarke — Blowin' Like Hell"],
    courses: ["Gussow tongue blocking", "Liam tongue blocking", "Ronnie Shellist 12-bar bending", "Howard Levy bending"],
  },
  {
    id: "phase-4",
    number: "04",
    months: "第 10–12 个月",
    weekRange: "Week 37–48",
    title: "自己的声音",
    subtitle: "从“像谁”到“像自己”",
    description:
      "最后三个月不再堆素材，而是整理、选择、表达。你会做一首自己的器乐曲、准备一套 30 分钟曲目、上台一次，并给下一个 12 个月留下方向。",
    focus: ["即兴限制", "Play the changes", "Jazz blues", "原创曲", "舞台", "录音与教学"],
    goals: [
      { label: "即兴", text: "能在 3 个调上，用 3–5 个音即兴出有结构的 12 小节。" },
      { label: "和声", text: "能在 I–IV–V 上找到 3 度/7 度目标音，开始“吹 changes”。" },
      { label: "作品", text: "完成一首原创 12 小节器乐曲，有 head、solo、ending。" },
      { label: "现场", text: "完成一次 open mic / jam / 小型演出，并留下录像。" },
    ],
    weeks: [
      { week: 37, focus: "限制即兴：3 个音", practice: "只用 -2、-3'、4 吹 12 小节；靠节奏和重复制造变化。", output: "录 3 版不同的 3 音 solo。" },
      { week: 38, focus: "Motif 发展", practice: "4 拍动机 → 移调 → 缩短 → 扩展；每个练习 2 小节。", output: "用 1 个动机发展出 12 小节。" },
      { week: 39, focus: "Play the changes", practice: "I7 落 3 度/7 度，IV7、V7 找目标和弦音；慢速 60 BPM。", output: "12 小节里每个和弦至少落一个 chord tone。" },
      { week: 40, focus: "Jazz blues 入门", practice: "听《Now's the Time》《Blue Monk》；学 1 个 ii–V 句子。", output: "在 jazz blues 12 小节里用 1 个 ii–V lick。" },
      { week: 41, focus: "Minor blues", practice: "第三把位；《Mr. P.C.》风格 12 小节；b3、b5、b7。", output: "1 段 minor blues solo。" },
      { week: 42, focus: "原创 head", practice: "写 8–12 小节旋律，必须能唱；再配 12 小节 solo。", output: "原创曲 demo（手机即可）。" },
      { week: 43, focus: "曲目库整理", practice: "列出 10 首能演的曲子、调性、口琴调、开头/结尾。", output: "一份自己的 setlist + key chart。" },
      { week: 44, focus: "舞台与乐队沟通", practice: "数拍、手势、监听、音量；模拟一次“上台”。", output: "录一次带报幕的 10 分钟演出。" },
      { week: 45, focus: "Demo 录音", practice: "录 3 首：清音、电声、slow blues；学基础混音。", output: "3 首 demo，能发给朋友/场地。" },
      { week: 46, focus: "Open mic / jam", practice: "去一次现场；只带 3 首准备最熟的曲子。", output: "现场录像或录音 + 3 条复盘。" },
      { week: 47, focus: "教一个初学者", practice: "把单音、12 小节、压音讲给一个朋友听。", output: "写一页“我给新手的第一课”。" },
      { week: 48, focus: "总复盘与下一轮", practice: "回听第 1 周与第 48 周的录音；写下一年的 3 个目标。", output: "一份 12 个月复盘 + 下一轮计划。" },
    ],
    checkpoints: [
      { id: "p4-1", text: "能用 3–5 个音即兴 12 小节", note: "有开头、发展、结尾，不是随机吹。" },
      { id: "p4-2", text: "能在 I–IV–V 上落到 chord tones", note: "慢速即可，关键是对和声有意识。" },
      { id: "p4-3", text: "完成一首原创 12 小节曲", note: "有可唱的 head 和清楚的 ending。" },
      { id: "p4-4", text: "完成一次现场演出", note: "open mic、jam、朋友聚会都算。" },
      { id: "p4-5", text: "留下 3 首 demo 和一份下一轮计划", note: "让学习可以继续，而不是停在“学完”。" },
    ],
    listening: ["Howard Levy — Flight of the Cosmic Hippo", "Toots Thielemans — Man Bites Harmonica!", "Filip Jers — In the Spirit of Toots", "Jason Ricci — Done with the Devil"],
    courses: ["Jason Ricci Free Friday", "Filip Jers 3rd position", "Howard Levy ArtistWorks", "My Harmonica Studio"],
  },
];

export interface RepertoireItem {
  title: string;
  artist: string;
  phase: string;
  focus: string;
  why: string;
}

export const REPERTOIRE: RepertoireItem[] = [
  {
    title: "Easy",
    artist: "Big Walter Horton",
    phase: "Phase 1–2",
    focus: "音色、慢蓝调、2/3 孔压音",
    why: "句子慢、留白多，是练习“一个音站稳”的最好材料。先学 head，再学一两个 chorus。",
  },
  {
    title: "Help Me",
    artist: "Sonny Boy Williamson II",
    phase: "Phase 1–2",
    focus: "phrasing、问答、空间",
    why: "音不多，但每个音都有语气。适合练习“少吹一点”和句尾的停顿。",
  },
  {
    title: "Juke",
    artist: "Little Walter",
    phase: "Phase 2–3",
    focus: "head、swing、电声音色",
    why: "蓝调口琴的“国歌”。先学简化 head，再听他的音头和连句。",
  },
  {
    title: "My Babe",
    artist: "Little Walter",
    phase: "Phase 2",
    focus: "12 小节、律动、短句",
    why: "节奏清楚、句子短，适合第一次跟完整乐队/伴奏一起吹。",
  },
  {
    title: "Hoodoo Man Blues",
    artist: "Junior Wells",
    phase: "Phase 3",
    focus: "groove、乐队互动、音色",
    why: "听口琴如何和吉他、贝斯、鼓“对话”，而不是只顾自己吹。",
  },
  {
    title: "The Creeper",
    artist: "James Cotton",
    phase: "Phase 3",
    focus: "音头、能量、articulation",
    why: "当你吹得太“温柔”时，用这首找回口琴的攻击性和舞台感。",
  },
  {
    title: "Blues with a Feeling",
    artist: "Little Walter",
    phase: "Phase 3",
    focus: "slow blues、vibrato、动态",
    why: "练习长音、颤音和“从耳语到嘶吼”的动态控制。",
  },
  {
    title: "Bring It on Home",
    artist: "Sonny Boy Williamson II",
    phase: "Phase 2–3",
    focus: "原声感、叙事、留白",
    why: "一首“讲故事”的蓝调。学会让口琴像人声一样呼吸。",
  },
  {
    title: "Christo Redemptor",
    artist: "Charlie Musselwhite",
    phase: "Phase 3–4",
    focus: "instrumental、音色、长句",
    why: "器乐曲，适合练习完整结构、音色层次和长时间的情绪推进。",
  },
  {
    title: "Miss You",
    artist: "Sugar Blue / The Rolling Stones",
    phase: "Phase 4",
    focus: "modern phrasing、riff、funk 感",
    why: "把蓝调口琴放进现代流行/funk 语境，练习短 riff 和节奏 hook。",
  },
];

export const ROUTINES = [  {
    id: "twenty",
    name: "20 分钟 · 日常维持",
    total: 20,
    blocks: [
      { name: "呼吸与长音", minutes: 4 },
      { name: "单音 / 压音", minutes: 5 },
      { name: "12 小节伴奏", minutes: 5 },
      { name: "乐句 / 即兴", minutes: 4 },
      { name: "录音与听回", minutes: 2 },
    ],
  },
  {
    id: "forty-five",
    name: "45 分钟 · 稳定进步",
    total: 45,
    blocks: [
      { name: "呼吸、长音、音色", minutes: 8 },
      { name: "技巧专项（压音/舌堵）", minutes: 10 },
      { name: "音阶与 pattern", minutes: 7 },
      { name: "曲目 / 12 小节", minutes: 12 },
      { name: "即兴与录音", minutes: 8 },
    ],
  },
  {
    id: "ninety",
    name: "90 分钟 · 深度练习",
    total: 90,
    blocks: [
      { name: "热身与长音", minutes: 10 },
      { name: "技巧专项", minutes: 20 },
      { name: "音阶 / 和声", minutes: 15 },
      { name: "曲目与 transcription", minutes: 25 },
      { name: "即兴 / jam", minutes: 15 },
      { name: "录音、复盘、笔记", minutes: 5 },
    ],
  },
];
