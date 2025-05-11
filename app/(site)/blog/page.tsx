import ArticleCard from "./ArticleCard";
import { articles } from "./articles";

export const metadata = {
  title: "מה חדש | שיפינג משלוחים - מאמרים וטיפים לוגיסטיים",
  description: "מאמרים מקצועיים על משלוחים, לוגיסטיקה, טיפים לעסקים וחדשות מעולם המשלוחים. קראו עוד על שירותי משלוחים מתקדמים בישראל",
  keywords: "משלוחים, לוגיסטיקה, שילוח, משלוחים לעסקים, טיפים לוגיסטיים, שירותי משלוחים",
  openGraph: {
    title: "מה חדש | שיפינג משלוחים",
    description: "מאמרים וטיפים מקצועיים מעולם המשלוחים והלוגיסטיקה",
    type: "website",
  },
};

const page = () => {
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
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500">
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
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              הרשמה
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;