import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { articles } from "../articles";
import ShareSection from "@/components/ShareSection";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {
      title: "מאמר לא נמצא | שיפינג משלוחים",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.metaKeywords,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1500,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const readingTime = Math.ceil(article.content.split(" ").length / 200);

  return (
    <article className="mt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/90 mb-4">
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
                className="prose prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Share Section - Client Component */}
              <ShareSection title={article.title} />

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-blue-900/90 to-blue-700/90 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">זקוקים לשירותי משלוחים?</h3>
                <p className="mb-4 text-blue-100">
                  צרו קשר עוד היום וקבלו הצעת מחיר מותאמת אישית
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500/90 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
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
                      <div key={relatedArticle.id} className="block">
                        <h4 className="font-medium text-gray-900 hover:text-orange-500/90 transition-colors">
                          <Link href={`/blog/${relatedArticle.slug}`} className="block">
                            {relatedArticle.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(relatedArticle.date).toLocaleDateString('he-IL')}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;