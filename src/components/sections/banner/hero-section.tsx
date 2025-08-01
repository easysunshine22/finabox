import React from 'react';
import heroImage from '../../../assets/hero-image.png';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';

export default function HeroSection() {
  return (
    <section className="px-8 w-full flex items-center justify-center mt-[110px]">
      <div className="w-[1408px] relative flex flex-col items-center">
        <FadeIn direction="up" delay={0.2} distance={40} duration={0.8}>
          <div className="">
            <Image src={heroImage} width={938} height={704} className="w-[440px] sm:w-[938px]" alt="Hero illustration" priority />
          </div>
        </FadeIn>

        <div className="relative -top-[45px] sm:-top-[80px] md:-top-[90px] lg:-top-[110px] xl:-top-[128px] flex flex-col items-center justify-center">
          {/* <div className="absolute pb-15 -bottom-[180px] sm:-bottom-[220px] md:-bottom-[200px] lg:-bottom-[300px] xl:-bottom-[335px] left-0 right-0 flex flex-col items-center justify-center"> */}
          <FadeIn direction="up" delay={0.4} distance={60} duration={0.8}>
            <h1 className="font-bold gradientTextColor text-[80px] sm:text-[128px] md:text-[128px] lg:text-[200px] xl:text-[256px] leading-[100%] lg:leading-[352px] text-center">
              Finabox
            </h1>
          </FadeIn>

          <StaggeredFadeIn direction="up" initialDelay={0.6} staggerDelay={0.15} distance={20} duration={0.6} className="w-[306px] sm:w-[512px] gap-3 text-center">
            <h3 className="text-[20px] sm:text-[24px] mb-1 text-white leading-[24px] font-medium">The smart, secure inbox for your money</h3>
            <p className="text-[14px] sm:text-[16px] text-[#FFFFFF80] leading-[22px] sm:leading-[24px] font-[400]">
              Cut SMS costs, stay compliant, and deliver instant transaction messages — built for banks and their customers.
            </p>
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
}
