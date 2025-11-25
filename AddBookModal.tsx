import React, { useState, useEffect } from 'react';
import { Search, Loader2, Plus } from 'lucide-react';
import { searchBooksViaGemini } from './geminiService';
import { SearchResultBook, Book, Category } from './types';
import { Modal } from './Modal';
import { Button } from './Button';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: Book) => void;
}

export const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onAddBook }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResultBook[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [lastAddedBook, setLastAddedBook] = useState<string>('');

  // 防抖搜索
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const searchTimer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const books = await searchBooksViaGemini(query);
        setResults(books);
        setHasSearched(true);
      } catch (error) {
        console.error("搜索失败", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [query]);

  // 重置状态当弹窗关闭时
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setHasSearched(false);
      setLastAddedBook('');
    }
  }, [isOpen]);

  const handleSelectBook = (result: SearchResultBook) => {
    // 生成唯一ID - 使用时间戳+随机数确保唯一性
    const uniqueId = `book-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const newBook: Book = {
      id: uniqueId,
      title: result.title,
      author: result.author,
      coverUrl: result.coverUrl,
      category: result.category || Category.OTHER,
      status: 'planned',
      tags: [],
      intro: result.intro || `《${result.title}》是${result.author}的作品。`,
      addedAt: Date.now(),
      coreViews: '',
      excerpts: [],
      thoughts: ''
    };
    
    // 防止重复添加
    if (lastAddedBook !== `${result.title}-${result.author}`) {
      onAddBook(newBook);
      setLastAddedBook(`${result.title}-${result.author}`);
    }
    
    // 关闭弹窗
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="新增书籍">
      <div className="space-y-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入书名或作者...（输入时自动搜索）"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-douban-green focus:border-transparent outline-none"
              autoFocus
            />
            {isLoading && (
              <div className="absolute right-3 top-2.5">
                <Loader2 size={18} className="animate-spin text-gray-400" />
              </div>
            )}
          </div>
        </div>

        <div className="min-h-[300px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-48 text-gray-400">
              <Loader2 size={32} className="animate-spin mb-2" />
              <p>正在搜索书籍...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {results.map((book, idx) => (
                <div 
                  key={`${book.title}-${book.author}-${idx}`}
                  className="flex gap-4 p-3 border rounded-lg hover:bg-gray-50 hover:border-douban-green cursor-pointer transition-all group"
                  onClick={() => handleSelectBook(book)}
                >
                  <img 
                    src={book.coverUrl} 
                    alt={book.title} 
                    className="w-16 h-24 object-cover rounded shadow-sm bg-gray-200"
                    onError={(e) => {
                      // 图片加载失败时使用备用图片
                      e.currentTarget.src = `https://picsum.photos/seed/${encodeURIComponent(book.title)}/100/140`;
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-douban-text text-lg group-hover:text-douban-green">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{book.author}</p>
                    <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded">
                      {book.category}
                    </span>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{book.intro}</p>
                  </div>
                  <div className="flex items-center">
                    <Button size="sm" variant="secondary" onClick={() => handleSelectBook(book)}>
                      <Plus size={16} className="mr-1"/> 添加
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : hasSearched ? (
            <div className="text-center text-gray-500 py-10">
              未找到相关书籍，请尝试更换关键词。
            </div>
          ) : query ? (
            <div className="text-center text-gray-400 py-10">
              输入关键词后会自动搜索...
            </div>
          ) : (
            <div className="text-center text-gray-400 py-10">
              输入书名或作者开始搜索
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};