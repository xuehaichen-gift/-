import { SearchResultBook } from "./types";

// 增强的书籍数据库 - 包含真实书籍信息
const enhancedBookDatabase = [
  {
    title: '红楼梦',
    author: '曹雪芹',
    intro: '中国古典四大名著之首，清代作家曹雪芹创作的章回体长篇小说，以贾、史、王、薛四大家族的兴衰为背景。',
    category: '小说',
    coverUrl: 'https://img1.doubanio.com/view/subject/s/public/s1070959.jpg',
    isbn: '9787020002207'
  },
  {
    title: '三体',
    author: '刘慈欣',
    intro: '地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
    category: '小说',
    coverUrl: 'https://img1.doubanio.com/view/subject/s/public/s2768378.jpg',
    isbn: '9787536692930'
  },
  {
    title: '活着',
    author: '余华',
    intro: '讲述了在大时代背景下，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去。',
    category: '小说',
    coverUrl: 'https://img2.doubanio.com/view/subject/s/public/s29053580.jpg',
    isbn: '9787506365437'
  },
  {
    title: '百年孤独',
    author: '加西亚·马尔克斯',
    intro: '魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事。',
    category: '小说',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s6384944.jpg',
    isbn: '9787544253994'
  },
  {
    title: '人类简史',
    author: '尤瓦尔·赫拉利',
    intro: '从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史。',
    category: '社科',
    coverUrl: 'https://img1.doubanio.com/view/subject/s/public/s27814883.jpg',
    isbn: '9787508647357'
  },
  {
    title: '思考，快与慢',
    author: '丹尼尔·卡尼曼',
    intro: '社会思想的一部里程碑式著作，关于我们何时可以相信自己的直觉。',
    category: '心理',
    coverUrl: 'https://img3.doubanio.com/view/subject/s/public/s10365309.jpg',
    isbn: '9787508633558'
  },
  {
    title: '经济学原理',
    author: '曼昆',
    intro: '世界上最流行的经济学教材，介绍经济学的基本原理和概念。',
    category: '经济',
    coverUrl: 'https://img9.doubanio.com/view/subject/s/public/s28387369.jpg',
    isbn: '9787301211129'
  },
  {
    title: '时间简史',
    author: '史蒂芬·霍金',
    intro: '探索时间和空间核心秘密的故事，是关于宇宙本性的最前沿知识。',
    category: '科普',
    coverUrl: 'https://img3.doubanio.com/view/subject/s/public/s1914861.jpg',
    isbn: '9787535732309'
  },
  {
    title: '小王子',
    author: '安托万·德·圣-埃克苏佩里',
    intro: '这部童话充满着诗意的忧郁和淡淡的哀愁，感动了全世界无数读者。',
    category: '小说',
    coverUrl: 'https://img1.doubanio.com/view/subject/s/public/s1103152.jpg',
    isbn: '9787020042494'
  },
  {
    title: '围城',
    author: '钱钟书',
    intro: '中国现代文学史上一部风格独特的讽刺小说，被誉为"新儒林外史"。',
    category: '小说',
    coverUrl: 'https://img3.doubanio.com/view/subject/s/public/s1070222.jpg',
    isbn: '9787020024759'
  },
  {
    title: '正见',
    author: '宗萨蒋扬钦哲仁波切',
    intro: '阐述佛教的基本教义和正见，以通俗易懂的语言讲解佛学。',
    category: '哲学',
    coverUrl: 'https://img1.doubanio.com/view/subject/s/public/s2651398.jpg',
    isbn: '9787218044028'
  },
  {
    title: '平凡的世界',
    author: '路遥',
    intro: '一部现实主义小说，浓缩了中国西北农村的历史变迁过程。',
    category: '小说',
    coverUrl: 'https://img3.doubanio.com/view/subject/s/public/s1144911.jpg',
    isbn: '9787020049295'
  },
  {
    title: '追风筝的人',
    author: '卡勒德·胡赛尼',
    intro: '讲述了一个关于友谊、背叛和救赎的感人故事。',
    category: '小说',
    coverUrl: 'https://img2.doubanio.com/view/subject/s/public/s1727290.jpg',
    isbn: '9787208061644'
  },
  {
    title: '1984',
    author: '乔治·奥威尔',
    intro: '反乌托邦小说的经典之作，描绘了一个极权主义的恐怖世界。',
    category: '小说',
    coverUrl: 'https://img3.doubanio.com/view/subject/s/public/s4371408.jpg',
    isbn: '9787544700877'
  },
  {
    title: '原则',
    author: '瑞·达利欧',
    intro: '华尔街投资大神的人生经验之作，阐述生活和工作的原则。',
    category: '经济',
    coverUrl: 'https://img1.doubanio.com/view/subject/s/public/s29651171.jpg',
    isbn: '9787508684031'
  }
];

