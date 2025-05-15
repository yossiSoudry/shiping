// app/accessibility/page.tsx

export const metadata = {
    title: 'הצהרת נגישות | שיפינג משלוחים',
    description: 'הצהרת נגישות - המחויבות שלנו להנגשת האתר והשירותים לכלל האוכלוסייה',
  };
  
  export default function AccessibilityStatementPage() {
    return (
      <div className="mt-20 bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <section className="relative py-16 bg-gradient-to-br from-blue-900/90 to-blue-700/90text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">הצהרת נגישות</h1>
            <p className="mt-4 text-center text-blue-100 max-w-3xl mx-auto">
              המחויבות שלנו להנגשת האתר והשירותים לכלל האוכלוסייה
            </p>
          </div>
        </section>
  
        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
              <div className="prose flex flex-col gap-4 prose-lg max-w-none">
                <h2 className="text-xl font-semibold">מבוא</h2>
                <p>
                  חברת שיפינג משלוחים (להלן: &quot;החברה&quot;) מחויבת להנגיש את אתר האינטרנט שלה ואת השירותים המוצעים בו לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות. אנו פועלים באופן שוטף כדי לשפר את נגישות האתר והשירותים שלנו בהתאם לתקנים ולחוקים החלים, ובמיוחד בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013.
                </p>
  
                <h2 className="text-xl font-semibold">התאמות נגישות באתר</h2>
                <p>
                  אתר זה נבנה תוך שימוש בטכנולוגיות חדישות ומתקדמות, ונעשו מאמצים רבים להנגשה מלאה עבור משתמשים עם מוגבלויות. בין התאמות הנגישות שבוצעו באתר:
                </p>
                
                <ul className="list-disc list-inside">
                  <li>תמיכה בניווט באמצעות מקלדת (ללא עכבר)</li>
                  <li>תמיכה בקוראי מסך ובטכנולוגיות מסייעות</li>
                  <li>שימוש בניגודיות צבעים מספקת וטקסט קריא</li>
                  <li>יכולת שינוי גודל הטקסט והתאמת התצוגה</li>
                  <li>תיאורי תמונות חלופיים (Alt text) לתמונות באתר</li>
                  <li>מבנה דפים עקבי ונוח לניווט</li>
                  <li>כותרות ברורות והיררכיה לוגית של תוכן</li>
                </ul>
  
                <h3 className="text-xl font-semibold">תוסף נגישות</h3>
                <p>
                  באתר מוטמע תוסף נגישות המאפשר התאמות נגישות מגוונות, כגון:
                </p>
                <ul className="list-disc list-inside">
                  <li>שינוי גודל טקסט</li>
                  <li>שינוי ניגודיות צבעים</li>
                  <li>הדגשת קישורים</li>
                  <li>הדגשת כותרות</li>
                  <li>הפסקת אנימציות</li>
                  <li>הצגת תיאורים חלופיים לתמונות</li>
                </ul>
                <p>
                  ניתן לגשת לתוסף הנגישות באמצעות לחיצה על סמל הנגישות המופיע בפינה השמאלית התחתונה של המסך.
                </p>
  
                <h2 className="text-xl font-semibold">רמת נגישות האתר</h2>
                <p>
                  אתר זה תואם את דרישות הנגישות בהתאם לתקנות הישראליות, ותואם את העקרונות המנחים של תקן הנגישות הבינלאומי WCAG 2.1 ברמה AA. אנו שואפים להגיע לתאימות מלאה וממשיכים לשפר באופן שוטף את רמת הנגישות באתר.
                </p>
  
                <h2 className="text-xl font-semibold">אמצעי ניווט מותאמים</h2>
                <p>
                  האתר תומך בניווט באמצעות מקשי המקלדת בלבד, עבור משתמשים המתקשים להשתמש בעכבר:
                </p>
                <ul className="list-disc list-inside">
                  <li>מקש Tab: מעבר בין אלמנטים אינטראקטיביים בדף</li>
                  <li>Shift+Tab: מעבר אחורה בין אלמנטים</li>
                  <li>Enter: הפעלת אלמנט נבחר</li>
                  <li>מקשי חצים: ניווט בתוך מרכיבים מורכבים (כגון רשימות, לוחות שנה)</li>
                  <li>Esc: סגירת חלונות קופצים (פופאפ)</li>
                </ul>
  
                <h2 className="text-xl font-semibold">מגבלות נגישות</h2>
                <p>
                  למרות מאמצינו המתמשכים לוודא שהאתר יהיה נגיש במלואו, ייתכן שחלקים מסוימים באתר עדיין לא הונגשו באופן מלא. אנו עובדים באופן שוטף לשיפור הנגישות ומתחייבים לתקן כל בעיה שתובא לידיעתנו.
                </p>
  
                <h2 className="text-xl font-semibold">מסמכים נגישים</h2>
                <p>
                  אנו משתדלים לספק מסמכים בפורמטים נגישים, כגון PDF נגישים ומסמכי Word מותאמים לקריאה על ידי קוראי מסך. במקרה שנתקלתם במסמך שאינו נגיש, תוכלו לפנות אלינו ואנו נספק גרסה חלופית נגישה.
                </p>
  
                <h2 className="text-xl font-semibold">פנייה בנושא נגישות</h2>
                <p>
                  אם נתקלתם בבעיית נגישות באתר שלנו, או שיש לכם שאלות או הצעות לשיפור הנגישות, אנו מזמינים אתכם ליצור עמנו קשר:
                </p>
                <ul className="list-disc list-inside">
                  <li>רכז נגישות: יוסי</li>
                  <li>דוא&quot;ל: accessibility@shipping.co.il</li>
                  <li>טלפון: 052-760-0768</li>
                </ul>
                <p>
                  אנו מתחייבים לטפל בפניות בנושא נגישות בזמן סביר ולעשות כל מאמץ להנגיש תכנים שאינם נגישים.
                </p>
  
                <h2 className="text-xl font-semibold">מידע נוסף</h2>
                <p>
                  ניתן למצוא מידע נוסף על נגישות אינטרנט בישראל באתר נציבות שוויון זכויות לאנשים עם מוגבלות: <a href="https://www.gov.il/he/departments/topics/accessibility_information" target="_blank" rel="noopener noreferrer">לחץ כאן</a>
                </p>
  
                <p className="text-sm text-gray-500 mt-8">
                  הצהרת נגישות זו עודכנה לאחרונה: מאי 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }