import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-enterprise mb-8 uppercase">Legal Brief & Terms of Service</h1>
                <div className="prose prose-lg text-gray-600 font-sans">
                    <p className="mb-4">
                        Welcome to Shri Annamalai Power Generators. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">1. Use of Website</h2>
                    <p className="mb-4">
                        The content on this website is for general information and use only. It is subject to change without notice. We make no warranties or guarantees regarding the accuracy, completeness, or suitability of the information and materials found on this site.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">2. Intellectual Property</h2>
                    <p className="mb-4">
                        This website contains material which is owned by or licensed to us, including but not limited to the design, layout, look, appearance, and graphics. Unauthorized reproduction is prohibited.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">3. Limitation of Liability</h2>
                    <p className="mb-4">
                        Shri Annamalai Power Generators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website or services.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">4. Governing Law</h2>
                    <p className="mb-4">
                        These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Tamil Nadu / Puducherry.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default LegalPage;
