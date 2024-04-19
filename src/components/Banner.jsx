import Carousel from 'react-elastic-carousel';

const Banner = () => {
  return (
    <Carousel className='h-[50vh] lg:h-[130vh]  '>
      <div style={{ position: 'relative' }} >
        <img src={"https://i.ibb.co/PMT3mm8/intro.jpg"} className='opacity-50  h-[50vh] lg:h-[130vh] ' alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center   font-lato">
          <h1 className=" font-extrabold text-4xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
          <p className="m-5 font-bold  ">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <img src={"https://i.ibb.co/XX8J3gQ/h-2.jpg"} className='opacity-50 h-[50vh] lg:h-[130vh] ' alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center   font-lato">
          <h1 className=" font-extrabold text-4xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
          <p className="m-5 font-bold  ">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}><img src={"https://i.ibb.co/YTVsLL7/s1.jpg"} className='opacity-50 h-[50vh] lg:h-[130vh] ' alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center   font-lato">
          <h1 className=" font-extrabold text-4xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
          <p className="m-5 font-bold  ">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
        </div>
      </div>
      <div style={{ position: 'relative' }} ><img src={"https://i.ibb.co/wLFnDyH/house-shifting.png"} className='opacity-50 h-[50vh] lg:h-[130vh] w-screen' alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center   font-lato">
          <h1 className=" font-extrabold text-4xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
          <p className="m-5 font-bold  ">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
        </div>
      </div>

    </Carousel>
  );
};

export default Banner;
