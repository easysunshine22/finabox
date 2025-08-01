import { Badge } from '@/components/ui/badge';
import React from 'react';
import checkIcon from '@/assets/icons/check-icon.svg';
import whyUsImg from '@/assets/whyus.png';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import HoverCard from '@/components/animations/hover-card';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';

const data = [
  {
    icon: checkIcon,
    title: 'Built for Clarity & Compliance',
    description: 'Give your customers visibility and peace of mind — while cutting SMS costs and staying audit-ready.'
  },
  {
    icon: checkIcon,
    title: 'Fast to Integrate, Easy to Use',
    description: 'Use our secure API or on-prem agent to start dispatching alerts instantly. No need to change your core system.'
  },
  {
    icon: checkIcon,
    title: 'Financial-Grade Security',
    description: 'All messages are encrypted end-to-end, with full access control and data protection built in.'
  }
];

export default function WhyUsSection() {
  return (
    <FadeIn 
      direction="up"
      distance={30}
      duration={0.7}
      className="px-8 w-full flex items-center justify-center mb-[88px]"
    >
      <div className="w-full max-w-[1408px] flex flex-col">
        <div className="flex flex-col-reverse xl:flex-row gap-[24px] sm:gap-[112px] justify-between">
          <div className="w-full max-w-[100%] xl:max-w-[560px] flex flex-col gap-[40px]">
            <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.3}>
              <div className="flex flex-col gap-[23.09px]">
                <Badge variant="customBadgeStyle">Why Us</Badge>
                <h1 className="titleStyle">
                  Why<span className="gradientTextColor"> Finabox</span>
                </h1>
              </div>
            </StaggeredFadeIn>

            <div className="flex flex-col gap-[32px]">
              {data.map((items, index) => (
                <FadeIn 
                  key={index}
                  direction="up"
                  delay={0.4 + (index * 0.15)}
                  duration={0.6}
                >
                  <HoverCard hoverScale={1.01} className="rounded-lg transition-colors duration-300">
                    <div className="flex flex-col gap-[16px]">
                      <div className="flex items-center gap-[10px]">
                        <Image 
                          src={items.icon} 
                          alt="Check Icon" 
                          className="w-6 h-6 transition-transform duration-300 hover:scale-110" 
                        />
                        <h3 className="text-white text-xl sm:text-2xl font-semibold">{items.title}</h3>
                      </div>
                      <p className="text-white/50 text-base font-normal hover:text-white/70 transition-colors duration-300">
                        {items.description}
                      </p>
                    </div>
                  </HoverCard>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn 
            direction="left" 
            delay={0.3}
            duration={0.8}
            className="flex-1 relative min-h-[376px] sm:min-h-[450px] md:min-h-[600px] xl:min-h-[400px] aspect-w-16 aspect-h-9 xl:aspect-none"
          >
            <HoverCard hoverScale={1.01} className="w-full h-full">
              <Image 
                src={whyUsImg} 
                alt="Why Us" 
                fill 
                className="object-cover w-full h-full rounded-lg transition-transform duration-500 hover:scale-[1.01]" 
                priority 
              />
            </HoverCard>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
}