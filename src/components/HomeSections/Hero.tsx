import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-full'>
            <div className='flex flex-col items-center justify-center lg:w-[100%] w-full h-[100vh] lg:h-[56.25vw] relative '>
                {/* Video */}
                <video autoPlay muted loop playsInline className='object-cover absolute top-0 left-0 w-full h-full' src="/heroV.mp4"></video>
                {/* Overlay */}
                <span className='absolute w-full h-full z-[1] HeroOverlyFull'></span>
                <span className='absolute w-full h-[15vw] bottom-0 z-[1] HeroOverlayBottom'></span>
                {/* Content */}
                <div className='lg:w-[45.0520833333vw] pb-[20vw] gap-y-[8px] sm:pb-[40vw] lg:pb-[7.91666666667vw] w-[95%] flex flex-col items-center justify-center text-center z-[3] absolute'>
                    <h1 className='text-50 font-extrabold text-white opacity-90 tracking-widest'>Threadley</h1>
                    <p className='text-30 font-[400] text-white opacity-90 tracking-wider italic'>&quot;Timeless style meets bold, custom creativity&quot;</p>
                </div>
            </div>
            <div className='absolute bottom-[5%] right-[5%] z-[3]'>
                <h2 className='lg:text-[4.8828125vw] text-[30px] font-extrabold text-black opacity-70 tracking-widest'>Winter&apos;25/26</h2>
            </div>
        </div>
    )
}

export default Hero


// <div className='lg:w-[45.0520833333vw] pb-[20vw] sm:pb-[40vw] lg:pb-[7.91666666667vw] w-[95%] flex flex-col items-center justify-center text-center z-[3] absolute'>
//                     {/* Breadcrums */}
//                     <div
//                         data-aos="fade"
//                         className='flex flex-row gap-x-[0.78125vw] items-center '>
//                         <div className='lg:w-[1.25vw] cursor-pointer w-[20px] h-[20px] lg:h-[1.25vw] relative'>
//                             <Image src={"/home.svg"} alt='home icon' fill />
//                         </div>
//                         <div className='lg:w-[0.46927083333vw] rtl:scale-x-[-1] w-[15px] h-[15px] lg:h-[0.84166666666vw] relative'>
//                             <Image src={"/Rightar.svg"} className='text-[#D1D1D1]' alt='home icon' fill />
//                         </div>
//                         <span className='text-[#FFF] cursor-pointer lg:text-[1.04166666667vw] text-[18px] lg:leading-[1.5625vw]'>College life</span>
//                     </div>
//                     {/* Heading */}
//                     <h1
//                         data-aos="fade-up"
//                         className='lg:mt-[1.04166666667vw] mt-[15px] w-full lg:w-[43.8541666667vw] text-[#FFF] lg:text-[3.64583333333vw] text-[35px] leading-[50px] lg:leading-[4.16666666667vw]'>Thrive into Our College Tour Experience</h1>
//                     {/* desc */}
//                     <p
//                         data-aos="fade-down"
//                         className='lg:mt-[1.04166666667vw] mt-[15px] w-full lg:w-[45.0520833333vw] text-[#E5E5E5] lg:text-[1.14583333333vw] text-[18px] leading-[26px] lg:leading-[1.66666666667vw]'>Experience the thrill of college life, where each student embark on a transformative journey of learning, personal growth, lifelong connections, and a vibrant community. Engaging in dynamic classes, embrace diverse extracurricular activities, and discovering new passions, fostering their development into confident and well-rounded leaders of the future.</p>
//                     {/* Play Button */}
//                     <button
//                         data-aos="fade"
//                         className='lg:mt-[2.08333333333vw] mt-[30px] flex flex-row justify-center gap-x-[10px] lg:gap-x-[0.52083333333vw] items-center z-[2] lg:rounded-[1.61458333333vw] rounded-[31px] ring-[1px] ring-[#FFF] pl-[10px] pr-[10px] pt-[8px] pb-[8px] lg:pt-[0.625vw] lg:pb-[0.625vw] lg:pl-[1.30208333333vw] lg:pr-[1.30208333333vw]'>
//                         <div className='rtl:scale-x-[-1] lg:w-[1.30208333333vw] w-[20px] h-[20px] lg:h-[1.30208333333vw] relative'>
//                             <Image src={"/play.svg"} alt='play' fill />
//                         </div>
//                         <span className='lg:text-[1.14583333333vw] text-[18px] leading-[26px] font-[500] lg:leading-[1.66666666667vw] text-[#FFF]'>Play Tour Video</span>
//                     </button>
//                 </div>