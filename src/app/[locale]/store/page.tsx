import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import StoreContent from './store-content'
import { Product } from './types'

interface PageProps {
  params: {
    locale: string
  }
}

// Metadata generation (server-side)
export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations('store')
  return {
    title: t('title'),
    description: t('description')
  }
}

// Server Component wrapper
export default async function Page({ params }: PageProps) {
  unstable_setRequestLocale(params.locale)
  const products = await fetchProducts()
  return <StoreContent products={products} locale={params.locale} />
}

// Keep the fetchProducts function server-side
async function fetchProducts(): Promise<Product[]> {
  return [
    {
      id: "1",
      title: "AI Art Prompt Template",
      description:
        "Create stunning visuals! Unlock your creative potential with my AI art prompt template, designed to help you craft unique visuals effortlessly!",
      imageSrc: "/images/ai-art-template.png",
      price: 0,
      buyButtonLink: "https://theleap.co/@coinvest/digital_download/ai-art-prompt-template-create-stunning-visuals",
      type: "Digital download",
    },
    {
      id: "2",
      title: "Build Your Own Chatbot: AI for Everyone!",
      description:
        "Eager to dive into AI and coding? Join my course to create your very own chatbot app from scratch and unlock new tech skills!",
      imageSrc: "/images/chatbot-course.png",
      price: 0,
      buyButtonLink: "https://theleap.co/@coinvest/digital_download/build-your-own-chatbot-ai-for-everyone",
      type: "Digital download",
    },
    {
      id: "3",
      title: "Try Omni Ai - Ai Multi Chat",
      description:
        "Omni AI is a cutting-edge Generative AI suite. Imagine harnessing the power of not just one AI but a whole ensemble. Chat with all top AI systems in one.",
      imageSrc: "/images/omni-ai.jpg",
      price: 0,
      buyButtonLink: "https://omniai.icu",
      type: "External link",
    },
    {
      id: "4",
      title: "Viral GPT Prompt : 30 Days Evergreen Content",
      description:
        " Create viral-worthy content without the struggle! This AI-powered Notion template helps you plan 30 days of consistent, high-quality posts.",
      imageSrc: "/images/viral-gpt.png",
      price: 0,
      buyButtonLink: "#",
      type: "Digital download",
    },
    {
      id: "5",
      title: "Consistent Characters Guide- MidJourney and GPTs",
      description:
        " Create Flawless, Consistent Characters with Ease! Unlock the secrets of character consistency in our mini-course!",
      imageSrc: "/images/character-guide.jpg",
      price: 0,
      buyButtonLink: "#",
      type: "Digital download",
    },
    {
      id: "6",
      title: "Coming Soon: AI Business Strategy Guide",
      description:
        "Learn how to integrate AI into your business strategy. A comprehensive guide for entrepreneurs and business leaders.",
      imageSrc: "/placeholder.svg",
      price: 0,
      buyButtonLink: "#",
      type: "Digital download",
    },
    {
      id: "7",
      title: "Coming Soon: Advanced Prompt Engineering",
      description:
        "Master the art of prompt engineering. Learn advanced techniques to get the best results from AI language models.",
      imageSrc: "/placeholder.svg",
      price: 0,
      buyButtonLink: "#",
      type: "Digital download",
    },
    {
      id: "8",
      title: "Coming Soon: AI Marketing Automation",
      description:
        "Automate your marketing workflows with AI. From content creation to campaign optimization.",
      imageSrc: "/placeholder.svg",
      price: 0,
      buyButtonLink: "#",
      type: "Digital download",
    },
    {
      id: "9",
      title: "Coming Soon: AI Development Tools",
      description:
        "A curated collection of AI development tools and resources for building next-generation applications.",
      imageSrc: "/placeholder.svg",
      price: 0,
      buyButtonLink: "#",
      type: "Digital download",
    }
  ]
}
