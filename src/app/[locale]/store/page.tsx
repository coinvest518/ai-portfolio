import { Flex, Grid, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

// Define Product type
interface Product {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    price: number;
    buyButtonLink: string;
}

async function fetchProducts(): Promise<Product[]> {

    return [
        {
            id: "1",
            title: "Magical Artifact",
            description: "A powerful mystical object with unknown origins",
            imageSrc: "/images/gallery/img-01.jpg",
            price: 299.99,
            buyButtonLink: "/checkout/1",
        },
        {
            id: "2", 
            title: "Enchanted Scroll",
            description: "Ancient wisdom captured in a delicate scroll",
            imageSrc: "/images/", 
            price: 129.50,
            buyButtonLink: "/checkout/2",
        }
    ];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations("products");
    const title = t("title");
    const description = t("description");
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/store`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

// Main Products component
export default async function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
    // Set the request locale for internationalization
    unstable_setRequestLocale(locale);
    
    // Fetch translations and products
    const t = await getTranslations("products");
    const products = await fetchProducts();

    return (
        <Flex fillWidth padding="24">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": t("title"),
                        "description": t("description"),
                        "mainEntity": {
                            "@type": "Product",
                            "name": t("title"),
                            "offers": products.map((product) => ({
                                "@type": "Offer",
                                "price": product.price,
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/InStock",
                                "url": `${baseURL}${product.buyButtonLink}`
                            }))
                        }
                    }),
                }}
            />

            <Grid columns="3col" gap="24" tabletColumns="2col" mobileColumns="1col">
                {products.map((product) => (
                    <Flex 
                        key={product.id} 
                        direction="column" 
                        background="neutral-weak" 
                        padding="16" 
                        radius="l"
                    >
                        <Image 
                            src={product.imageSrc} 
                            alt={product.title} 
                            width={300} 
                            height={200} 
                            style={{ objectFit: 'contain' }}
                        />
                        <Text variant="body-strong-m" onBackground="neutral-strong">
                            {product.title}
                        </Text>
                        <Text variant="body-default-m" onBackground="neutral-medium">
                            {product.description}
                        </Text>
                        <Text variant="body-strong-s" onBackground="neutral-medium">
                            Price: ${product.price.toFixed(2)}
                        </Text>
                        <Link 
                            href={product.buyButtonLink} 
                            className="Button_button__ROudt Button_primary__vsG5A Button_s__EYzdP Button_fitContent__f8yCD"
                        >
                            Buy Now
                        </Link>
                    </Flex>
                ))}
            </Grid>
        </Flex>
    );
}