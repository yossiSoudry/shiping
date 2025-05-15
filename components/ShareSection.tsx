'use client'

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Share2 } from 'lucide-react';

// Dynamically import icons to avoid hydration mismatch
const Facebook = dynamic(() => import('lucide-react').then(mod => mod.Facebook), { ssr: false });
const Twitter = dynamic(() => import('lucide-react').then(mod => mod.Twitter), { ssr: false });
const Linkedin = dynamic(() => import('lucide-react').then(mod => mod.Linkedin), { ssr: false });
const WhatsappIcon = dynamic(() => import('react-icons/bs').then(mod => mod.BsWhatsapp), { ssr: false });

interface ShareSectionProps {
  title: string;
}

const ShareSection = ({ title }: ShareSectionProps) => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render anything during SSR
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Share2 className="w-5 h-5 text-orange-500" />
        שתפו את המאמר
      </h3>
      <div className="flex gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          {Facebook && <Facebook className="w-5 h-5" />}
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          {Twitter && <Twitter className="w-5 h-5" />}
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800/90transition-colors"
        >
          {Linkedin && <Linkedin className="w-5 h-5" />}
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          {WhatsappIcon && <WhatsappIcon className="w-5 h-5" />}
        </a>
      </div>
    </div>
  );
};

export default ShareSection;