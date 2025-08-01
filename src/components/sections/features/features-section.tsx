import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { VscArrowRight } from 'react-icons/vsc';
import icon1 from '../../../assets/feature-icons/cardicon1.png';
import icon2 from '../../../assets/feature-icons/cardicon2.png';
import icon3 from '../../../assets/feature-icons/cardicon3.png';
import icon4 from '../../../assets/feature-icons/cardicon4.png';
import icon5 from '../../../assets/feature-icons/cardicon5.png';
import icon6 from '../../../assets/feature-icons/cardicon6.png';
import divider from '../../../assets/horizontal-divider.png';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import HoverCard from '@/components/animations/hover-card';
import FadeIn from '@/components/animations/fade-in';

interface FeatureCard {
  title: string;
  description: string;
  icon: StaticImageData;
}

const features: FeatureCard[] = [
  {
    title: 'Unified Transaction\nMessage View',
    description: 'See all bank transaction messages in one clean inbox, with sender info, timestamps, and status tracking.',
    icon: icon1
  },
  {
    title: 'Instant Dispute\nActions',
    description: 'Allow users to flag unauthorized transactions in real time — with built-in penalties for false claims.',
    icon: icon2
  },
  {
    title: 'Live Status\nSync',
    description: "Get real-time status for every alert (success, pending, failed) from the bank's system to the user.",
    icon: icon3
  },
  {
    title: 'Secure Message\nDelivery',
    description: 'Push alerts using encrypted channels — no SMS, no email, just verified delivery and full control.',
    icon: icon4
  },
  {
    title: 'Smart User\nAccess',
    description: 'Offer biometric login, OTP, and selfie recovery — all while maintaining full compliance and audit logs.',
    icon: icon5
  },
  {
    title: 'Offline & Retry\nSupport',
    description: 'Alerts are cached and retried automatically, ensuring reliability even in poor network conditions.',
    icon: icon6
  }
];

export default function FeaturesSection() {
  return (
    <section className="px-8 w-full flex items-center justify-center">
      <div className="w-[1408px] flex flex-col gap-[121px] py-[64px]">
        <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.2} distance={20} duration={0.6} className="">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-2">
            <div className="w-full flex flex-col gap-[23.09px]">
              <Badge variant="customBadgeStyle">Features</Badge>
              <h1 className="titleStyle">
                Everything You Need for <span className="gradientTextColor">Transactions</span>
              </h1>
            </div>
            <div className="w-full flex items-center md:justify-end">
              <div className="max-w-[417.23px] flex flex-col gap-[42px]">
                <p className="leading-[24px] font-normal text-white/70 hover:text-white/80 transition-colors text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[32px] lg:text-[24px] lg:leading-[40px]">
                  Deliver and manage financial notifications faster, smarter, and more securely — all from one platform.
                </p>
                <Button className="group w-[186px] h-[56px] max-w-[417.23px] rounded-[32px] py-[1px] px-[41px] text-[#000000] font-medium text-[16px] leading-[20px] bg-[#FFFFFF] border border-[#FFFFFF14] flex items-center gap-3 hover:bg-[#f0f0f0] transition-colors duration-300">
                  Try it Now
                  <VscArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </StaggeredFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} direction="up" delay={0.3 + index * 0.1} distance={30} duration={0.6}>
              <HoverCard hoverScale={1.01} hoverElevation className="h-full">
                <Card className="p-[30px] border-[#FFFFFF3D] bg-[#111111] rounded-[32px] flex flex-col h-full group hover:border-[#FFFFFF66] transition-colors duration-300">
                  <CardHeader className="gap-[23.09px] p-0">
                    <Image src={feature.icon} alt={`${feature.title} icon`} width={48} height={48} className="w-12 h-12 transition-transform duration-500 hover:scale-110" />
                    <CardTitle className="text-[28px] sm:text-[36px] font-medium text-white leading-[45px]">
                      {feature.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < feature.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </CardTitle>
                  </CardHeader>
                  <Image src={divider} alt="divider" className="w-full py-[8px] sm:py-[12px] transition-all duration-300 group-hover:opacity-80" />
                  <CardDescription className="text-[#FFFFFF80] font-[400] text-base sm:text-[18px] leading-[25px] transition-colors duration-300 group-hover:text-[#FFFFFFA0]">
                    {feature.description}
                  </CardDescription>
                </Card>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
