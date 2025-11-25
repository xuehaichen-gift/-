import { SearchResultBook } from "./types";

// 备用书籍数据（当API不可用时使用）
const fallbackBooks = [
  {
    title: '三体',
    author: '刘慈欣',
    intro: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
    category: '小说',
    coverUrl: 'https://covers.openlibrary.org/b/id/8400389-M.jpg'
  },
  {
    title: '活着',
    author: '余华',
    intro: '《活着》讲述了在大时代背景下，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。',
    category: '小说',
    coverUrl: 'https://covers.openlibrary.org/b/id/10509866-M.jpg'
  },
  {
    title: '人类简史',
    author: '尤瓦尔·赫拉利',
    intro: '从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史，理清影响人类发展的重大脉络。',
    category: '社科',
    coverUrl: 'https://covers.openlibrary.org/b/id/12880050-M.jpg'
  }
];

export const searchBooksViaGemini = async (query: string): Promise<SearchResultBook[]> => {
  try {
    console.log("搜索书籍:", query);
    
    if (!query.trim()) {
      return fallbackBooks.slice(0, 3);
    }

    // 使用开放图书馆API
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=8&lang=zh`
    );
    
    if (!response.ok) {
      throw new Error('API请求失败');
    }
    
    const data = await response.json();
    
    if (!data.docs || data.docs.length === 0) {
      return getEnhancedFallbackBooks(query);
    }
    
    // 处理API返回的数据
    const books: SearchResultBook[] = data.docs
      .filter((book: any) => book.title && book.author_name) // 过滤无效数据
      .map((book: any) => {
        const coverId = book.cover_i;
        const coverUrl = coverId 
          ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
          : `https://picsum.photos/seed/${encodeURIComponent(book.title)}/300/400`;
        
        return {
          title: book.title,
          author: book.author_name ? book.author_name[0] : '未知作者',
          coverUrl: coverUrl,
          intro: book.first_sentence ? book.first_sentence[0] : (book.subject ? book.subject[0] : '暂无简介'),
          category: determineCategory(book.subject || [])
        };
      })
      .slice(0, 6); // 最多返回6本

    return books.length > 0 ? books : getEnhancedFallbackBooks(query);
    
  } catch (error) {
    console.error('API搜索失败，使用备用数据:', error);
    return getEnhancedFallbackBooks(query);
  }
};

// 根据主题词判断分类
function determineCategory(subjects: string[]): string {
  const subjectStr = subjects.join(' ').toLowerCase();
  
  if (subjectStr.includes('fiction') || subjectStr.includes('novel') || 
      subjectStr.includes('小说') || subjectStr.includes('文学')) {
    return '小说';
  } else if (subjectStr.includes('science') || subjectStr.includes('科普')) {
    return '科普';
  } else if (subjectStr.includes('history') || subjectStr.includes('历史')) {
    return '历史';
  } else if (subjectStr.includes('psychology') || subjectStr.includes('心理')) {
    return '心理';
  } else if (subjectStr.includes('economy') || subjectStr.includes('经济')) {
    return '经济';
  } else if (subjectStr.includes('philosophy') || subjectStr.includes('哲学')) {
    return '哲学';
  } else if (subjectStr.includes('social') || subjectStr.includes('社科')) {
    return '社科';
  } else if (subjectStr.includes('art') || subjectStr.includes('艺术')) {
    return '艺术';
  } else {
    return '其他';
  }
}

