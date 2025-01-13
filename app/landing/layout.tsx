import "../globals.css";

export const metadata = {
  title: 'Shipping',
  description: 'Shipping and shopping',
  icons: {
    icon: '/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
