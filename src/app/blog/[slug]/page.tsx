import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogPosts } from "../page"; // Import the mock data

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return { title: "Not Found" };
    return {
        title: `${post.title} | Shri Annamalai Power Generators`,
        description: post.description,
    };
}

export default async function BlogPost({ params }: { params: Params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const contentParagraphs = [
        "When considering power backup solutions, reliability, capacity, and efficiency are paramount. Our engineering team has dedicated decades to understanding the nuanced energy requirements across industrial, commercial, and residential sectors. To ensure continuous operation, modern generators have evolved significantly from their predecessors—incorporating advanced telemetry, sound attenuation, and hybrid capability.",
        "Choosing between different models like Cummins or Powerica involves assessing peak versus continuous load, potential future expansions, and specific local emission norms (like CPCB IV+). Residential setups generally demand quieter, compact solutions with seamless automatic transfer switches, whereas industrial grids require multi-megawatt setups with parallel synchronization.",
        "Regular maintenance directly impacts the longevity of your investment. It's crucial to follow a stringent protocol for checking oil levels, verifying battery health, and conducting scheduled load bank testing. Such proactive measures prevent unforeseen downtimes when the primary grid fails.",
        "Partnering with authorized distributors ensures that your power infrastructure leverages genuine parts and factory-certified service. Whether you’re scaling a large hospital or securing your home’s essential appliances, investing in top-tier generators translates to absolute peace of mind."
    ];

    return (
        <main className="min-h-screen bg-white">
            <Header variant="light" />

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#64748B] hover:text-brand-action transition-colors mb-8 group uppercase tracking-widest">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                    </Link>

                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-6 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-enterprise leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="relative w-full h-64 md:h-[500px] mb-12 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    <div className="prose prose-lg max-w-none font-sans text-gray-600 leading-relaxed md:leading-[1.8]">
                        <p className="text-xl md:text-2xl font-medium text-brand-enterprise mb-8 !leading-relaxed">
                            {post.description}
                        </p>
                        {contentParagraphs.map((para, i) => (
                            <p key={i} className="mb-6">{para}</p>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-bold tracking-widest uppercase text-brand-enterprise">Share this article</span>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
