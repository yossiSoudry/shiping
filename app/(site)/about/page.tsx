import StoryAboutUs from './storyAboutUs';

const page = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Background Image */}
      <div className='fixed inset-0 z-0 top-0'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{backgroundImage: 'url("/assets/about/2022.jpg")'}}
        />
        <div className='absolute inset-0 bg-white/50 backdrop-blur-sm' />
      </div>
      
      {/* Content */}
      <div className='relative z-10'>
        <StoryAboutUs />
      </div>
    </div>
  );
};

export default page;