export const searchBooksViaGemini = async (query: string): Promise<SearchResultBook[]> => {
  console.log("搜索书籍:", query);
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    // 返回随机推荐
    return getRandomBooks(4);
  }
  
  // 智能搜索算法
  const matchedBooks = enhancedBookDatabase.filter(book => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    
    // 精确匹配（最高优先级）
    if (title === searchTerm || author === searchTerm) {
      return true;
    }
    
    // 包含匹配
    if (title.includes(searchTerm) || author.includes(searchTerm)) {
      return true;
    }
    
    // 分词匹配
    const words = searchTerm.split(/[\s\u3000]+/);
    if (words.length > 1) {
      return words.some(word => title.includes(word) || author.includes(word));
    }
    
    // 模糊匹配（最后一个字符不同）
    if (searchTerm.length > 2) {
      const fuzzyTitle = title.replace(/[·\s]/g, '');
      const fuzzySearch = searchTerm.replace(/[·\s]/g, '');
      return fuzzyTitle.includes(fuzzySearch) || 
             Math.abs(fuzzyTitle.length - fuzzySearch.length) <= 2;
    }
    
    return false;
  });
  
  // 如果没有匹配，提供相关推荐
  if (matchedBooks.length === 0) {
    return getRelatedRecommendations(searchTerm);
  }
  
  // 转换为搜索结果格式
  return matchedBooks.map(book => ({
    title: book.title,
    author: book.author,
    coverUrl: book.coverUrl,
    intro: book.intro,
    category: book.category
  })).slice(0, 6);
};

// 获取随机书籍
function getRandomBooks(count: number): SearchResultBook[] {
  const shuffled = [...enhancedBookDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(book => ({
    title: book.title,
    author: book.author,
    coverUrl: book.coverUrl,
    intro: book.intro,
    category: book.category
  }));
}

// 获取相关推荐
function getRelatedRecommendations(searchTerm: string): SearchResultBook[] {
  const lowerTerm = searchTerm.toLowerCase();
  
  // 根据搜索词类型推荐
  if (lowerTerm.includes('小说') || lowerTerm.includes('文学')) {
    return enhancedBookDatabase
      .filter(book => book.category === '小说')
      .slice(0, 4)
      .map(book => ({
        title: book.title,
        author: book.author,
        coverUrl: book.coverUrl,
        intro: book.intro,
        category: book.category
      }));
  } else if (lowerTerm.includes('经济')) {
    return enhancedBookDatabase
      .filter(book => book.category === '经济')
      .slice(0, 4)
      .map(book => ({
        title: book.title,
        author: book.author,
        coverUrl: book.coverUrl,
        intro: book.intro,
        category: book.category
      }));
  } else if (lowerTerm.includes('心理')) {
    return enhancedBookDatabase
      .filter(book => book.category === '心理')
      .slice(0, 4)
      .map(book => ({
        title: book.title,
        author: book.author,
        coverUrl: book.coverUrl,
        intro: book.intro,
        category: book.category
      }));
  } else {
    // 默认返回热门书籍
    return getRandomBooks(3);
  }
}