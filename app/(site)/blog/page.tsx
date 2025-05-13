import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from './articles';
import ArticleCard from './ArticleCard';


export const metadata: Metadata = {
  title: 'מה חדש | שיפינג משלוחים - מאמרים וטיפים לוגיסטיים',
  description: 'מאמרים מקצועיים על משלוחים, לוגיסטיקה, טיפים לעסקים וחדשות מעולם המשלוחים. קראו עוד על שירותי משלוחים מתקדמים בישראל',
  keywords: 'משלוחים, לוגיסטיקה, שילוח, משלוחים לעסקים, טיפים לוגיסטיים, שירותי משלוחים, חיסכון בעלויות משלוח',
  openGraph: {
    title: 'מה חדש בעולם המשלוחים | שיפינג משלוחים',
    description: 'מאמרים וטיפים מקצועיים מעולם המשלוחים והלוגיסטיקה',
    type: 'website',
  },
};

// Helper function to get unique categories
const getUniqueCategories = () => {
  const categoriesMap = new Map();
  
  articles.forEach(article => {
    if (!categoriesMap.has(article.category)) {
      categoriesMap.set(article.category, {
        category: article.category,
        categoryName: article.categoryName
      });
    }
  });
  
  return Array.from(categoriesMap.values());
};

const BlogPage = () => {
  const categories = getUniqueCategories();
  const featuredArticles = articles.slice(0, 3);
  const recentArticles = articles.slice(0, 6);
  
  return (
    <div className="mt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            מה חדש בעולם המשלוחים?
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            מאמרים מקצועיים, טיפים שימושיים וחדשות מרתקות מתחום הלוגיסטיקה והמשלוחים בישראל
          </p>
          
          {/* Categories Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <Link 
                key={cat.category}
                href={`/blog/category/${cat.category}`}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full px-4 py-2 text-sm transition-colors"
              >
                {cat.categoryName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 border-r-4 border-orange-500 pr-4">
            מאמרים מובילים
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured={true} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Sections */}
      {categories.map((cat) => {
        const categoryArticles = articles
          .filter(article => article.category === cat.category)
          .slice(0, 3);
          
        return (
          <section key={cat.category} className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 border-r-4 border-orange-500 pr-4">
                  {cat.categoryName}
                </h2>
                <Link 
                  href={`/blog/category/${cat.category}`}
                  className="text-blue-900 hover:text-orange-500 font-medium transition-colors"
                >
                  לכל המאמרים בקטגוריה
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Recent Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 border-r-4 border-orange-500 pr-4">
            מאמרים אחרונים
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          {/* Pagination */}
          {articles.length > 6 && (
            <div className="mt-12 flex justify-center">
              <Link 
                href="/blog/page/2"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                למאמרים נוספים
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            הירשמו לניוזלטר שלנו
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            קבלו עדכונים חודשיים על חידושים בתחום הלוגיסטיקה, טיפים לשיפור השירות ומבצעים בלעדיים
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="כתובת אימייל"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              required
              aria-label="כתובת אימייל"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              הרשמה
            </button>
          </form>
        </div>
      </section> */}
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "איך ניתן לחסוך בעלויות משלוח לעסקים?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ניתן לחסוך בעלויות משלוח עם הסכמי מסגרת, תמחור דיפרנציאלי, אופטימיזציה של תהליכים פנימיים, ושימוש בטכנולוגיות מתקדמות."
                }
              },
              {
                "@type": "Question",
                "name": "איך בוחרים מערכת ניהול משלוחים מתאימה?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "בחירת מערכת ניהול משלוחים מתאימה תלויה בהיקף המשלוחים, הצורך באינטגרציות עם מערכות קיימות, תמיכה בחברות שליחויות שונות, וקלות השימוש."
                }
              },
              {
                "@type": "Question",
                "name": "מהם היתרונות של שירותי איסוף ושילוח יומי?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "שירותי איסוף ושילוח יומי מאפשרים חיסכון בזמן וייעול תהליכים, משפרים את שירות הלקוחות, מובילים לחיסכון בעלויות, ומאפשרים תכנון אופטימלי של תהליכי ייצור ואריזה."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default BlogPage;