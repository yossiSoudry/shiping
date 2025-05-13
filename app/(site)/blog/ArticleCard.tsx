'use client'

import Link from 'next/link';
import Image from 'next/image'; 
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Article } from '@/types/article';
import { useState, useEffect } from 'react';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  isRelated?: boolean;
}

const ArticleCard = ({ article, featured = false, isRelated = false }: ArticleCardProps) => {
  const readingTime = Math.ceil(article.content.split(' ').length / 200);
  const [isMounted, setIsMounted] = useState(false);

  // Only render client-side to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback image in case the article image is undefined
  const imageSrc = article.image || '/placeholder.jpg';

  // Server-side safe rendering that matches client rendering
  return (
    <article className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${featured ? 'border-b-4 border-orange-500' : ''} ${isRelated ? 'border border-gray-100' : ''}`}>
      {/* Image */}
      <div className="block overflow-hidden">
        <div className={`relative ${featured ? 'h-56' : 'h-48'} w-full`}>
          {isMounted ? (
            <Link href={`/blog/${article.slug}`}>
              <Image
                src={imageSrc}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
          
          {/* Category Pill - only on featured */}
          {featured && isMounted && (
            <div className="absolute top-4 right-4">
              <Link 
                href={`/blog/category/${article.category}`}
                className="bg-orange-500/90 hover:bg-orange-400/90 text-white text-sm font-medium py-1 px-3 rounded-full transition-colors"
              >
                {article.categoryName}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category - only on non-featured */}
        {!featured && isMounted && (
          <Link
            href={`/blog/category/${article.category}`}
            className="inline-block text-sm font-medium text-orange-500 hover:text-orange-600 mb-3"
          >
            {article.categoryName}
          </Link>
        )}

        {/* Title */}
        <h2 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-3 line-clamp-2 transition-colors`}>
          {isMounted ? (
            <Link href={`/blog/${article.slug}`} className="hover:text-blue-900">
              {article.title}
            </Link>
          ) : (
            article.title
          )}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('he-IL')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readingTime} דקות קריאה</span>
            </div>
          </div>
        </div>

        {/* Read More */}
        {isMounted && (
          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-orange-500 transition-colors"
          >
            קרא עוד
            <ArrowLeft className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;