// 增强的备用数据
function getEnhancedFallbackBooks(query: string): SearchResultBook[] {
  const enhancedBookDatabase = [
    {
      title: '三体',
      author: '刘慈欣',
      intro: '《三体》是刘慈欣创作的系列长篇科幻小说，讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
      category: '小说',
      coverUrl: 'https://covers.openlibrary.org/b/id/8400389-M.jpg',
      searchKeywords: ['三体', '刘慈欣', '科幻', '地球往事']
    },
    {
      title: '活着',
      author: '余华',
      intro: '《活着》讲述了在大时代背景下，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。',
      category: '小说', 
      coverUrl: 'https://covers.openlibrary.org/b/id/10509866-M.jpg',
      searchKeywords: ['活着', '余华', '福贵', '人生']
    },
    {
      title: '百年孤独',
      author: '加西亚·马尔克斯',
      intro: '魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰。',
      category: '小说',
      coverUrl: 'https://covers.openlibrary.org/b/id/8227965-M.jpg',
      searchKeywords: ['百年孤独', '马尔克斯', '魔幻现实主义']
    },
    {
      title: '人类简史',
      author: '尤瓦尔·赫拉利',
      intro: '从十万年前有生命迹象开始到21世纪资本、科技交织的人类发展史，理清影响人类发展的重大脉络。',
      category: '社科',
      coverUrl: 'https://covers.openlibrary.org/b/id/12880050-M.jpg',
      searchKeywords: ['人类简史', '赫拉利', '历史', '文明']
    },
    {
      title: '思考，快与慢',
      author: '丹尼尔·卡尼曼',
      intro: '社会思想的一部里程碑式著作，堪与亚当·斯密的《国富论》和弗洛伊德的《梦的解析》相媲美。',
      category: '心理',
      coverUrl: 'https://covers.openlibrary.org/b/id/12880668-M.jpg',
      searchKeywords: ['思考快与慢', '卡尼曼', '心理学', '决策']
    },
    {
      title: '经济学原理',
      author: '曼昆',
      intro: '世界上最流行的经济学教材，其英文原版现已被哈佛大学、耶鲁大学、斯坦福大学等美国600余所大学用作经济学原理课程的教材。',
      category: '经济',
      coverUrl: 'https://picsum.photos/seed/经济学原理/300/400',
      searchKeywords: ['经济学原理', '曼昆', '经济', '宏观']
    },
    {
      title: '时间简史',
      author: '史蒂芬·霍金',
      intro: '探索时间和空间核心秘密的故事，是关于宇宙本性的最前沿知识。',
      category: '科普',
      coverUrl: 'https://covers.openlibrary.org/b/id/8232397-M.jpg',
      searchKeywords: ['时间简史', '霍金', '宇宙', '物理']
    },
    {
      title: '小王子',
      author: '安托万·德·圣-埃克苏佩里',
      intro: '这部童话虽然只是作者在3个月一气呵成的作品，但却是一部伟大的作品，它充满着诗意的忧郁和淡淡的哀愁。',
      category: '小说',
      coverUrl: 'https://covers.openlibrary.org/b/id/8219872-M.jpg',
      searchKeywords: ['小王子', '童话', '玫瑰', '狐狸']
    },
    {
      title: '红楼梦',
      author: '曹雪芹',
      intro: '中国古典四大名著之首，以贾、史、王、薛四大家族的兴衰为背景，以贾宝玉为视角，描绘了一批闺阁佳人的人生百态。',
      category: '小说',
      coverUrl: 'https://covers.openlibrary.org/b/id/11222063-M.jpg',
      searchKeywords: ['红楼梦', '曹雪芹', '古典名著', '贾宝玉']
    },
    {
      title: '围城',
      author: '钱钟书',
      intro: '《围城》是钱钟书所著的长篇小说，是中国现代文学史上一部风格独特的讽刺小说。被誉为"新儒林外史"。',
      category: '小说',
      coverUrl: 'https://covers.openlibrary.org/b/id/11222064-M.jpg',
      searchKeywords: ['围城', '钱钟书', '方鸿渐', '讽刺文学']
    },
    {
      title: '正见',
      author: '宗萨蒋扬钦哲仁波切',
      intro: '《正见》是宗萨蒋扬钦哲仁波切的著作，以通俗易懂的语言阐述佛教的基本教义和正见。',
      category: '哲学',
      coverUrl: 'https://picsum.photos/seed/正见/300/400',
      searchKeywords: ['正见', '宗萨', '佛学', '佛教', '哲学']
    }
  ];

  const lowerQuery = query.toLowerCase().trim();
  
  // 精确匹配
  const exactMatches = enhancedBookDatabase.filter(book => 
    book.title.toLowerCase() === lowerQuery || 
    book.author.toLowerCase() === lowerQuery
  );
  
  if (exactMatches.length > 0) {
    return exactMatches;
  }
  
  // 包含匹配
  const containsMatches = enhancedBookDatabase.filter(book => {
    const titleMatch = book.title.toLowerCase().includes(lowerQuery);
    const authorMatch = book.author.toLowerCase().includes(lowerQuery);
    const keywordMatch = book.searchKeywords.some(keyword => 
      keyword.toLowerCase().includes(lowerQuery)
    );
    
    return titleMatch || authorMatch || keywordMatch;
  });
  
  if (containsMatches.length > 0) {
    return containsMatches.slice(0, 6);
  }
  
  // 返回热门书籍作为推荐
  return enhancedBookDatabase.slice(0, 4);
}
