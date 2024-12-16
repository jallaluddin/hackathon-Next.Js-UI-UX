import React from 'react'
import Image from 'next/image';
const FoodCategory1 = () => {
  return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0D0D0D] px-6 pt-16 md:px-16 lg:px-24 space-y-8">
          <div className="text-center md:mt-32 space-y-4">
        <p className="font-greatvibes text-[16px] md:text-[18px] font-normal text-[#FF9F0D]"> Food Category</p>
    <h2 className="font-helvetica text-[28px] md:text-[36px] lg:text-[48px] font-bold text-[#FFFFFF]"><span className='text-[#FF9F0D]'>Ch</span>oose Food Iteam</h2>
          </div>
    
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 px-28 gap-6 lg:grid-cols-4 gap-2 items-center justify-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/food1.png"
                alt="Partner 1"
                width={306}
                height={329}
                className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/food2.png"
                alt="Partner 2"
                width={306}
                height={329}
                className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/food3.png"
                alt="Partner 3"
                width={306}
                height={329}
                className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/food4.png"
                alt="Partner 4"
                width={306}
                height={329}
                className="w-full max-w-[240px] sm:max-w-[140px] lg:max-w-[240px] h-auto"
              />
            </div>
          </div>
        </div>
      );
    };

export default FoodCategory1