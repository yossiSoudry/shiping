"use client";
import React from "react";

export function RoadBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* רשת עדינה */}
      <div className="absolute inset-0 bg-grid-brand-blue/[0.04] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

      {/* הילות צבע רכות (aurora) */}
      <div className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-brand-blue/15 blur-[120px]" />
      <div className="absolute top-1/3 -left-24 h-[30rem] w-[30rem] rounded-full bg-brand-orange/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-blue/10 blur-[120px]" />

      {/* רמז עדין לכביש בתחתית */}
      <div className="absolute inset-x-0 bottom-16 h-px bg-gradient-to-l from-transparent via-brand-orange/30 to-transparent" />
      <div className="road-dashes absolute inset-x-0 bottom-16 h-[2px]" />
    </div>
  );
}
