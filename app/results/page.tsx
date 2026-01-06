import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HealthStateBadge } from '@/components/HealthStateBadge';
import { TopReasonsList } from '@/components/TopReasonsList';
import { UpgradeSection } from '@/components/UpgradeSection';
import mockResponse from '@/lib/mock-response.json';

export default function ResultsPage() {
    const { health_state, top_reasons } = mockResponse;

    const simplifiedReasons = top_reasons.map((reason) => ({
        code: reason.code,
        details: reason.details,
    }));

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-background px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-8 sm:mb-12 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Strategy Health Result</h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">A quick structural health check based on your trade history</p>
                    </div>

                    <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        <HealthStateBadge healthState={health_state} />

                        <TopReasonsList reasons={simplifiedReasons} />

                        <UpgradeSection />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
