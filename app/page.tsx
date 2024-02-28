import {Button} from '@nextui-org/button'; 
import { Image } from '@nextui-org/react';
import NextImage from "next/image";


export default function Home() {
  return (
    <div className='container h-screen pt-20'>
      <div>

      </div>
      <Image
          as={NextImage}
          width={2000}
          height={1000}
          src="/assets/mini-truck-brand.png"
          alt="Logo"
        />
    </div>
  );
}
