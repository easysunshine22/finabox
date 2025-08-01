import { Badge } from '@/components/ui/badge';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import HoverCard from '@/components/animations/hover-card';
import FadeIn from '@/components/animations/fade-in';
import { pricingData } from '@/components/data/pricing-data';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  return (
    <FadeIn direction="up" distance={40} duration={0.8} className="px-8 py-[85px] w-full flex items-center justify-center">
      <div className="w-[842.66px] flex items-center justify-center flex-col gap-[64px]">
        <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.2} className="w-full flex flex-col items-center justify-center gap-[23.09px]">
          <Badge variant="customBadgeStyle">Pricing</Badge>
          <h1 className="titleStyle text-center max-w-[376px] sm:max-w-[768px]">
            No hidden fees & <span className="gradientTextColor">Subscriptions</span>
          </h1>
        </StaggeredFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {pricingData.plans.map((plan, index) => (
            <HoverCard key={index} className="relative">
              <Card className="p-[33px] border-[#FFFFFF3D] bg-[#111111] rounded-[32px] flex flex-col gap-10 h-full hover:border-[#FFFFFF66] transition-colors duration-300">
                <CardHeader className="p-0 flex flex-col gap-4">
                  <CardTitle className="text-white text-3xl hover:text-white/70 transition-colors duration-300 font-semibold">{plan.name}</CardTitle>
                  <CardDescription className="text-white/50 hover:text-white/70 transition-colors duration-300 text-base font-normal">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-white hover:text-white/70 transition-colors duration-300 text-4xl font-normal flex gap-2.5">
                      {plan.price.amount}
                      <sup className="text-zinc-400 text-sm font-normal">/Per Month</sup>
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="flex flex-col gap-5 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <FadeIn key={featureIndex} direction="up" delay={0.5 + index * 0.15} duration={0.6}>
                        <li className="flex items-center gap-2 group">
                          <Image src={feature.icon} alt="Check icon" width={24} height={24} className="w-6 h-6" />
                          <span className="text-white text-base font-normal group-hover:text-white/70 transition-colors duration-300">{feature.text}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                  <FadeIn direction="up" delay={0.8} duration={0.5}>
                    <div className="flex flex-col gap-[13px]">
                      {plan.buttons.map((button, buttonIndex) => (
                        <HoverCard key={buttonIndex} hoverScale={1.01} hoverElevation>
                          <Button variant="customWithGradient" className={`w-full text-white text-base font-medium ${buttonIndex === 0 ? '' : 'bg-white text-black'}`}>
                            {button.icon && <Image src={button.icon} alt={button.text} width={24} height={24} className="w-6 h-6" />} {button.text}
                          </Button>
                        </HoverCard>
                      ))}
                    </div>
                  </FadeIn>
                </CardContent>
              </Card>
            </HoverCard>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
