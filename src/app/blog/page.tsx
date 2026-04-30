import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Blog | Shri Annamalai Power Generators",
    description: "Read our latest articles on residential generators, industrial power backup, maintenance tips, and more.",
    keywords: "Generator blog, Home power backup tips, Industrial vs residential generators, Generator maintenance",
};

export const blogPosts = [
    {
        id: 1,
        title: "Choosing the Right Generator for Home",
        slug: "choosing-right-generator-home",
        description: "A comprehensive guide on evaluating home power needs and selecting the ideal residential generator for reliable power backup.",
        image: "https://as2.ftcdn.net/v2/jpg/02/94/73/77/1000_F_294737756_KjCqEGclnmeqUPid17G1VFpYaHTHkLVu.jpg?q=80&w=1074&auto=format&fit=crop",
        date: "April 1, 2026",
        author: "Engineering Team",
    },
    {
        id: 2,
        title: "Industrial vs Residential Generators",
        slug: "industrial-vs-residential-generators",
        description: "Understand the key differences between industrial and residential generators, including load capacity, maintenance, and setup.",
        image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "March 20, 2026",
        author: "Technical Support",
    },
    {
        id: 3,
        title: "Maintenance Tips for Generators",
        slug: "maintenance-tips-generators",
        description: "Prolong the life of your power backup solutions with these simple yet effective generator maintenance tips.",
        image: "https://plus.unsplash.com/premium_photo-1661963824822-1cb3a0db75f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "March 10, 2026",
        author: "Service Dept",
    },
    {
        id: 4,
        title: "Benefits of Cummins Generators",
        slug: "benefits-cummins-generators",
        description: "Explore why Cummins is a trusted brand for both commercial and residential power infrastructure globally.",
        image: "https://images.unsplash.com/photo-1670875329379-de986110c8ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "February 25, 2026",
        author: "Sales Team",
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50 selection:bg-brand-action/30 selection:text-brand-enterprise">
            <Header variant="light" />

            <section className="relative pt-32 pb-24 bg-brand-enterprise text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-action opacity-10 skew-x-12 translate-x-1/3 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <span className="text-brand-action font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Knowledge Hub</span>
                    <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6">
                        Power &amp; <span className="text-brand-action">Insights</span>
                    </h1>
                    <p className="text-lg text-blue-100/80 font-sans leading-relaxed max-w-2xl mx-auto">
                        Discover expert guides, maintenance tips, and the latest trends in residential and industrial generators.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                                <div className="h-64 md:h-80 w-full relative overflow-hidden bg-gray-100">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-black text-brand-enterprise mb-4 group-hover:text-brand-action transition-colors">{post.title}</h3>
                                    <p className="text-gray-500 font-sans leading-relaxed mb-8 flex-grow">
                                        {post.description}
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-bold text-brand-action gap-2 group-hover:gap-3 transition-all">
                                        READ MORE <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
