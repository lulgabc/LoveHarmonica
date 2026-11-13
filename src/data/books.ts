export interface Book {
  id: string;
  title: string;
  titleZh?: string;
  author: string;
  year: string;
  category: "方法书" | "技巧书" | "历史与人文" | "乐句与曲集";
  level: "入门" | "进阶" | "高级" | "全阶段";
  lang: "英文" | "中文";
  cover: { from: string; to: string; ink: string; label: string };
  oneLiner: string;
  why: string;
  contents: string[];
  url: string;
  featured?: boolean;
}

export const BOOKS: Book[] = [
  {
    id: "blues-harmonica-for-dummies",
    title: "Blues Harmonica For Dummies",
    titleZh: "蓝调口琴达人迷",
    author: "Winslow Yerxa",
    year: "2020",
    category: "方法书",
    level: "入门",
    lang: "英文",
    cover: { from: "#d7a84f", to: "#7d3f2a", ink: "#1b1206", label: "WILEY" },
    oneLiner: "最完整、最现代的一本英文蓝调口琴入门书。",
    why:
      "如果你只买一本英文书，买这本。它把选琴、持琴、单音、压音、舌堵、12 小节、即兴、录音和器材都放进了一本书里，而且写作风格不居高临下。书里的音频示例也很实用。",
    contents: [
      "从选琴到第一声音色，适合完全零基础",
      "压音、舌堵、和弦、位置与即兴的系统讲解",
      "蓝调历史、唱片推荐和器材入门",
    ],
    url: "https://www.wiley.com/en-us/blues-harmonica-for-dummies-p-9781119694519",
    featured: true,
  },
  {
    id: "harmonica-for-dummies",
    title: "Harmonica For Dummies",
    titleZh: "口琴达人迷",
    author: "Winslow Yerxa",
    year: "2020（第 3 版）",
    category: "方法书",
    level: "入门",
    lang: "英文",
    cover: { from: "#e1c07b", to: "#315e5b", ink: "#10201e", label: "WILEY" },
    oneLiner: "比 Blues 版更宽，覆盖民谣、摇滚、乡村、爵士和半音阶。",
    why:
      "如果你还没决定只吹 blues，或者想同时了解 chromatic、tremolo 和不同风格，这本更合适。它的优点是“广”，缺点是 blues 的深度不如专门那一本。",
    contents: [
      "口琴家族、调音、持琴与读 tab",
      "单音、压音、舌堵、和弦与即兴基础",
      "多种风格、录音、演出与器材",
    ],
    url: "https://www.wiley.com/en-us/harmonica-for-dummies-3rd-edition-p-9781119700128",
    featured: true,
  },
  {
    id: "harp-handbook",
    title: "The Harp Handbook",
    titleZh: "口琴手册",
    author: "Steve Baker",
    year: "1990 / 第 4 版 2006",
    category: "技巧书",
    level: "进阶",
    lang: "英文",
    cover: { from: "#a7b4a0", to: "#2f3b32", ink: "#f2eadb", label: "BOSWORTH" },
    oneLiner: "欧洲口琴圈的“圣经”，一本把技术、历史、器材和调音讲透的参考书。",
    why:
      "它不是一本从头到尾的练习册，而是一本可以反复查的工具书。压音、超吹、舌堵、维修、调音、麦克风与音箱、风格史都有涉及。Howard Levy 也称赞它是第一本真正认真对待十孔口琴的书。",
    contents: [
      "十孔口琴的构造、调音、维修与改装",
      "压音、超吹、舌堵、音色与电声",
      " blues harp 风格史与唱片目录",
    ],
    url: "https://www.stevebaker.de/the_harp_handbook_de_73.html",
    featured: true,
  },
  {
    id: "first-lessons",
    title: "First Lessons Blues Harmonica",
    titleZh: "蓝调口琴第一课",
    author: "David Barrett",
    year: "2015",
    category: "方法书",
    level: "入门",
    lang: "英文",
    cover: { from: "#d9b46a", to: "#5b3a22", ink: "#1b1206", label: "MEL BAY" },
    oneLiner: "28 页的迷你入门课，直接把蓝调味放进第一周。",
    why:
      "短、清楚、没有废话。它用 C 调口琴，从单音、12 小节、vibrato、shakes 到舌堵，适合作为“第一本练习册”。如果你觉得 Dummies 太厚，从这本开始。",
    contents: [
      "单音、长音与基础节奏",
      "12 小节蓝调结构与简单 solo",
      "vibrato、shakes、舌堵入门",
    ],
    url: "https://www.melbay.com/Products/20180M/first-lessons-blues-harmonica.aspx",
  },
  {
    id: "basic-blues-method",
    title: "Basic Blues Harmonica Method, Level 1",
    titleZh: "基础蓝调口琴方法 第一册",
    author: "David Barrett",
    year: "2015",
    category: "方法书",
    level: "入门",
    lang: "英文",
    cover: { from: "#c79c52", to: "#22303c", ink: "#f2eadb", label: "SCHOOL OF THE BLUES" },
    oneLiner: "Barrett 体系的第一块砖，重点在舌堵与 12 小节里的 phrasing。",
    why:
      "如果你想从一开始就学舌堵，这本比很多“先学唇含、以后再改”的教材更一致。它用 C 和 A 调口琴，练习设计很细，适合认真打基础。",
    contents: [
      "持琴、口型、舌堵与单音",
      "12 小节蓝调、phrasing 与歌曲示例",
      "位置理论入门与推荐聆听",
    ],
    url: "https://www.melbay.com/Products/99103M/basic-blues-harmonica-method-level-1.aspx",
  },
  {
    id: "building-technique",
    title: "Building Harmonica Technique",
    titleZh: "口琴技巧建构",
    author: "David Barrett",
    year: "1990s / 新版",
    category: "技巧书",
    level: "进阶",
    lang: "英文",
    cover: { from: "#8f9b86", to: "#24352e", ink: "#f2eadb", label: "MEL BAY" },
    oneLiner: "把 blues 口琴的技术拆成可训练的模块，适合已经能吹 solo 的人。",
    why:
      "这本不是给第一周的。它系统讲位置、位置替代、lead 与 accompaniment、压音、舌堵和音色。适合在你能完整吹 12 小节之后，用来补“技术漏洞”。",
    contents: [
      "位置理论与 position substitutes",
      "lead / accompaniment 两种角色",
      "压音、舌堵、音色与句子结构",
    ],
    url: "https://www.melbay.com/Products/95439/building-harmonica-technique.aspx",
  },
  {
    id: "harmonica-essentials",
    title: "Harmonica Essentials",
    titleZh: "口琴必备",
    author: "David Barrett & Fritz Hasenpusch",
    year: "2016",
    category: "技巧书",
    level: "全阶段",
    lang: "英文",
    cover: { from: "#b7a27c", to: "#3d3022", ink: "#f6eddd", label: "GIG SAVERS" },
    oneLiner: "一本薄薄的“随身参考”：乐理、音阶、位置、12 小节和器材。",
    why:
      "当你不想翻厚书，只想确认“第三把位是什么”“这个和弦怎么来的”“12 小节怎么数”，这本很顺手。它把六个 Gig Savers 小册子合成一本。",
    contents: [
      "读谱、音阶、三和弦、位置理论",
      "12 小节蓝调与常见进行",
      "器材、录音与演出实用知识",
    ],
    url: "https://www.melbay.com/Products/30573/harmonica-essentials.aspx",
  },
  {
    id: "gindick-country-blues",
    title: "Country & Blues Harmonica for the Musically Hopeless",
    titleZh: "写给“音乐绝望者”的乡村与蓝调口琴",
    author: "Jon Gindick",
    year: "1984 / 2011 修订",
    category: "方法书",
    level: "入门",
    lang: "英文",
    cover: { from: "#d77b4a", to: "#5a2f1e", ink: "#fff4df", label: "CROSS HARP" },
    oneLiner: "最会鼓励人的口琴书：你不需要懂乐理，也能开始 jam。",
    why:
      "Gindick 的教学哲学是“先让你发出声音、先让你觉得自己可以”。这本书卖掉上百万册，不是因为它最系统，而是因为它最不吓人。适合作为第一本“睡前读物 + 练习册”。",
    contents: [
      "完全零乐理的入门路径",
      "bending、tongue blocking、train whistle、chug",
      "如何跟吉他/乐队 jam，以及大量歌曲",
    ],
    url: "https://openlibrary.org/search?q=Country+%26+Blues+Harmonica+for+the+Musically+Hopeless",
  },
  {
    id: "gindick-rock-blues",
    title: "Rock n' Blues Harmonica",
    titleZh: "摇滚与蓝调口琴",
    author: "Jon Gindick",
    year: "2000s",
    category: "方法书",
    level: "入门",
    lang: "英文",
    cover: { from: "#c05a44", to: "#2a1b18", ink: "#f7e4c4", label: "CROSS HARP" },
    oneLiner: "比“Musically Hopeless”更厚、更野，适合想吹摇滚和 jam 的人。",
    why:
      "如果你喜欢的是 Paul Butterfield、John Popper 那种更有攻击性的口琴，这本比传统蓝调教材更对味。它仍然很 Gindick：故事、笑话、riff 和大量“现在就吹”的练习。",
    contents: [
      "单音、和弦、12 小节、cross harp",
      "bending、tongue blocking、octaves、vibrato",
      "麦克风、音箱、六种位置与经典 riff",
    ],
    url: "https://openlibrary.org/search?q=Rock+n%27+Blues+Harmonica+Jon+Gindick",
  },
  {
    id: "100-licks",
    title: "100 Authentic Blues Harmonica Licks",
    titleZh: "100 条正宗蓝调口琴乐句",
    author: "Steve Cohen",
    year: "2014",
    category: "乐句与曲集",
    level: "进阶",
    lang: "英文",
    cover: { from: "#d2a24e", to: "#1f2a38", ink: "#f5e7c8", label: "HAL LEONARD" },
    oneLiner: "一本“乐句词典”，适合在你会吹 12 小节之后扩充语汇。",
    why:
      "它不教你如何即兴，但给你大量可分析、可移调的素材：cross harp、straight harp、boogie、stop-time、shuffle、octave、turnaround。最好的用法不是背 100 条，而是挑 10 条拆开、改编、放进自己的 solo。",
    contents: [
      "100 条不同风格与技术的 lick",
      "标准记谱 + 口琴 tab + 在线音频",
      "turnarounds、endings、overblow 乐句",
    ],
    url: "https://www.halleonard.com/product/115070/100-authentic-blues-harmonica-licks",
    featured: true,
  },
  {
    id: "rhythms-of-breath",
    title: "Rhythms of the Breath, Vol. 1",
    titleZh: "呼吸的节奏 第一册",
    author: "Howard Levy",
    year: "2022",
    category: "技巧书",
    level: "高级",
    lang: "英文",
    cover: { from: "#9db5c4", to: "#263847", ink: "#f4ead8", label: "LEVYLAND" },
    oneLiner: "把鼓的 rudiments 翻译成口琴呼吸，Howard Levy 的破壁练习。",
    why:
      "这不是一本“吹更多音”的书，而是一本重新训练呼吸与节奏关系的书。120+ 个练习，分 basic / intermediate / advanced 三层，适合已经能稳定压音、想突破速度与精确度的人。",
    contents: [
      "呼吸、舌头与节奏的协调训练",
      "120+ 个练习与音乐示例",
      "附 MIDI / 示范音频，C 调口琴记谱",
    ],
    url: "https://www.levyland.com/",
  },
  {
    id: "harmonicas-harps",
    title: "Harmonicas, Harps and Heavy Breathers",
    titleZh: "口琴、竖琴与深呼吸",
    author: "Kim Field",
    year: "1993 / 2000 更新版",
    category: "历史与人文",
    level: "全阶段",
    lang: "英文",
    cover: { from: "#b8a98c", to: "#3b342a", ink: "#f5ecdc", label: "COOPER SQUARE" },
    oneLiner: "口琴史的标准读物：从中国笙到 Little Walter、Stevie Wonder 和 John Popper。",
    why:
      "如果你想知道这件小乐器如何从德国工厂、美国街头、芝加哥俱乐部一路走到爵士厅和摇滚舞台，这本书是最好的入口。它让“学口琴”变成“进入一段音乐史”。",
    contents: [
      "口琴的发明、工业化与美国流行史",
      "近 70 位口琴大师的 profile",
      "蓝调、乡村、爵士、摇滚、古典的分支",
    ],
    url: "https://www.globepequot.com/9780815410201/harmonicas-harps-and-heavy-breathers",
    featured: true,
  },
  {
    id: "deep-blues",
    title: "Deep Blues",
    titleZh: "深蓝调",
    author: "Robert Palmer",
    year: "1981",
    category: "历史与人文",
    level: "全阶段",
    lang: "英文",
    cover: { from: "#6f8fa8", to: "#1c2b39", ink: "#f1e8d8", label: "PENGUIN" },
    oneLiner: "Delta 到 Chicago 的蓝调文化史，理解“蓝调为什么这样唱”的必读。",
    why:
      "它不直接教口琴，但会改变你吹口琴的方式。当你了解 Robert Johnson、Muddy Waters、Sonny Boy Williamson 的生活现场，你句子里的“重量”会不一样。",
    contents: [
      "Mississippi Delta 的社会与音乐现场",
      "大迁徙与 Chicago 电声蓝调的形成",
      "Robert Johnson、Muddy Waters、Howlin' Wolf 等人",
    ],
    url: "https://www.penguinrandomhouse.com/books/323227/deep-blues-by-robert-palmer/",
  },
  {
    id: "chicago-blues",
    title: "Chicago Blues: The City and the Music",
    titleZh: "芝加哥蓝调：城市与音乐",
    author: "Mike Rowe",
    year: "1975 / 1981",
    category: "历史与人文",
    level: "全阶段",
    lang: "英文",
    cover: { from: "#a45f45", to: "#241a18", ink: "#f6e8d4", label: "DA CAPO" },
    oneLiner: "想理解 Little Walter、Muddy Waters、Junior Wells 所处的 Chicago，读这本。",
    why:
      "它把俱乐部、唱片公司、移民、种族隔离和音乐产业放在一起讲。你会明白为什么芝加哥蓝调会那么“电”、那么“硬”，也会明白口琴为什么在那里变成了主角。",
    contents: [
      "South Side / West Side 的俱乐部场景",
      "Chess Records 与 Chicago 蓝调产业",
      "Muddy Waters、Little Walter、Howlin' Wolf 等",
    ],
    url: "https://www.dacapopress.com/titles/mike-rowe/chicago-blues/9780306801457",
  },
  {
    id: "beyond-crossroads",
    title: "Beyond the Crossroads",
    titleZh: "十字路口之外",
    author: "Adam Gussow",
    year: "2017",
    category: "历史与人文",
    level: "全阶段",
    lang: "英文",
    cover: { from: "#8f6f4a", to: "#211812", ink: "#f3e6d2", label: "UNC PRESS" },
    oneLiner: "关于“魔鬼十字路口”传说的文化史，由口琴手写口琴手的故事。",
    why:
      "Gussow 既是学者也是蓝调口琴手。这本书讲 Robert Johnson 的十字路口神话如何被一代代音乐人、听众和商人使用。它会让你对“蓝调”的叙事有更复杂的理解。",
    contents: [
      "十字路口传说的来源与流变",
      "蓝调、宗教、种族与商业的交叉",
      "Robert Johnson 之后的神话生产",
    ],
    url: "https://uncpress.org/book/9781469631660/beyond-the-crossroads/",
  },
  {
    id: "mister-satan",
    title: "Mister Satan's Apprentice",
    titleZh: "撒旦先生的学徒",
    author: "Adam Gussow",
    year: "1998",
    category: "历史与人文",
    level: "全阶段",
    lang: "英文",
    cover: { from: "#be8b45", to: "#2c2119", ink: "#f7ead0", label: "U MINNESOTA" },
    oneLiner: "一个白人青年在哈林街头跟黑人蓝调乐手 Sterling Magee 组队的回忆录。",
    why:
      "这不是教材，但它可能是最能让一个自学者理解“蓝调不是技巧，是关系”的书。Gussow 写自己如何从街头卖艺、被拒绝、被接纳，到真正学会“跟人一起呼吸”。",
    contents: [
      "Satan and Adam 街头二重奏的真实故事",
      "种族、阶级、街头表演与蓝调伦理",
      "一个口琴手如何学会倾听",
    ],
    url: "https://www.upress.umn.edu/9780816631254/mister-satans-apprentice/",
  },
];

export const FEATURED_BOOKS = BOOKS.filter((book) => book.featured);
