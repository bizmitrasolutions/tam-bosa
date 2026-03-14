import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/data/blog-posts";
import ClientPage from "./ClientPage";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: `${post.metaDescription} Call +91 87222 11666 for bookings at TAM-BoSa.`,
        alternates: {
            canonical: `https://www.tambosa.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            type: "article",
            publishedTime: post.publishedDate,
            modifiedTime: post.lastVerified,
            url: `https://www.tambosa.com/blog/${post.slug}`,
            images: [{ url: post.heroImage, alt: post.heroAlt }],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 3);

    return (
        <>
            <ClientPage post={post} relatedPosts={relatedPosts} />

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "description": post.metaDescription,
                        "image": `https://www.tambosa.com${post.heroImage}`,
                        "datePublished": post.publishedDate,
                        "dateModified": post.lastVerified,
                        "author": {
                            "@type": "Organization",
                            "name": "TAM-BoSa Beach Retreat",
                            "url": "https://www.tambosa.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "TAM-BoSa Beach Retreat",
                            "url": "https://www.tambosa.com"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://www.tambosa.com/blog/${post.slug}`
                        }
                    })
                }}
            />

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.tambosa.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Travel Guide",
                                "item": "https://www.tambosa.com/blog"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.title,
                                "item": `https://www.tambosa.com/blog/${post.slug}`
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
