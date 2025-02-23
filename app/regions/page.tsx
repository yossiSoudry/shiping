// app/regions/page.tsx
import '@/app/globals.css';  // אם צריך
import { Metadata } from 'next';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCities } from '@/actions/regions';
import RegionSearch from './_components/search';

export const metadata: Metadata = {
  title: 'בדיקת זמני משלוח | Shipping2016',
  description: 'בדיקת זמני משלוח לפי אזורים'
};

export default async function RegionsPage() {
  const cities = await fetchCities();

  return (
    <main className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-center">זמני משלוח לפי אזורים</CardTitle>
          {/* <p className="text-center text-muted-foreground">
            אזורים מרכזיים: עד 3 ימי עסקים | אזורים חריגים: עד 7 ימי עסקים
          </p> */}
        </CardHeader>
      </Card>
      <RegionSearch citiesData={cities} />
    </main>
  );
}