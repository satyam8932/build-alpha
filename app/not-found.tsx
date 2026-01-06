import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-background flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
                <div className="max-w-2xl w-full text-center">
                    <div className="mb-8 sm:mb-12">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full"></div>
                            <h1 className="relative text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">404</h1>
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Page Not Found</h2>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">The page you&apos;re looking for doesn&apos;t exist or has been moved to a different location.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                        <Link href="/status" className="inline-flex items-center gap-2 bg-card border-2 border-border hover:border-blue-500/50 text-foreground font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg">
                            Service Status
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            Need help?{' '}
                            <Link href="/" className="text-blue-500 hover:text-blue-600 font-medium underline decoration-blue-500/30 hover:decoration-blue-600">
                                Contact support
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
