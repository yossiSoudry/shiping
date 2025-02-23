'use client';

import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search } from "lucide-react";

interface City {
  name: string;
  isExceptional: boolean;
}

interface RegionSearchProps {
  citiesData: City[];
}

export default function RegionSearch({ citiesData }: RegionSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState<City | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const foundCity = citiesData.find(city => 
      city.name.toLowerCase().trim() === searchTerm.toLowerCase().trim()
    );
    
    setResult(foundCity || null);
  };

  const getDeliveryMessage = (isExceptional: boolean) => {
    return isExceptional 
      ? "אזור חריג - עד 7 ימי עסקים"
      : "אזור מרכזי - עד 3 ימי עסקים";
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="flex gap-3">
            <Button type="submit" className="shrink-0">
              <Search className="h-5 w-5" />
              <span className="mr-2">חפש</span>
            </Button>
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="הקלד שם יישוב"
              className="text-right"
              dir="rtl"
            />
          </div>

          {searchTerm.trim() && !result && (
            <Alert variant="destructive">
              <AlertDescription className="text-right">
                יישוב לא נמצא במערכת
              </AlertDescription>
            </Alert>
          )}

          {result && (
            <Alert variant={result.isExceptional ? "destructive" : "default"}>
              <AlertDescription className="text-right flex justify-between items-center">
                <span className="font-bold">{getDeliveryMessage(result.isExceptional)}</span>
                <span>{result.name}</span>
              </AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  );
}