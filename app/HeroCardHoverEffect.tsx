'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Container } from "lucide-react";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "בגלל השירות",
  },
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
  {
    icon: <Container className="w-20 h-20" />,
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
];
