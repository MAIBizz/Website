import "./global.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.maibizz.be"),
    title: {
        default: "MAIBizz — AI Automation Agency",
        template: "%s | MAIBizz",
    },
    description: "AI agents & automations that remove busywork and grow revenue. We wire AI into Gmail, Slack, Drive, WordPress, PostgreSQL—and your workflows.",
    keywords: ["AI automation", "chatbots", "RAG", "n8n", "Zapier", "Make", "Gmail", "Slack", "WordPress", "PostgreSQL", "Belgium", "MAIBizz"],
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "https://www.maibizz.be",
        title: "MAIBizz — AI Automation Agency",
        description: "Practical AI that plugs into your stack.",
        siteName: "MAIBizz",
        images: [
            { url: "/og-maibizz.png", width: 1200, height: 630, alt: "MAIBizz — AI Automation" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MAIBizz — AI Automation Agency",
        description: "AI that saves time & grows revenue.",
        images: ["/og-maibizz.png"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    category: "technology",
};

export const viewport: Viewport = {
    themeColor: "#0a0f14",
    colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const orgJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MAIBizz",
        "url": "https://www.maibizz.be",
        "logo": "https://www.maibizz.be/logo.png",
        "sameAs": [
            "https://www.linkedin.com/company/maibizz"
        ],
        "contactPoint": [{
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "info@maibizz.be",
            "areaServed": "EU"
        }]
    };

    return (
        <html lang="en">
        <body className={`${inter.className} min-h-screen`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 badge">Skip to content</a>
        {children}
        <script
            type="application/ld+json"
            // @ts-ignore
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        </body>
        </html>
    );
}
