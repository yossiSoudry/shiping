import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../articles";
import ArticleCard from "../../ArticleCard";

// Define category metadata
const categoryMetadata = {
  "cost-saving": {
    title: "חיסכון בעלויות משלוח | טיפים וידע מקצועי",
    description:
      "מאמרים מקצועיים על חיסכון בעלויות משלוח לעסקים, הנחות לכמויות גדולות ואסטרטגיות מיקוח מול חברות שליחויות",
    keywords:
      "חיסכון בעלויות משלוח, הנחות משלוחים, הסכמי מסגרת, תמחור דיפרנציאלי, אופטימיזציה משלוחים",
  },
  technology: {
    title: "טכנולוגיות ומערכות לניהול משלוחים | שיפינג משלוחים",
    description:
      "גלו את הטכנולוגיות והמערכות המתקדמות ביותר לניהול משלוחים ומעקב בזמן אמת אחר חבילות לעסקים",
    keywords:
      "מערכות ניהול משלוחים, טכנולוגיות מעקב, מערכת ניהול שליחויות, אוטומציה של משלוחים, מעקב בזמן אמת",
  },
  logistics: {
    title: "פתרונות לוגיסטיקה מתקדמים לעסקים | שיפינג משלוחים",
    description:
      "מאמרים על פתרונות לוגיסטיים מקצה לקצה, שירותי איסוף ושילוח יומי ואסטרטגיות לוגיסטיות מתקדמות לעסקים",
    keywords:
      "לוגיסטיקה לעסקים, פתרונות מקצה לקצה, איסוף ושילוח יומי, פולפילמנט, ניהול מלאי, אחסון",
  },
  regional: {
    title: "פתרונות משלוחים אזוריים בישראל | צפון, מרכז ודרום",
    description:
      "מידע מקצועי על פתרונות משלוחים ייחודיים לאזורים שונים בישראל - התמודדות עם אתגרי משלוחים בפריפריה ובמרכז",
    keywords:
      "משלוחים בצפון, הפצה בדרום, משלוחים במרכז הארץ, לוגיסטיקה בפריפריה, שליחויות אזוריות",
  },
  projects: {
    title: "פרויקטי הפצה ומשלוחים בקנה מידה גדול | שיפינג משלוחים",
    description:
      "מאמרים על ניהול פרויקטי הפצה מורכבים, כיסוי אזורים מרוחקים ואתגרים לוגיסטיים בפרויקטים גדולים",
    keywords:
      "פרויקטי הפצה, הפצה בכמויות גדולות, לוגיסטיקה לפרויקטים, כיסוי אזורים מרוחקים, הפצה ארצית",
  },
};

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = params;

  if (!categoryMetadata[category as keyof typeof categoryMetadata]) {
    return {
      title: "קטגוריה לא נמצאה | שיפינג משלוחים",
      description: "הקטגוריה המבוקשת לא נמצאה",
    };
  }

  const meta = categoryMetadata[category as keyof typeof categoryMetadata];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const categoriesMap: Record<string, boolean> = {};
  articles.forEach((article) => {
    categoriesMap[article.category] = true;
  });

  return Object.keys(categoriesMap).map((category) => ({
    category,
  }));
}

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  // Get articles for this category
  const categoryArticles = articles.filter(
    (article) => article.category === category
  );

  // Get category name
  const categoryName =
    categoryArticles.length > 0 ? categoryArticles[0].categoryName : "";

  if (categoryArticles.length === 0) {
    notFound();
  }

  return (
    <div className="mt-20 bg-white">
      <div className="container mx-auto p-4">
        {/* Breadcrumbs */}
        <div className="mb-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-blue-900">
            ראשי
          </Link>
          {" > "}
          <Link href="/blog" className="text-gray-500 hover:text-blue-900">
            מאמרים
          </Link>
          {" > "}
          <span className="text-gray-700">{categoryName}</span>
        </div>

        {/* Category Header */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {
              categoryMetadata[
                category as keyof typeof categoryMetadata
              ]?.description.split(" | ")[0]
            }
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Bottom SEO Text */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-r-4 border-orange-500 pr-4">
            {categoryName} - מידע מקצועי ומעמיק
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            {category === "cost-saving" && (
              <>
                <p>
                  בקטגוריית חיסכון בעלויות משלוח תמצאו מדריכים מקיפים ואסטרטגיות
                  מעשיות להפחתת עלויות המשלוח בעסק שלכם. אנו מתמקדים במתן כלים
                  פרקטיים לעסקים המשלחים מעל 100 חבילות בחודש לשפר את היעילות
                  התפעולית ולהגדיל את הרווחיות.
                </p>
                <p>
                  המומחים שלנו מציעים ידע בנושאים כמו ניהול הסכמי מסגרת עם חברות
                  שליחויות, מודלים לתמחור דיפרנציאלי, אופטימיזציה של תהליכי
                  משלוח פנימיים, איחוד משלוחים ותכנון חכם, ויישום טכנולוגיות
                  מתקדמות.
                </p>
              </>
            )}

            {category === "technology" && (
              <>
                <p>
                  בקטגוריית טכנולוגיה ומערכות תמצאו מידע מקצועי על הפתרונות
                  הטכנולוגיים המתקדמים ביותר לניהול מערך המשלוחים בעסק. המאמרים
                  שלנו מציגים השוואות מעמיקות בין מערכות שונות, טיפים לבחירת
                  המערכת המתאימה לצרכי העסק שלכם, וחידושים טכנולוגיים בתחום.
                </p>
                <p>
                  אנו מכסים נושאים כמו מערכות ניהול משלוחים, פתרונות למעקב בזמן
                  אמת, טכנולוגיות לאופטימיזציה של &quot;הקילומטר האחרון&quot;,
                  ושילוב של טכנולוגיות IoT במערך המשלוחים שלכם.
                </p>
              </>
            )}

            {category === "logistics" && (
              <>
                <p>
                  בקטגוריית לוגיסטיקה תוכלו למצוא מאמרים מקיפים על פתרונות
                  לוגיסטיים מתקדמים לעסקים בכל גודל. המומחים שלנו מציגים פתרונות
                  מקצה לקצה המכסים את כל שרשרת האספקה, מרגע הזמנת הלקוח ועד
                  למסירה הסופית.
                </p>
                <p>
                  אנו מתמקדים בנושאים כמו שירותי איסוף ושילוח יומי, פתרונות
                  פולפילמנט, ניהול מלאי חכם, אסטרטגיות למקסום היעילות הלוגיסטית,
                  ושילוב של פתרונות דיגיטליים בתהליכים הלוגיסטיים.
                </p>
              </>
            )}

            {category === "regional" && (
              <>
                <p>
                  בקטגוריית פתרונות אזוריים תוכלו למצוא מידע ייחודי על האתגרים
                  וההזדמנויות במשלוחים באזורים השונים בישראל. המאמרים שלנו
                  מציגים פתרונות מותאמים לאתגרים הספציפיים של אזור המרכז, הצפון
                  והדרום.
                </p>
                <p>
                  אנו מכסים נושאים כמו התמודדות עם פקקים ועומסי תנועה במרכז,
                  פתרונות לכיסוי מרחקים גדולים בצפון ובדרום, אסטרטגיות להתגברות
                  על אתגרי השליחויות בפריפריה, ושילוב של פתרונות מקומיים עם
                  מערכי הפצה ארציים.
                </p>
              </>
            )}

            {category === "projects" && (
              <>
                <p>
                  בקטגוריית פרויקטי הפצה תוכלו למצוא מידע מקצועי על ניהול וביצוע
                  של פרויקטי הפצה מורכבים בקנה מידה גדול. המאמרים שלנו מציגים
                  אסטרטגיות מוכחות להתמודדות עם האתגרים הייחודיים של הפצה
                  לאזורים מרוחקים ופריפריה.
                </p>
                <p>
                  אנו מכסים נושאים כמו תכנון לוגיסטי של פרויקטים גדולים, שילוב
                  בין שיטות הפצה שונות, אופטימיזציה של עלויות, שימוש בטכנולוגיות
                  מתקדמות לניהול משלוחים מבוזרים, והכנות מקדימות לפרויקטי הפצה
                  ארציים.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;