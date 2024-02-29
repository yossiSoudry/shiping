import Image from 'next/image';


export default function Home() {
  return (
    <div className=''>
      <div>

      </div>
      <Image
          width={2000}
          height={1000}
          src="/assets/mini-truck-brand.png"
          alt="Logo"
        />
    </div>
  );
}
