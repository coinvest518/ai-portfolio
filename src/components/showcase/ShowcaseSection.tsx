'use client';

import React, { useState } from 'react';
import { Flex, Text, Heading, Card, Button, Icon, SmartLink, RevealFx, Scroller } from '@/once-ui/components';
import { ColorScheme, ColorWeight } from '@/once-ui/types';

interface ShowcaseItem {
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string;
  trending?: boolean;
  colorScheme: ColorScheme;
  secondaryIcon: string;
  tertiaryIcon?: string;
}

// Updated showcase items with better icons and more descriptive content
const showcaseItems: ShowcaseItem[] = [
  {
    title: "AI Social Media Generator",
    description: "Create engaging posts, captions, and visual content for multiple platforms with our AI-powered tool.",
    icon: "brain",
    link: "https://omnisocial.icu",
    category: "Content Creation",
    trending: true,
    colorScheme: "brand",
    secondaryIcon: "share",
    tertiaryIcon: "image",
  },
  {
    title: "AI Chatbot Development",
    description: "A Mini Course on how to build your own AI chatbot using Ai.",
    icon: "bot",
    link: "https://theleap.co/creator/coinvest/digital_download/build-your-own-chatbot-ai-for-everyone",
    category: "AI Chatbot DIY",
    colorScheme: "accent",
    secondaryIcon: "messageSquare",
    tertiaryIcon: "code",
  },
  {
    title: "AI Referral App",
    description: "Ai choices the prize pool wiiner from refferal links",
    icon: "sparkles",
    link: "https://santaspot.xyz",
    category: "App Development",
    colorScheme: "info",
    secondaryIcon: "fileText",
    tertiaryIcon: "check",
  },
  {
    title: "AI Credit Disputer - Coming Soon",
    description: "Ger specialized and FCRA compliant credit reports using AI.",
    icon: "image",
    link: "/work/projects/en/ai-image-generation",
    category: "Ai & Finance",
    colorScheme: "warning",
    secondaryIcon: "palette",
    tertiaryIcon: "brain",
  },
  {
    title: "Voice Recognition System",
    description: "Implement accurate speech-to-text capabilities with natural language understanding.",
    icon: "mic",
    link: "https://omniai.icu/",
    category: "Automation",
    colorScheme: "danger",
    secondaryIcon: "headphones",
    tertiaryIcon: "bot",
  },
];

// Helper function to get the correct border class for hover effect
const getBorderHoverClass = (colorScheme: ColorScheme) => {
  switch (colorScheme) {
    case 'brand': return 'hover-border-brand-strong';
    case 'accent': return 'hover-border-accent-strong';
    case 'success': return 'hover-border-success-strong';
    case 'info': return 'hover-border-info-strong';
    case 'warning': return 'hover-border-warning-strong';
    case 'danger': return 'hover-border-danger-strong';
    default: return 'hover-border-brand-strong';
  }
};

export default function ShowcaseSection() {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <RevealFx translateY="16" delay={0.2}>
      <Flex 
        direction="column" 
        gap="xl" 
        fillWidth 
        maxWidth="xl" 
        paddingY="xl" 
        paddingX="xl"
        className="mobile:padding-x-m tablet:padding-x-l"
      >
        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">Featured Projects</Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" style={{ maxWidth: '48rem' }}>
            Explore our innovative AI-powered solutions designed to transform your digital experience.
          </Text>
        </Flex>

        <Scroller direction="row" contained>
          <Flex direction="row" gap="l" style={{ paddingBottom: '8px' }}>
            {showcaseItems.map((item, index) => {
              const borderWeak = `${item.colorScheme}-weak` as `${ColorScheme}-${ColorWeight}`;
              const colorStrong = `${item.colorScheme}-strong` as `${ColorScheme}-${ColorWeight}`;
              const hoverClass = getBorderHoverClass(item.colorScheme);
              const isHovered = hoveredCard === index;
              
              return (
                <SmartLink 
                  key={index} 
                  href={item.link} 
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card
                    background="surface"
                    border={borderWeak}
                    padding="l"
                    style={{ 
                      width: '320px',
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      transform: isHovered ? 'translateY(-5px)' : 'none',
                    }}
                    className={`hover-shadow-l ${hoverClass}`}
                  >
                    <Flex direction="column" gap="m">
                      <Flex justifyContent="space-between" alignItems="start">
                        <Flex
                          background={borderWeak}
                          padding="m"
                          radius="m"
                          style={{ 
                            transition: 'transform 0.5s ease',
                            transform: isHovered ? 'rotate(5deg) scale(1.05)' : 'none',
                          }}
                        >
                          <Icon name={isHovered && item.tertiaryIcon ? item.tertiaryIcon : item.icon} size="l" onBackground={colorStrong} />
                        </Flex>
                        {item.trending && (
                          <Flex
                            background="brand-weak"
                            padding="s"
                            radius="s"
                            gap="xs"
                            alignItems="center"
                            style={{
                              animation: isHovered ? 'pulse 1.5s infinite' : 'none',
                            }}
                          >
                            <Icon name="star" size="s" onBackground="brand-strong" />
                            <Text variant="label-strong-s" onBackground="brand-strong">Popular</Text>
                          </Flex>
                        )}
                      </Flex>
                      <Flex direction="column" gap="s">
                        <Text variant="heading-strong-m">{item.title}</Text>
                        <Text variant="body-default-s" onBackground="neutral-medium">
                          {item.description}
                        </Text>
                      </Flex>
                      <Flex justifyContent="space-between" alignItems="center">
                        <Flex
                          background={borderWeak}
                          padding="xs"
                          radius="s"
                          gap="xs"
                          alignItems="center"
                          style={{ width: 'fit-content' }}
                        >
                          <Icon 
                            name={item.secondaryIcon} 
                            size="xs" 
                            onBackground={colorStrong} 
                            style={{
                              transition: 'transform 0.3s ease',
                              transform: isHovered ? 'rotate(360deg)' : 'none',
                            }}
                          />
                          <Text variant="label-default-s" onBackground={colorStrong}>{item.category}</Text>
                        </Flex>
                        <Flex 
                          background={borderWeak}
                          padding="xs"
                          radius="full"
                          style={{
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          <Icon 
                            name="arrowRight" 
                            size="s" 
                            onBackground={colorStrong}
                            style={{
                              transition: 'transform 0.3s ease',
                              transform: isHovered ? 'translateX(2px)' : 'none',
                            }}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Card>
                </SmartLink>
              );
            })}
          </Flex>
        </Scroller>

        <style jsx global>{`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </Flex>
    </RevealFx>
  );
}
