import { Badge } from '@/components/ui/badge';
import React from 'react';
import checkIcon from '@/assets/icons/check-icon.svg';
import whatWeBuildForImg from '@/assets/whatbuildfor.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/fade-in';
import HoverCard from '@/components/animations/hover-card';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';

const data = [
  {
    icon: checkIcon,
    title: 'Banks & Fintechs',
    description: 'Cut costs and deliver better alerts — with real-time delivery, built-in dispute tools, and audit logs.'
  },
  {
    icon: checkIcon,
    title: 'Everyday Users',
    description: 'Stay in control of your money. Get instant alerts, view history, and dispute unknown transactions in seconds.'
  }
];

export default function WeBuildForSection() {
  return (
    <FadeIn direction="up" distance={30} duration={0.7} className="px-8 w-full flex items-center justify-center my-[85px]">
      <div className="w-full max-w-[1408px] flex flex-col">
        <div className="flex flex-col xl:flex-row gap-[24px] sm:gap-[112px] justify-between">
          <FadeIn
            direction="right"
            delay={0.3}
            duration={0.8}
            className="flex-1 flex items-center justify-center relative min-h-[376px] sm:min-h-[450px] md:min-h-[600px] xl:min-h-[400px] aspect-w-16 aspect-h-9 xl:aspect-none"
          >
            <HoverCard hoverScale={1.01} className="w-full h-full">
              <Image src={whatWeBuildForImg} alt="Why Us" fill className="object-cover w-full h-full rounded-lg transition-transform duration-500 hover:scale-[1.01]" priority />
            </HoverCard>
          </FadeIn>

          <div className="w-full max-w-[100%] xl:max-w-[560px] flex flex-col gap-[40px]">
            <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.4}>
              <div className="flex flex-col gap-[23.09px]">
                <Badge variant="customBadgeStyle">Who It&apos;s For</Badge>
                <h1 className="titleStyle">
                  We Build<span className="gradientTextColor"> Finabox</span> For
                </h1>
              </div>
            </StaggeredFadeIn>

            <div className="flex flex-col gap-[32px]">
              {data.map((items, index) => (
                <FadeIn key={index} direction="up" delay={0.5 + index * 0.15} duration={0.6}>
                  <HoverCard hoverScale={1.01} className="rounded-lg transition-colors duration-300">
                    <div className="flex flex-col gap-[16px]">
                      <div className="flex items-center gap-[10px]">
                        <Image src={items.icon} alt="Check Icon" className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-white text-xl sm:text-2xl font-semibold">{items.title}</h3>
                      </div>
                      <p className="text-white/50 text-base font-normal hover:text-white/70 transition-colors duration-300">{items.description}</p>
                    </div>
                  </HoverCard>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.8} duration={0.5}>
              <HoverCard hoverScale={1.01} hoverElevation>
                <Button variant="customWithGradient" className="transition-all h-[56px] duration-300 hover:shadow-[0_0_15px_rgba(137,33,255,0.3)]">
                  Get Started
                </Button>
              </HoverCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
