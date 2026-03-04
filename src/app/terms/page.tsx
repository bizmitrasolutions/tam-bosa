import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of service for TAM-BoSa Beach Retreat, Udupi, Karnataka.",
};

export default function Terms() {
    return (
        <div className="bg-[#041B1C] min-h-screen text-foreground pt-36 pb-32 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Terms of Service</h1>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-16">Last updated: March 2026</p>

                <div className="flex flex-col gap-12 text-sm font-light text-foreground/80 leading-loose tracking-wide">
                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">1. Reservations & Booking</h2>
                        <p>All reservations are subject to availability and confirmed only after direct communication with the host via WhatsApp or phone. Submitting an inquiry through our website does not guarantee a booking.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">2. Check-in & Check-out</h2>
                        <p>Check-in time is from 2:00 PM. Check-out time is by 11:00 AM. Early check-in or late check-out may be available upon request and is subject to availability.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">3. Cancellation Policy</h2>
                        <p>Cancellations made at least 48 hours before the scheduled check-in date are eligible for a full refund. No-shows or cancellations made within 48 hours of check-in are non-refundable.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">4. Guest Conduct</h2>
                        <p>Guests are expected to respect the property, other guests, and the surrounding community. Quiet hours are from 10:00 PM to 7:00 AM. Smoking is prohibited indoors. Pets are not allowed on the premises.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">5. Liability & Damages</h2>
                        <p>Guests are responsible for any damage caused to the property during their stay. TAM-BoSa Beach Retreat is not liable for loss or damage to guests&apos; personal belongings.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">6. Third-Party Activities</h2>
                        <p>Activities such as kayaking, jet-skiing, and boat rides mentioned on our website are operated by independent local providers. TAM-BoSa Beach Retreat is not responsible for the safety, pricing, or quality of these third-party services.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">7. Identification</h2>
                        <p>A valid government-issued photo ID is required at check-in for all adult guests as per local regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-primary-soft mb-4">8. Contact</h2>
                        <p>For questions regarding these terms, please contact us at <a href="mailto:tambosabeachretreat@gmail.com" className="text-primary hover:underline">tambosabeachretreat@gmail.com</a> or call <a href="tel:+918722211666" className="text-primary hover:underline">+91 87222 11666</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
