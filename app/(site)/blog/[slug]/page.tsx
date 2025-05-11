"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { articles } from "../articles";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const [currentUrl, setCurrentUrl] = useState("");
  
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const readingTime = Math.ceil(article.content.split(" ").length / 200);

  return (
    <article className="mt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/80 mb-4">
              <Link href="/" className="hover:text-white">בית</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white">מה חדש</Link>
              <span>/</span>
              <Link href={`/blog/category/${article.category}`} className="hover:text-white">
                {article.categoryName}
              </Link>
            </nav>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('he-IL')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} דקות קריאה</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr,300px] gap-12">
            {/* Main Content */}
            <div className="max-w-3xl">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share Section */}
              {currentUrl && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-orange-500" />
                    שתפו את המאמר
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + currentUrl)}`}
                      target="_blank"
                      className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">זקוקים לשירותי משלוחים?</h3>
                <p className="mb-4 text-blue-100">
                  צרו קשר עוד היום וקבלו הצעת מחיר מותאמת אישית
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  צור קשר
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-4">מאמרים נוספים</h3>
                <div className="space-y-4">
                  {articles
                    .filter((a) => a.id !== article.id)
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <Link
                        key={relatedArticle.id}
                        href={`/blog/${relatedArticle.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(relatedArticle.date).toLocaleDateString('he-IL')}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">אל תפספסו מאמרים חדשים</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            הירשמו לניוזלטר שלנו וקבלו עדכונים על מאמרים חדשים, טיפים לוגיסטיים ומבצעים בלעדיים
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="כתובת אימייל"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              הרשמה
            </button>
          </form>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;