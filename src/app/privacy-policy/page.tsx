import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for TAM-BoSa Beach Retreat, Udupi, Karnataka.",
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-[#041B1C] min-h-screen text-foreground pt-36 pb-32 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Privacy Policy</h1>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-16">Last updated: March 2026</p>

                <div className="flex flex-col gap-12 text-sm font-light text-foreground/80 leading-loose tracking-wide">
                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">1. Information We Collect</h2>
                        <p>When you make a reservation inquiry through our website or WhatsApp, we may collect your name, contact details, preferred travel dates, and number of guests. We only collect information that you voluntarily provide to us.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">2. How We Use Your Information</h2>
                        <p>Your information is used solely to process your reservation inquiry, communicate with you about your stay, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">3. WhatsApp Communication</h2>
                        <p>Our reservation system redirects inquiries to WhatsApp. By submitting an inquiry, you agree to communicate via WhatsApp. WhatsApp&apos;s own privacy policy governs data handled through their platform.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">4. Cookies & Analytics</h2>
                        <p>Our website may use basic analytics to understand visitor traffic and improve user experience. No personally identifiable information is collected through cookies.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">5. Data Security</h2>
                        <p>We take reasonable measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">6. Your Rights</h2>
                        <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at tambosabeachretreat@gmail.com.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">7. Contact</h2>
                        <p>For any privacy-related questions, please reach out to us at <a href="mailto:tambosabeachretreat@gmail.com" className="text-primary hover:underline">tambosabeachretreat@gmail.com</a> or call <a href="tel:+918722211666" className="text-primary hover:underline">+91 87222 11666</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
