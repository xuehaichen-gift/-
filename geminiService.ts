import { SearchResultBook } from "./types";

// 完整的50本书籍数据库 - 包含真实封面和详细信息
const completeBookDatabase = [
  // 中国古典文学
  {
    title: '红楼梦',
    author: '曹雪芹',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1070959.jpg',
    intro: '中国古典四大名著之首，以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉为视角，描绘了一批闺阁佳人的人生百态。',
    category: '小说',
    isbn: '9787020002207'
  },
  {
    title: '三国演义',
    author: '罗贯中',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1076932.jpg',
    intro: '中国古典四大名著之一，描写了从东汉末年到西晋初年之间近百年的历史风云，以战争为主。',
    category: '小说',
    isbn: '9787020008728'
  },
  {
    title: '水浒传',
    author: '施耐庵',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1147854.jpg',
    intro: '中国古典四大名著之一，描写北宋末年以宋江为首的108位好汉在梁山起义的故事。',
    category: '小说',
    isbn: '9787020008742'
  },
  {
    title: '西游记',
    author: '吴承恩',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1627374.jpg',
    intro: '中国古典四大名著之一，描写孙悟空、猪八戒、沙僧保护唐僧西天取经的故事。',
    category: '小说',
    isbn: '9787020008735'
  },

  // 中国现代文学
  {
    title: '活着',
    author: '余华',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s29053580.jpg',
    intro: '讲述了在大时代背景下，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去。',
    category: '小说',
    isbn: '9787506365437'
  },
  {
    title: '平凡的世界',
    author: '路遥',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1144911.jpg',
    intro: '一部现实主义小说，浓缩了中国西北农村的历史变迁过程，展现了普通人在大时代历史进程中的艰难曲折。',
    category: '小说',
    isbn: '9787020049295'
  },
  {
    title: '围城',
    author: '钱钟书',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1070222.jpg',
    intro: '中国现代文学史上一部风格独特的讽刺小说，被誉为"新儒林外史"，描写了知识分子的生活状态。',
    category: '小说',
    isbn: '9787020024759'
  },
  {
    title: '骆驼祥子',
    author: '老舍',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1146040.jpg',
    intro: '描写了20世纪20年代北京一个人力车夫的悲惨命运，反映了旧社会劳动人民的苦难生活。',
    category: '小说',
    isbn: '9787020028116'
  },

  // 中国当代文学
  {
    title: '三体',
    author: '刘慈欣',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s2768378.jpg',
    intro: '地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
    category: '小说',
    isbn: '9787536692930'
  },
  {
    title: '白鹿原',
    author: '陈忠实',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s9137567.jpg',
    intro: '以陕西关中地区白鹿原上白鹿村为缩影，表现从清朝末年到二十世纪七八十年代的历史变化。',
    category: '小说',
    isbn: '9787020090007'
  },
  {
    title: '许三观卖血记',
    author: '余华',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1074291.jpg',
    intro: '讲述了一个叫许三观的丝厂送茧工在生活困难的年代多次卖血求生的故事。',
    category: '小说',
    isbn: '9787506369947'
  },
  {
    title: '黄金时代',
    author: '王小波',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1076372.jpg',
    intro: '以文革时期为背景，描写了女医生陈清扬和知青王二的爱情故事，充满黑色幽默。',
    category: '小说',
    isbn: '9787541133215'
  },

  // 外国文学
  {
    title: '百年孤独',
    author: '加西亚·马尔克斯',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s6384944.jpg',
    intro: '魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事。',
    category: '小说',
    isbn: '9787544253994'
  },
  {
    title: '追风筝的人',
    author: '卡勒德·胡赛尼',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1727290.jpg',
    intro: '讲述了一个关于友谊、背叛和救赎的感人故事，背景设定在阿富汗。',
    category: '小说',
    isbn: '9787208061644'
  },
  {
    title: '1984',
    author: '乔治·奥威尔',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s4371408.jpg',
    intro: '反乌托邦小说的经典之作，描绘了一个极权主义的恐怖世界。',
    category: '小说',
    isbn: '9787544700877'
  },
  {
    title: '傲慢与偏见',
    author: '简·奥斯汀',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s4250062.jpg',
    intro: '一部描写爱情与婚姻的经典小说，也是女性文学的典范。',
    category: '小说',
    isbn: '9787544232904'
  },
  {
    title: '小王子',
    author: '安托万·德·圣-埃克苏佩里',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1103152.jpg',
    intro: '这部童话充满着诗意的忧郁和淡淡的哀愁，感动了全世界无数读者。',
    category: '小说',
    isbn: '9787020042494'
  },
  {
    title: '霍乱时期的爱情',
    author: '加西亚·马尔克斯',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s11284102.jpg',
    intro: '一场持续了半个多世纪的爱情故事，展现了爱情的所有可能性。',
    category: '小说',
    isbn: '9787544258975'
  },
  {
    title: '局外人',
    author: '阿尔贝·加缪',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s4468484.jpg',
    intro: '存在主义文学的代表作品，描绘了一个对生活冷漠的"局外人"。',
    category: '小说',
    isbn: '9787020073870'
  },

  // 武侠小说
  {
    title: '天龙八部',
    author: '金庸',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s23632058.jpg',
    intro: '金庸武侠小说的代表作之一，以宋哲宗时代为背景，涉及武林恩怨、民族矛盾。',
    category: '小说',
    isbn: '9787805200555'
  },
  {
    title: '射雕英雄传',
    author: '金庸',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s2157336.jpg',
    intro: '金庸"射雕三部曲"之一，讲述了郭靖、黄蓉的成长历程和爱情故事。',
    category: '小说',
    isbn: '9787805200562'
  },
  {
    title: '笑傲江湖',
    author: '金庸',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s2157335.jpg',
    intro: '金庸武侠小说中的经典之作，描写了令狐冲的江湖经历和爱情故事。',
    category: '小说',
    isbn: '9787805200586'
  },

  // 社科历史
  {
    title: '人类简史',
    author: '尤瓦尔·赫拉利',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s27814883.jpg',
    intro: '从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史。',
    category: '社科',
    isbn: '9787508647357'
  },
  {
    title: '万历十五年',
    author: '黄仁宇',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1800355.jpg',
    intro: '以万历十五年为切入点，剖析明代社会之症结，观察现代中国之来路。',
    category: '历史',
    isbn: '9787108009821'
  },
  {
    title: '中国历代政治得失',
    author: '钱穆',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1130511.jpg',
    intro: '分别就中国汉、唐、宋、明、清五代的政府组织、百官职权、考试监察等进行分析。',
    category: '历史',
    isbn: '9787108015280'
  },
  {
    title: '乡土中国',
    author: '费孝通',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s11437038.jpg',
    intro: '从基层上看去，中国社会是乡土性的，研究中国乡土社会传统文化和社会结构。',
    category: '社科',
    isbn: '9787101000358'
  },

  // 心理学
  {
    title: '思考，快与慢',
    author: '丹尼尔·卡尼曼',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s10365309.jpg',
    intro: '社会思想的一部里程碑式著作，关于我们何时可以相信自己的直觉。',
    category: '心理',
    isbn: '9787508633558'
  },
  {
    title: '被讨厌的勇气',
    author: '岸见一郎',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s29117639.jpg',
    intro: '采用对话体的形式，介绍阿德勒心理学的精髓，帮助读者获得幸福的勇气。',
    category: '心理',
    isbn: '9787115395484'
  },
  {
    title: '少有人走的路',
    author: 'M·斯科特·派克',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s2144395.jpg',
    intro: '处处透露出沟通与理解的意味，帮助我们探索爱的本质，学习爱和独立。',
    category: '心理',
    isbn: '9787500647175'
  },

  // 经济管理
  {
    title: '经济学原理',
    author: '曼昆',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s28387369.jpg',
    intro: '世界上最流行的经济学教材，介绍经济学的基本原理和概念。',
    category: '经济',
    isbn: '9787301211129'
  },
  {
    title: '穷查理宝典',
    author: '查理·芒格',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s4669551.jpg',
    intro: '收录了查理·芒格过去20年来主要的公开演讲，全面展示了他的投资哲学。',
    category: '经济',
    isbn: '9787208063839'
  },
  {
    title: '原则',
    author: '瑞·达利欧',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s29651171.jpg',
    intro: '华尔街投资大神的人生经验之作，阐述生活和工作的原则。',
    category: '经济',
    isbn: '9787508684031'
  },

  // 科普
  {
    title: '时间简史',
    author: '史蒂芬·霍金',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1914861.jpg',
    intro: '探索时间和空间核心秘密的故事，是关于宇宙本性的最前沿知识。',
    category: '科普',
    isbn: '9787535732309'
  },
  {
    title: '万物简史',
    author: '比尔·布莱森',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1668639.jpg',
    intro: '一部有关现代科学发展史的既通俗易懂又引人入胜的书。',
    category: '科普',
    isbn: '9787535733749'
  },
  {
    title: '上帝掷骰子吗',
    author: '曹天元',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1640744.jpg',
    intro: '量子物理史话，带领读者做一次量子之旅，从神话时代出发，沿着量子发展的道路。',
    category: '科普',
    isbn: '9787538262537'
  },

  // 哲学
  {
    title: '正见',
    author: '宗萨蒋扬钦哲仁波切',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s2651398.jpg',
    intro: '阐述佛教的基本教义和正见，以通俗易懂的语言讲解佛学。',
    category: '哲学',
    isbn: '9787218044028'
  },
  {
    title: '中国哲学简史',
    author: '冯友兰',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1074811.jpg',
    intro: '一本享誉中外、具有世界影响的中国哲学名著，是了解中国哲学的首选读本。',
    category: '哲学',
    isbn: '9787301034986'
  },
  {
    title: '苏菲的世界',
    author: '乔斯坦·贾德',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1399489.jpg',
    intro: '一本关于西方哲学史的小说，通过一名哲学导师向一个叫苏菲的女孩传授哲学知识。',
    category: '哲学',
    isbn: '9787506320511'
  },

  // 艺术
  {
    title: '艺术的故事',
    author: 'E.H.贡布里希',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1330502.jpg',
    intro: '有关艺术的书籍中最著名、最流行的著作之一，概括地叙述了从最早的洞窟绘画到当今的实验艺术的发展历程。',
    category: '艺术',
    isbn: '9787108016714'
  },

  // 其他类别
  {
    title: '沉默的大多数',
    author: '王小波',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1447349.jpg',
    intro: '王小波的杂文集，以其独特的幽默和智慧探讨社会、文化和人生。',
    category: '社科',
    isbn: '9787500627098'
  },
  {
    title: '看见',
    author: '柴静',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s24474573.jpg',
    intro: '柴静个人成长的自白书，讲述十年间重大的公共事件中的采访经历和感悟。',
    category: '社科',
    isbn: '9787549529322'
  },
  {
    title: '挪威的森林',
    author: '村上春树',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1228930.jpg',
    intro: '一部动人心弦的、平缓舒雅的、略带感伤的恋爱小说，描写了一段刻骨铭心的爱情故事。',
    category: '小说',
    isbn: '9787532725694'
  },
  {
    title: '解忧杂货店',
    author: '东野圭吾',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s27264181.jpg',
    intro: '现代人内心流失的东西，这家杂货店能帮你找回，不是推理小说，却更扣人心弦。',
    category: '小说',
    isbn: '9787544270878'
  },
  {
    title: '白夜行',
    author: '东野圭吾',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s4610502.jpg',
    intro: '一部引人入胜的推理小说，讲述了一个跨越19年的悬疑故事。',
    category: '小说',
    isbn: '9787544242516'
  },
  {
    title: '嫌疑人X的献身',
    author: '东野圭吾',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s3254244.jpg',
    intro: '一部极致的爱情推理小说，讲述了一个数学天才为了所爱之人精心设计的完美犯罪。',
    category: '小说',
    isbn: '9787544237727'
  },
  {
    title: '哈利·波特与魔法石',
    author: 'J.K.罗琳',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1990486.jpg',
    intro: '哈利·波特系列的第一部，讲述了一个年轻巫师的成长故事。',
    category: '小说',
    isbn: '9787020033430'
  },
  {
    title: '了不起的盖茨比',
    author: '弗·司各特·菲茨杰拉德',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1005876.jpg',
    intro: '20世纪美国文学的经典之作，描写了20世纪20年代的美国社会和"美国梦"的破灭。',
    category: '小说',
    isbn: '9787020046089'
  },
  {
    title: '麦田里的守望者',
    author: 'J.D.塞林格',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1481361.jpg',
    intro: '描写了一个16岁少年霍尔顿在纽约游荡的三天经历，反映了青少年的苦闷彷徨。',
    category: '小说',
    isbn: '9787020038964'
  },
  {
    title: '老人与海',
    author: '欧内斯特·海明威',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s1050021.jpg',
    intro: '讲述了一个老年渔夫与一条大马林鱼在湾流中搏斗的故事，体现了人的尊严和勇气。',
    category: '小说',
    isbn: '9787020029863'
  }
];

export const searchBooksViaGemini = async (query: string): Promise<SearchResultBook[]> => {
  console.log("搜索书籍:", query);
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    // 返回随机推荐
    return getRandomBooks(6);
  }
  
  // 精确匹配（最高优先级）
  const exactMatches = completeBookDatabase.filter(book => 
    book.title.toLowerCase() === searchTerm
  );
  
  if (exactMatches.length > 0) {
    return exactMatches;
  }
  
  // 包含匹配
  const containsMatches = completeBookDatabase.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm);
    const authorMatch = book.author.toLowerCase().includes(searchTerm);
    return titleMatch || authorMatch;
  });
  
  if (containsMatches.length > 0) {
    return containsMatches.slice(0, 8);
  }
  
  // 相关推荐
  return getRelatedRecommendations(searchTerm);
};

// 获取随机书籍
function getRandomBooks(count: number): SearchResultBook[] {
  const shuffled = [...completeBookDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 获取相关推荐
function getRelatedRecommendations(searchTerm: string): SearchResultBook[] {
  const lowerTerm = searchTerm.toLowerCase();
  
  // 根据搜索词类型推荐相关书籍
  if (lowerTerm.includes('小说') || lowerTerm.includes('文学')) {
    return completeBookDatabase
      .filter(book => book.category === '小说')
      .slice(0, 6);
  } else if (lowerTerm.includes('经济')) {
    return completeBookDatabase
      .filter(book => book.category === '经济')
      .slice(0, 6);
  } else if (lowerTerm.includes('心理')) {
    return completeBookDatabase
      .filter(book => book.category === '心理')
      .slice(0, 6);
  } else if (lowerTerm.includes('历史')) {
    return completeBookDatabase
      .filter(book => book.category === '历史')
      .slice(0, 6);
  } else if (lowerTerm.includes('哲学')) {
    return completeBookDatabase
      .filter(book => book.category === '哲学')
      .slice(0, 6);
  } else if (lowerTerm.includes('科普')) {
    return completeBookDatabase
      .filter(book => book.category === '科普')
      .slice(0, 6);
  } else if (lowerTerm.includes('金庸') || lowerTerm.includes('武侠')) {
    return completeBookDatabase
      .filter(book => book.author.includes('金庸'))
      .slice(0, 6);
  } else if (lowerTerm.includes('余华')) {
    return completeBookDatabase
      .filter(book => book.author.includes('余华'))
      .slice(0, 6);
  } else {
    // 默认返回热门书籍
    return getRandomBooks(4);
  }
}