import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const readingTime = Math.ceil(article.content.split(" ").length / 200);

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Image */}
      <Link href={`/blog/${article.slug}`} className="block overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <Link
          href={`/blog/category/${article.category}`}
          className="inline-block text-sm font-medium text-orange-500 hover:text-orange-600 mb-3"
        >
          {article.categoryName}
        </Link>

        {/* Title */}
        <Link href={`/blog/${article.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors">
            {article.title}
          </h2>
        </Link>

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
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-blue-900 font-medium hover:text-orange-500 transition-colors"
        >
          קרא עוד
          <ArrowLeft className="w-4 h-4 transform transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;