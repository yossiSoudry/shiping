export const metadata = {
    title: {
      template: '%s | שיפינג משלוחים',
      default: 'מה חדש | שיפינג משלוחים',
    },
    description: 'מאמרים מקצועיים על משלוחים, לוגיסטיקה, טיפים לעסקים וחדשות מעולם המשלוחים',
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return children;
  }