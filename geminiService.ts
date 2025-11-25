import { SearchResultBook } from "./types";

// 增强的书籍数据库 - 使用稳定的图片源
const enhancedBookDatabase = [
  {
    title: '红楼梦',
    author: '曹雪芹',
    intro: '中国古典四大名著之首，清代作家曹雪芹创作的章回体长篇小说，以贾、史、王、薛四大家族的兴衰为背景。',
    category: '小说',
    coverSeed: '红楼梦古典文学'
  },
  {
    title: '三体',
    author: '刘慈欣',
    intro: '地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
    category: '小说',
    coverSeed: '三体科幻小说'
  },
  {
    title: '活着',
    author: '余华',
    intro: '讲述了在大时代背景下，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去。',
    category: '小说',
    coverSeed: '活着余华文学'
  },
  {
    title: '百年孤独',
    author: '加西亚·马尔克斯',
    intro: '魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事。',
    category: '小说',
    coverSeed: '百年孤独马尔克斯'
  },
  {
    title: '人类简史',
    author: '尤瓦尔·赫拉利',
    intro: '从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史。',
    category: '社科',
    coverSeed: '人类简史历史社科'
  },
  {
    title: '思考，快与慢',
    author: '丹尼尔·卡尼曼',
    intro: '社会思想的一部里程碑式著作，关于我们何时可以相信自己的直觉。',
    category: '心理',
    coverSeed: '思考快与慢心理学'
  },
  {
    title: '经济学原理',
    author: '曼昆',
    intro: '世界上最流行的经济学教材，介绍经济学的基本原理和概念。',
    category: '经济',
    coverSeed: '经济学原理曼昆'
  },
  {
    title: '时间简史',
    author: '史蒂芬·霍金',
    intro: '探索时间和空间核心秘密的故事，是关于宇宙本性的最前沿知识。',
    category: '科普',
    coverSeed: '时间简史霍金宇宙'
  },
  {
    title: '小王子',
    author: '安托万·德·圣-埃克苏佩里',
    intro: '这部童话充满着诗意的忧郁和淡淡的哀愁，感动了全世界无数读者。',
    category: '小说',
    coverSeed: '小王子童话文学'
  },
  {
    title: '围城',
    author: '钱钟书',
    intro: '中国现代文学史上一部风格独特的讽刺小说，被誉为"新儒林外史"。',
    category: '小说',
    coverSeed: '围城钱钟书讽刺'
  },
  {
    title: '正见',
    author: '宗萨蒋扬钦哲仁波切',
    intro: '阐述佛教的基本教义和正见，以通俗易懂的语言讲解佛学。',
    category: '哲学',
    coverSeed: '正见佛学哲学'
  },
  {
    title: '平凡的世界',
    author: '路遥',
    intro: '一部现实主义小说，浓缩了中国西北农村的历史变迁过程。',
    category: '小说',
    coverSeed: '平凡的世界路遥'
  },
  {
    title: '追风筝的人',
    author: '卡勒德·胡赛尼',
    intro: '讲述了一个关于友谊、背叛和救赎的感人故事。',
    category: '小说',
    coverSeed: '追风筝的人胡赛尼'
  },
  {
    title: '1984',
    author: '乔治·奥威尔',
    intro: '反乌托邦小说的经典之作，描绘了一个极权主义的恐怖世界。',
    category: '小说',
    coverSeed: '1984奥威尔反乌托邦'
  },
  {
    title: '原则',
    author: '瑞·达利欧',
    intro: '华尔街投资大神的人生经验之作，阐述生活和工作的原则。',
    category: '经济',
    coverSeed: '原则达利欧经济'
  },
  {
    title: '霍乱时期的爱情',
    author: '加西亚·马尔克斯',
    intro: '一场持续了半个多世纪的爱情故事，展现了爱情的所有可能性。',
    category: '小说',
    coverSeed: '霍乱时期的爱情马尔克斯'
  },
  {
    title: '局外人',
    author: '阿尔贝·加缪',
    intro: '存在主义文学的代表作品，描绘了一个对生活冷漠的"局外人"。',
    category: '小说',
    coverSeed: '局外人加缪存在主义'
  },
  {
    title: '傲慢与偏见',
    author: '简·奥斯汀',
    intro: '一部描写爱情与婚姻的经典小说，也是女性文学的典范。',
    category: '小说',
    coverSeed: '傲慢与偏见奥斯汀'
  },
  {
    title: '天龙八部',
    author: '金庸',
    intro: '金庸武侠小说的代表作之一，以宋哲宗时代为背景，涉及武林恩怨、民族矛盾。',
    category: '小说',
    coverSeed: '天龙八部金庸武侠'
  },
  {
    title: '沉默的大多数',
    author: '王小波',
    intro: '王小波的杂文集，以其独特的幽默和智慧探讨社会、文化和人生。',
    category: '社科',
    coverSeed: '沉默的大多数王小波'
  }
];

export const searchBooksViaGemini = async (query: string): Promise<SearchResultBook[]> => {
  console.log("搜索书籍:", query);
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    return getRandomBooks(4);
  }
  
  // 精确匹配搜索
  const exactMatches = enhancedBookDatabase.filter(book => 
    book.title.toLowerCase() === searchTerm
  );
  
  if (exactMatches.length > 0) {
    return convertToSearchResult(exactMatches);
  }
  
  // 包含匹配
  const containsMatches = enhancedBookDatabase.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm);
    const authorMatch = book.author.toLowerCase().includes(searchTerm);
    return titleMatch || authorMatch;
  });
  
  if (containsMatches.length > 0) {
    return convertToSearchResult(containsMatches.slice(0, 6));
  }
  
  // 相关推荐
  return getRelatedRecommendations(searchTerm);
};

// 转换为搜索结果格式
function convertToSearchResult(books: any[]): SearchResultBook[] {
  return books.map(book => ({
    title: book.title,
    author: book.author,
    coverUrl: `https://picsum.photos/seed/${encodeURIComponent(book.coverSeed)}/300/400`,
    intro: book.intro,
    category: book.category
  }));
}

// 获取随机书籍
function getRandomBooks(count: number): SearchResultBook[] {
  const shuffled = [...enhancedBookDatabase].sort(() => 0.5 - Math.random());
  return convertToSearchResult(shuffled.slice(0, count));
}

// 获取相关推荐
function getRelatedRecommendations(searchTerm: string): SearchResultBook[] {
  const lowerTerm = searchTerm.toLowerCase();
  
  if (lowerTerm.includes('小说') || lowerTerm.includes('文学')) {
    const novels = enhancedBookDatabase.filter(book => book.category === '小说');
    return convertToSearchResult(novels.slice(0, 4));
  } else if (lowerTerm.includes('经济')) {
    const economics = enhancedBookDatabase.filter(book => book.category === '经济');
    return convertToSearchResult(economics.slice(0, 4));
  } else if (lowerTerm.includes('心理')) {
    const psychology = enhancedBookDatabase.filter(book => book.category === '心理');
    return convertToSearchResult(psychology.slice(0, 4));
  } else if (lowerTerm.includes('金庸') || lowerTerm.includes('武侠')) {
    const wuxia = enhancedBookDatabase.filter(book => book.author.includes('金庸'));
    return convertToSearchResult(wuxia.slice(0, 4));
  } else {
    return convertToSearchResult(enhancedBookDatabase.slice(0, 3));
  }
}