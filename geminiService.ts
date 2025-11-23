import { SearchResultBook } from "./types";

export const searchBooksViaGemini = async (query: string): Promise<SearchResultBook[]> => {
  try {
    console.log("搜索书籍:", query);
    
    if (!query.trim()) {
      return getFallbackBooks();
    }

    // 使用开放图书馆API
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=5`
    );
    
    if (!response.ok) {
      throw new Error('搜索失败');
    }
    
    const data = await response.json();
    
    if (!data.docs || data.docs.length === 0) {
      return getFallbackBooks();
    }
    
    // 转换数据格式
    const books: SearchResultBook[] = data.docs.map((book: any) => {
      const coverId = book.cover_i;
      const coverUrl = coverId 
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : `https://picsum.photos/seed/${encodeURIComponent(book.title || 'book')}/200/300`;
      
      return {
        title: book.title || '未知书名',
        author: book.author_name ? book.author_name[0] : '未知作者',
        coverUrl: coverUrl,
        intro: book.first_sentence ? book.first_sentence[0] : '暂无简介',
        category: determineCategory(book.subject || [])
      };
    });
    
    return books;
    
  } catch (error) {
    console.error('搜索失败，使用备用数据:', error);
    return getFallbackBooks(query);
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
  } else {
    return '其他';
  }
}

// 备用数据
function getFallbackBooks(query?: string): SearchResultBook[] {
  const fallbackBooks = [
    {
      title: '三体',
      author: '刘慈欣',
      coverUrl: 'https://covers.openlibrary.org/b/id/8400389-M.jpg',
      intro: '地球人类文明和三体文明的信息交流、生死搏杀',
      category: '小说'
    },
    {
      title: '活着',
      author: '余华',
      coverUrl: 'https://picsum.photos/seed/活着/200/300',
      intro: '一个人和他的命运之间的友情，这是最为感人的友情',
      category: '小说'
    },
    {
      title: '人类简史',
      author: '尤瓦尔·赫拉利',
      coverUrl: 'https://picsum.photos/seed/人类简史/200/300',
      intro: '从十万年前有生命迹象开始到21世纪的人类发展史',
      category: '社科'
    }
  ];
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    const filtered = fallbackBooks.filter(book => 
      book.title.toLowerCase().includes(lowerQuery) || 
      book.author.toLowerCase().includes(lowerQuery)
    );
    return filtered.length > 0 ? filtered : fallbackBooks;
  }
  
  return fallbackBooks;
}