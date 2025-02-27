"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Flex, Text } from "@/once-ui/components"
import { useTranslations } from 'next-intl'
import Image from "next/image"
import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import styles from "./store.module.css"
import { Product } from './types'

interface StoreContentProps {
  products: Product[]
  locale: string
}

// Client component for animations
function ProductCard({ product, index }: { product: Product; index: number }) {
  const t = useTranslations('store')
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={styles.productCard}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className={styles.imageContainer}>
        <motion.div
          className={styles.imageWrapper}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.productImage}
            priority
          />
        </motion.div>

        <div
          className={`${styles.productBadge} ${product.type === "External link" ? styles.externalBadge : styles.downloadBadge}`}
        >
          <Text variant="body-default-s" style={{ color: "white", fontWeight: 600 }}>
            {product.type}
          </Text>
        </div>
      </div>

      <Flex direction="column" gap="20" className={styles.productContent}>
        <Text variant="body-strong-l" onBackground="neutral-strong" className={styles.productTitle}>
          {product.title}
        </Text>

        <Text variant="body-default-m" onBackground="neutral-medium" className={styles.productDescription}>
          {product.description}
        </Text>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className={styles.buttonWrapper}
        >
          <Link
            href={product.buyButtonLink}
            className={`${styles.productButton} ${product.type === "External link" ? styles.externalButton : styles.downloadButton}`}
            target={product.type === "External link" ? "_blank" : "_self"}
            rel={product.type === "External link" ? "noopener noreferrer" : ""}
          >
            <span>{product.type === "External link" ? t('visitButton') : t('downloadButton')}</span>
            {product.type === "External link" ? (
              <ExternalLink size={18} className={styles.buttonIcon} />
            ) : (
              <Download size={18} className={styles.buttonIcon} />
            )}
          </Link>
        </motion.div>
        <div className={styles.price}>
          {product.price === 0 ? t('free') : t('paid', { price: product.price })}
        </div>
      </Flex>
    </motion.div>
  )
}

// Main client component
export default function StoreContent({ products, locale }: StoreContentProps) {
  const t = useTranslations('store')
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Flex direction="column" fillWidth className={styles.storeContainer}>
      {/* Animated background elements */}
      <div className={styles.backgroundGradient}></div>
      <div className={styles.backgroundBlur1}></div>
      <div className={styles.backgroundBlur2}></div>

      <motion.div
        ref={headerRef}
        className={styles.storeHeader}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <Text variant="body-strong-xl" className={styles.storeTitle}>
          {t('title')}
        </Text>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Text variant="body-default-l" onBackground="neutral-medium" className={styles.storeSubtitle}>
            {t('description')}
          </Text>
        </motion.div>
      </motion.div>

      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </Flex>
  )
}
