export interface Player {
  id: string;
  name: string;
  nameZh?: string;
  years: string;
  era: "传统" | "Chicago" | "现代" | "爵士" | "当代";
  style: string;
  oneLiner: string;
  bio: string;
  signature: string;
  listen: Array<{ title: string; year?: string; note: string }>;
  keyTracks: string[];
  tags: string[];
  featured?: boolean;
}

export const PLAYERS: Player[] = [
  {
    id: "little-walter",
    name: "Little Walter",
    nameZh: "小沃尔特",
    years: "1930–1968",
    era: "Chicago",
    style: "Chicago Blues / 电声口琴",
    oneLiner: "把口琴插进放大器，从此它不再是一件“小乐器”。",
    bio:
      "Marion Walter Jacobs，生于路易斯安那，少年时在街头卖艺，1940 年代末到芝加哥，加入 Muddy Waters 的乐队。1952 年的器乐曲《Juke》登上 R&B 榜首，让他成为少数以口琴为主角的乐队领队。他的句法像萨克斯，音色却能撕裂空气；今天几乎所有电声蓝调口琴手都活在他的影子里。",
    signature: "手持子弹麦克风、手掌聚音、失真与 horn-like 的连句。",
    listen: [
      { title: "The Best of Little Walter", year: "1958", note: "先听《Juke》《Sad Hours》《Off the Wall》，注意他如何用短句和留白制造张力。" },
      { title: "Hate to See You Go", year: "1969", note: "后期录音，音色更粗粝，乐队互动更紧密。" },
    ],
    keyTracks: ["Juke", "My Babe", "Sad Hours"],
    tags: ["必听", "电声", "Chicago"],
    featured: true,
  },
  {
    id: "big-walter",
    name: "Big Walter Horton",
    nameZh: "大沃尔特·霍顿",
    years: "1918–1981",
    era: "Chicago",
    style: "Chicago Blues / 原声与电声",
    oneLiner: "如果蓝调口琴有“音色教科书”，封面就是他。",
    bio:
      "生于密西西比，成长于孟菲斯，后来成为芝加哥蓝调圈最受尊敬的口琴手之一。他既能吹出巨大、圆润的原声音色，也能在电声里保持松弛和呼吸感。很多同时代大师在需要“最漂亮的音色”时都会找他录音。",
    signature: "宽厚的音头、慢速而深的 vibrato、像人声一样的长音。",
    listen: [
      { title: "Big Walter Horton with Carey Bell", year: "1972", note: "两位大师对吹，重点听 Big Walter 的音色和句子落点。" },
      { title: "Fine Cuts", year: "1978", note: "晚年录音，松弛、温暖，适合反复听他的尾音。" },
    ],
    keyTracks: ["Easy", "Shakey's Blues", "Walter's Swing"],
    tags: ["音色", "必听", "Chicago"],
    featured: true,
  },
  {
    id: "sonny-boy-ii",
    name: "Sonny Boy Williamson II",
    nameZh: "桑尼·博伊·威廉姆森二世",
    years: "c.1912–1965",
    era: "传统",
    style: "Delta / Chicago Blues",
    oneLiner: "少吹一点，让每个音都像一句话。",
    bio:
      "本名 Aleck “Rice” Miller，是蓝调口琴史上最具个人魅力的名字之一。他在 King Biscuit Time 电台节目里成名，后来在 Chess 留下大量录音。与 Little Walter 的电声风暴相反，他的口琴常常是原声的、稀疏的、带笑意的，像一个讲故事的人在句尾故意停顿。",
    signature: "原声口琴、短小动机、大量留白、带着戏谑的语调。",
    listen: [
      { title: "Down and Out Blues", year: "1959", note: "先听《Eyesight to the Blind》《Don't Start Me to Talkin'》，感受他的“说话感”。" },
      { title: "The Real Folk Blues", year: "1966", note: "更完整的 Songster 面向，句子短却有极强的个性。" },
    ],
    keyTracks: ["Eyesight to the Blind", "Bring It on Home", "Help Me"],
    tags: ["必听", "原声", "乐句"],
    featured: true,
  },
  {
    id: "sonny-boy-i",
    name: "Sonny Boy Williamson I",
    nameZh: "桑尼·博伊·威廉姆森一世",
    years: "1914–1948",
    era: "传统",
    style: "Pre-war Chicago Blues",
    oneLiner: "战前芝加哥口琴的旋律感，从《Good Morning, School Girl》开始。",
    bio:
      "John Lee Curtis Williamson，是第一个以“Sonny Boy Williamson”之名走红的蓝调口琴手。他的录音把口琴从伴奏乐器推向主奏位置，旋律性强、音色清亮，影响了后来几乎所有人——包括那位借用了他的名字、却完全不介意混淆的 Rice Miller。",
    signature: "清亮音色、流畅的旋律线、早期芝加哥的跳跃律动。",
    listen: [
      { title: "The Original Sonny Boy Williamson, Vol. 1", year: "1990s 合集", note: "从 1937 年的《Good Morning, School Girl》开始听。" },
      { title: "Complete Recorded Works 1937–1947", note: "想认真研究战前口琴，可以按年份听这套。" },
    ],
    keyTracks: ["Good Morning, School Girl", "Sugar Mama Blues", "Early in the Morning"],
    tags: ["历史", "战前", "旋律"],
  },
  {
    id: "howlin-wolf",
    name: "Howlin' Wolf",
    nameZh: "嚎叫之狼",
    years: "1910–1976",
    era: "Chicago",
    style: "Chicago Blues / 原声与电声",
    oneLiner: "他的口琴不是伴奏，是他吼声的延长。",
    bio:
      "Chester Arthur Burnett，生于密西西比，身材巨大、嗓音更低。他的音乐把 Delta 的原始力量和芝加哥的电声编制撞在一起。口琴在他手里常常不是“独奏乐器”，而是和嗓音、吉他一起构成一种压迫性的律动。",
    signature: "粗粝的呼吸、像喘息一样的音头、与歌声咬合的节奏。",
    listen: [
      { title: "Moanin' in the Moonlight", year: "1959", note: "《Smokestack Lightnin'》《Moanin' at Midnight》，听口琴如何与嗓音互相推。" },
      { title: "Howlin' Wolf", year: "1962", note: "同名专辑，Chicago 电声编制的经典样本。" },
    ],
    keyTracks: ["Smokestack Lightnin'", "Moanin' at Midnight", "Spoonful"],
    tags: ["必听", "Chicago", "节奏"],
    featured: true,
  },
  {
    id: "junior-wells",
    name: "Junior Wells",
    nameZh: "朱尼尔·威尔斯",
    years: "1934–1998",
    era: "Chicago",
    style: "Chicago Blues / Soul Blues",
    oneLiner: "《Hoodoo Man Blues》是每个蓝调口琴手都该有的一张唱片。",
    bio:
      "生于孟菲斯，少年时在芝加哥与 Muddy Waters、Little Walter 同台。1965 年与 Buddy Guy 录制的《Hoodoo Man Blues》被许多人视为 Chicago 小型乐队录音的巅峰：亲密、松弛、现场感极强。他的口琴有很强的 vocal 质感，句子不炫技，却极有说服力。",
    signature: "vocal 化的音色、短促的问答、与吉他手 Buddy Guy 的默契。",
    listen: [
      { title: "Hoodoo Man Blues", year: "1965", note: "整张都值得听。先听《Snatch It Back and Hold It》《Hoodoo Man Blues》。" },
      { title: "Southside Blues Jam", year: "1970", note: "更松弛的 jam 氛围，适合感受他如何“留在拍子里”。" },
    ],
    keyTracks: ["Hoodoo Man Blues", "Messin' with the Kid", "Snatch It Back and Hold It"],
    tags: ["必听", "Chicago", "专辑"],
    featured: true,
  },
  {
    id: "james-cotton",
    name: "James Cotton",
    nameZh: "詹姆斯·科顿",
    years: "1935–2017",
    era: "Chicago",
    style: "Chicago Blues / 高能量",
    oneLiner: "从 Muddy Waters 的乐队到自己的大乐队，他让口琴像小号一样冲。",
    bio:
      "生于密西西比，少年时师从 Sonny Boy Williamson II，后来在 Muddy Waters 乐队里接替 Little Walter 的位置。他的演奏能量极大、音头锋利，擅长把口琴放进大编制里当铜管用。晚年仍持续演出和录音，是 Chicago 蓝调活的连接线。",
    signature: "锋利的音头、快速连句、强烈的舞台能量。",
    listen: [
      { title: "100% Cotton", year: "1979", note: "高能量 Chicago 的代表，听他的音头和乐队推进。" },
      { title: "Deep in the Blues", year: "1996", note: "获得格莱美，音色更成熟、更克制。" },
    ],
    keyTracks: ["Cotton Mouth Man", "The Creeper", "Superharp"],
    tags: ["Chicago", "现场", "能量"],
  },
  {
    id: "charlie-musselwhite",
    name: "Charlie Musselwhite",
    nameZh: "查理·马塞尔怀特",
    years: "b. 1944",
    era: "现代",
    style: "Blues / 多风格",
    oneLiner: "把 Mississippi 的呼吸带进旧金山，再带进格莱美。",
    bio:
      "生于密西西比，成长于孟菲斯，后来搬到芝加哥和加州。他是 1960 年代 blues revival 的关键人物之一，也是少数既尊重传统又不断跨界的口琴手。与 Ben Harper 合作的《Get Up!》拿下格莱美最佳蓝调专辑，证明蓝调口琴在当代仍然可以很“当下”。",
    signature: "温暖的音色、松弛的乐句、跨民谣/摇滚/世界音乐的适应力。",
    listen: [
      { title: "Stand Back!", year: "1967", note: "早期代表作，听传统 blues 如何被加州阳光照亮。" },
      { title: "Get Up!", year: "2013", note: "与 Ben Harper 合作，现代制作下的蓝调口琴。" },
    ],
    keyTracks: ["Christo Redemptor", "The Blues Overtook Me", "I'm Goin' Home"],
    tags: ["现代", "跨界", "音色"],
    featured: true,
  },
  {
    id: "paul-butterfield",
    name: "Paul Butterfield",
    nameZh: "保罗·巴特菲尔德",
    years: "1942–1987",
    era: "现代",
    style: "Blues Rock / Chicago Blues",
    oneLiner: "他把 Chicago 蓝调带到白人中产青年的耳朵里，也带进了摇滚。",
    bio:
      "芝加哥出身，1960 年代组建 Paul Butterfield Blues Band，成员包括 Mike Bloomfield 等。乐队把 Chicago 蓝调的电声能量与摇滚、爵士即兴结合，影响了无数后来者。Butterfield 的口琴有极强的攻击性和现场感，是 60 年代 blues revival 的象征之一。",
    signature: "直接的音头、摇滚化的能量、与电吉他互不让步。",
    listen: [
      { title: "The Paul Butterfield Blues Band", year: "1965", note: "同名首专，听 Chicago 蓝调如何被一支年轻乐队重新点燃。" },
      { title: "East-West", year: "1966", note: "标题曲的即兴段落，是 blues 与 jazz/rock 交汇的经典。" },
    ],
    keyTracks: ["Born in Chicago", "East-West", "Work Song"],
    tags: ["blues rock", "历史", "现场"],
  },
  {
    id: "kim-wilson",
    name: "Kim Wilson",
    nameZh: "金·威尔逊",
    years: "b. 1951",
    era: "现代",
    style: "Texas Jump Blues / Swing",
    oneLiner: "Fabulous Thunderbirds 的口琴手，把 jump blues 吹得像派对。",
    bio:
      "生于底特律，成长于加州，后来在奥斯汀成为 Fabulous Thunderbirds 的主唱与口琴手。他的风格扎根于 1950 年代的 jump blues、swing 和 Chicago，但更轻快、更适合跳舞。听他的八度、跳跃音型和与吉他手 Jimmie Vaughan 的互动，是理解“蓝调也可以很好玩”的好入口。",
    signature: "跳跃的八度、swing 律动、干净而有弹性的音色。",
    listen: [
      { title: "T-Bird Rhythm", year: "1982", note: "Fabulous Thunderbirds 时期的代表作，适合跟着跳舞。" },
      { title: "Tigerman", year: "1993", note: "个人专辑，风格更广，音色更成熟。" },
    ],
    keyTracks: ["Tuff Enuff", "Wrap It Up", "Why Get Up"],
    tags: ["Texas", "jump blues", "swing"],
  },
  {
    id: "william-clarke",
    name: "William Clarke",
    nameZh: "威廉·克拉克",
    years: "1951–1996",
    era: "现代",
    style: "West Coast Jump / Chicago",
    oneLiner: "西海岸 jump blues 的口琴代表，音色厚、swing 足。",
    bio:
      "加州口琴手，深受 Little Walter、George “Harmonica” Smith 和 jump blues 影响。他的乐队编制常带管乐，口琴像萨克斯一样在编曲里穿梭。虽然去世很早，但他留下的录音是西海岸蓝调口琴的重要教材。",
    signature: "厚重的电声音色、大编制里的 horn-like 句子、强烈的 swing。",
    listen: [
      { title: "Blowin' Like Hell", year: "1990", note: "听他在 jump blues 编曲里如何“让位”又“抢镜”。" },
      { title: "The Hard Way", year: "1996", note: "晚年录音，音色和句子都更沉稳。" },
    ],
    keyTracks: ["Blowin' Like Hell", "Pawnshop Bound", "The Hard Way"],
    tags: ["West Coast", "jump blues", "编曲"],
  },
  {
    id: "sugar-blue",
    name: "Sugar Blue",
    nameZh: "糖蓝",
    years: "b. 1949",
    era: "现代",
    style: "Modern Chicago / Funk / Rock",
    oneLiner: "在 Rolling Stones 的《Miss You》里，那段口琴就是他吹的。",
    bio:
      "生于纽约哈林区，后来成为芝加哥蓝调圈的一员。他的技术极其华丽，能在口琴上做出接近萨克斯的快速跑动和音色变化。1978 年为 Rolling Stones 的《Miss You》录制口琴，让全世界都听到了他的声音。",
    signature: "高速跑动、华丽的音色、funk/rock 的节奏感。",
    listen: [
      { title: "Blue Blazes", year: "1994", note: "他个人风格最完整的一张，技术展示与蓝调味并重。" },
      { title: "In Your Eyes", year: "2006", note: "更现代的编曲，听口琴如何放进 funk/soul 语境。" },
    ],
    keyTracks: ["Miss You (Rolling Stones)", "Blue Blazes", "One More Mile"],
    tags: ["现代", "技术", "funk"],
  },
  {
    id: "howard-levy",
    name: "Howard Levy",
    nameZh: "霍华德·莱维",
    years: "b. 1951",
    era: "爵士",
    style: "Jazz / Overbend / 多风格",
    oneLiner: "让十孔口琴变成完全半音乐器的男人。",
    bio:
      "美国口琴家、钢琴家、作曲家，Béla Fleck & the Flecktones 创始成员，两次格莱美得主。他系统化发展了十孔口琴的超吹/超吸技术（overbending），让这件原本受调性限制的乐器可以演奏完整的半音阶，从而进入爵士、古典和世界音乐。",
    signature: "超吹/超吸、完整的半音能力、爵士和声与复杂节奏。",
    listen: [
      { title: "Flight of the Cosmic Hippo", year: "1991", note: "Flecktones 时期，听口琴如何在 fusion 编制里自由飞行。" },
      { title: "Live Art", year: "1996", note: "现场双张，即兴能量和技术展示都很完整。" },
    ],
    keyTracks: ["Flight of the Cosmic Hippo", "Sinister Minister", "The Message"],
    tags: ["爵士", "超吹", "必听"],
    featured: true,
  },
  {
    id: "carlos-del-junco",
    name: "Carlos del Junco",
    nameZh: "卡洛斯·德尔·洪科",
    years: "b. 1958",
    era: "现代",
    style: "Blues / Jazz / Overblow",
    oneLiner: "古巴出生的加拿大口琴家，把 blues 和 jazz 吹成一种颜色。",
    bio:
      "生于哈瓦那，幼年移居加拿大。他原本学雕塑，后来把口琴当成主要媒介。他是 Howard Levy 超吹体系的重要实践者，也是少数能在十孔口琴上自由演奏爵士和弦与半音的蓝调手。他的音乐常被形容为“有雕塑感”——音色、线条和空间都被仔细摆放。",
    signature: "半音化的十孔口琴、爵士和声、温暖而克制的音色。",
    listen: [
      { title: "Big Boy", year: "1999", note: "把他的 blues 根基和爵士野心放在一起听。" },
      { title: "Blues Mongrel", year: "2005", note: "风格跨度很大，适合听他怎么处理不同编制。" },
    ],
    keyTracks: ["Big Boy", "Blues Mongrel", "Up and at 'Em"],
    tags: ["爵士", "超吹", "现代"],
  },
  {
    id: "jason-ricci",
    name: "Jason Ricci",
    nameZh: "杰森·里奇",
    years: "b. 1974",
    era: "当代",
    style: "Modern Blues / Rock / Jam",
    oneLiner: "当代蓝调口琴最不知疲倦的教师和实验者之一。",
    bio:
      "美国口琴手，以惊人的技术、强烈的舞台能量和每周更新的免费教学闻名。他的演奏融合 Chicago blues、rock、funk、jazz 和 punk 的态度，句子常常又长又野。对自学者来说，他的“Free Friday”系列几乎是一座免费大学。",
    signature: "高速连句、夸张的音色变化、把口琴当摇滚吉他使。",
    listen: [
      { title: "Done with the Devil", year: "2009", note: "他个人风格最完整的录音之一，技术服务于情绪。" },
      { title: "Approved by the Devil", year: "2011", note: "更重型、更实验，适合听他的音色和乐队互动。" },
    ],
    keyTracks: ["Done with the Devil", "Broken Man", "Snowflakes"],
    tags: ["当代", "技术", "教学"],
    featured: true,
  },
  {
    id: "dennis-gruenling",
    name: "Dennis Gruenling",
    nameZh: "丹尼斯·格伦林",
    years: "当代",
    era: "当代",
    style: "Jump Blues / Swing / 舌堵",
    oneLiner: "让口琴重新跳起 1940 年代的 swing。",
    bio:
      "美国口琴手、教师、电台 DJ，2019 年 Blues Music Award 最佳口琴手。他的演奏扎根于 jump blues、swing 和 Chicago，尤其擅长舌堵、八度、和弦与复古音色。他也是 Blue Moon 口琴和复古麦克风的深度玩家。",
    signature: "舌堵八度、swing 律动、复古电声音色。",
    listen: [
      { title: "I Just Keep Lovin' Him: A Tribute to Little Walter", year: "2008", note: "向 Little Walter 致敬，但吹出了自己的 swing 味道。" },
      { title: "Ready or Not", year: "2016", note: "更现代的录音，编曲和音色都很讲究。" },
    ],
    keyTracks: ["Ready or Not", "I Just Keep Lovin' Him", "Rockin' All Day"],
    tags: ["swing", "舌堵", "当代"],
  },
  {
    id: "filip-jers",
    name: "Filip Jers",
    nameZh: "菲利普·耶尔斯",
    years: "b. 1986",
    era: "爵士",
    style: "Jazz / Swedish Folk / Blues",
    oneLiner: "斯德哥尔摩的爵士口琴家，把 Toots 的传统带到新一代。",
    bio:
      "瑞典口琴家、作曲家，斯德哥尔摩皇家音乐学院首位口琴专业学生。2005 年世界口琴节爵士与蓝调双料冠军，2023 年获 SPAH 年度口琴手。他的演奏兼具爵士的复杂和北欧民谣的清澈，是当代口琴“去边界化”的代表人物。",
    signature: "清澈音色、爵士和声、民谣般的呼吸与留白。",
    listen: [
      { title: "In the Spirit of Toots", year: "2023", note: "向 Toots Thielemans 致敬，听口琴如何唱爵士标准曲。" },
      { title: "Plays Swedish Folk", year: "2015", note: "瑞典格莱美获奖专辑，口琴与民谣的美丽相遇。" },
    ],
    keyTracks: ["In the Spirit of Toots", "Someday My Prince Will Come", "Swedish Folk"],
    tags: ["爵士", "当代", "民谣"],
    featured: true,
  },
  {
    id: "toots",
    name: "Toots Thielemans",
    nameZh: "托茨·蒂勒曼斯",
    years: "1922–2016",
    era: "爵士",
    style: "Jazz / Chromatic Harmonica",
    oneLiner: "半音阶口琴的爵士代名词，也是《Bluesette》的作者。",
    bio:
      "比利时爵士口琴家、吉他手、 whistler。他让半音阶口琴在爵士乐里获得严肃乐器地位，与 Ella Fitzgerald、Quincy Jones、Stevie Wonder 等无数人合作。他的音色温暖、句子歌唱性极强，仿佛口琴本来就应该这样呼吸。",
    signature: "半音阶口琴、温暖音色、歌唱性旋律、口哨般的音头。",
    listen: [
      { title: "Man Bites Harmonica!", year: "1958", note: "经典爵士编制，听口琴如何与钢琴、贝斯对话。" },
      { title: "Only Trust Your Heart", year: "1988", note: "晚年录音，音色和 phrasing 都极成熟。" },
    ],
    keyTracks: ["Bluesette", "Midnight Cowboy", "Ne Me Quitte Pas"],
    tags: ["爵士", "半音阶", "必听"],
    featured: true,
  },
  {
    id: "stevie-wonder",
    name: "Stevie Wonder",
    nameZh: "史蒂维·旺德",
    years: "b. 1950",
    era: "爵士",
    style: "Soul / Pop / Chromatic",
    oneLiner: "他让半音阶口琴在流行音乐里拥有了一种“天使般”的声音。",
    bio:
      "美国歌手、作曲家、多乐器演奏家。13 岁以《Fingertips Pt. 2》成名，后来成为流行音乐史上最重要的艺术家之一。口琴在他手里不是 blues harp，而是一种歌唱性的、明亮的、几乎像合成器一样的声音。听他的口琴，可以学到“音色即旋律”。",
    signature: "半音阶口琴、明亮的音色、旋律化的短句。",
    listen: [
      { title: "Innervisions", year: "1973", note: "听《Too High》等曲目里的口琴如何融入整体编曲。" },
      { title: "Songs in the Key of Life", year: "1976", note: "更宏大的编制，口琴是色彩而不是炫技。" },
    ],
    keyTracks: ["Fingertips Pt. 2", "Isn't She Lovely", "Too High"],
    tags: ["soul", "半音阶", "流行"],
  },
  {
    id: "lee-oskar",
    name: "Lee Oskar",
    nameZh: "李·奥斯卡",
    years: "b. 1948",
    era: "现代",
    style: "Funk / Rock / Blues",
    oneLiner: "War 的口琴手，也是 Lee Oskar 口琴品牌的创始人。",
    bio:
      "丹麦出生，后移居美国，成为 funk/rock 乐队 War 的创始成员。他的口琴音色明亮、节奏感强，擅长在 funk 编制里吹出像合成器或小号一样的线条。后来创立 Lee Oskar 口琴品牌，推动替代调音（如 Melody Maker）在流行音乐中的使用。",
    signature: "明亮音色、funk 节奏、替代调音与旋律化演奏。",
    listen: [
      { title: "The World Is a Ghetto", year: "1972", note: "War 的代表作，听口琴如何成为 funk 乐队的一部分。" },
      { title: "Why Can't We Be Friends?", year: "1975", note: "更流行、更松弛，适合听他的音色和短句。" },
    ],
    keyTracks: ["Low Rider", "Spill the Wine", "Why Can't We Be Friends?"],
    tags: ["funk", "rock", "器材"],
  },
  {
    id: "indiara-sfair",
    name: "Indiara Sfair",
    nameZh: "因迪亚拉·斯法尔",
    years: "当代",
    era: "当代",
    style: "Modern Blues / Brazilian",
    oneLiner: "她让一个长音拥有完整的叙事。",
    bio:
      "巴西口琴家、作曲家，来自库里提巴。她没有走传统的电声 Chicago 路线，而是以清音、极强的情感控制和巴西音乐的旋律感，建立了自己的声音。她的《Improvisation in Cm》在 YouTube 上获得数千万播放，让很多不听蓝调的人第一次被口琴打动。",
    signature: "清音、歌唱性长音、强烈的动态与空间感。",
    listen: [
      { title: "Improvisation in Cm", year: "2017", note: "YouTube 现场，先听她如何用一个音制造情绪。" },
      { title: "Simbiose", note: "与 Tiago Juk 的合作，听口琴与吉他的呼吸。" },
    ],
    keyTracks: ["Improvisation in Cm", "Simbiose", "House of the Rising Sun"],
    tags: ["当代", "音色", "旋律"],
    featured: true,
  },
];

export const FEATURED_PLAYERS = PLAYERS.filter((player) => player.featured);
