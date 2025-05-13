import { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '../(site)/blog/articles';

export const metadata: Metadata = {
  title: 'מפת אתר | שיפינג משלוחים',
  description: 'מפת האתר של שיפינג משלוחים - מצאו את כל המאמרים והקטגוריות באתר',
  robots: 'index, follow',
};

// Helper function to get unique categories
const getUniqueCategories = () => {
  const categories = articles.map(article => ({
    category: article.category,
    categoryName: article.categoryName
  }));
  
  return Array.from(new Map(categories.map(item => 
    [item.category, item]
  )).values());
};

const SitemapPage = () => {
  const categories = getUniqueCategories();
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">מפת אתר</h1>
        
        <div className="bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">דפים ראשיים</h2>
          <ul className="space-y-2 mb-10">
            <li>
              <Link href="/" className="text-blue-900 hover:text-orange-500">
                דף הבית
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-900 hover:text-orange-500">
                אודות
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-900 hover:text-orange-500">
                שירותים
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-900 hover:text-orange-500">
                צור קשר
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-900 hover:text-orange-500">
                מאמרים ומידע מקצועי
              </Link>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-blue-900 mb-6">קטגוריות מאמרים</h2>
          <ul className="space-y-2 mb-10">
            {categories.map((cat) => (
              <li key={cat.category}>
                <Link
                  href={`/blog/category/${cat.category}`}
                  className="text-blue-900 hover:text-orange-500"
                >
                  {cat.categoryName}
                </Link>
              </li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-bold text-blue-900 mb-6">כל המאמרים</h2>
          <ul className="space-y-2">
            {articles.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-blue-900 hover:text-orange-500"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;