import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-enterprise mb-8 uppercase">Privacy Policy</h1>
                <div className="prose prose-lg text-gray-600 font-sans">
                    <p className="mb-4">
                        At Shri Annamalai Power Generators, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">Information We Collect</h2>
                    <p className="mb-4">
                        We may collect personal information such as your name, email address, phone number, and technical requirements when you voluntarily submit inquiries or contact us through our website forms.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">How We Use Your Information</h2>
                    <p className="mb-4">
                        The information we collect is used solely for the purpose of responding to your inquiries, providing technical support, fulfilling your requests for products and services, and improving our customer service. We do not sell or share your personal information with third parties for marketing purposes.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">Data Security</h2>
                    <p className="mb-4">
                        We implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                    </p>
                    <h2 className="text-2xl font-bold text-brand-enterprise mt-8 mb-4">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns about our Privacy Policy, please contact us at sapgenekkl@gmail.com.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default PrivacyPolicyPage;
