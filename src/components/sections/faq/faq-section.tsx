'use client';

import { Badge } from '@/components/ui/badge';
import React from 'react';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import FadeIn from '@/components/animations/fade-in';
import FaqAccordion from './FaqAccordion';
export default function FaqSection() {
  return (
    <FadeIn direction="up" distance={40} duration={0.8} className="px-8 py-[42px] sm:py-[85px] w-full flex items-center justify-center">
      <div className="w-[1408px]">
        <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.2} className="w-full flex flex-col items-center justify-center gap-[23.09px]">
          <Badge variant="customBadgeStyle">FAQ</Badge>
          <h1 className="titleStyle text-center max-w-[376px] sm:max-w-[1024px]">
            Common <span className="gradientTextColor">Questions</span>
          </h1>
        </StaggeredFadeIn>

        <div className="max-w-[832px] mx-auto mt-[64px]">
          <FaqAccordion />
        </div>
      </div>
    </FadeIn>
  );
}
