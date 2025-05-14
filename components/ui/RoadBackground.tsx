"use client";
import React from 'react';

export function RoadBackground() {
  return (
    <>
      {/* כביש אופקי בסגנון מאויר */}
      <div className="road">
        <div className="road-lines"></div>
      </div>
      
      {/* אפקטים צבעוניים דומיננטיים */}
      <div className="color-effects">
        <div className="color-blob color-blob-1"></div>
        <div className="color-blob color-blob-2"></div>
        <div className="color-blob color-blob-3"></div>
        <div className="color-blob color-blob-4"></div>
        <div className="color-blob color-blob-5"></div>
        <div className="color-blob color-blob-6"></div>
        <div className="color-blob color-blob-7"></div>
        <div className="color-blob color-blob-8"></div>
      </div>
    </>
  );
}