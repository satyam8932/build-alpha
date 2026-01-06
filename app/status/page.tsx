'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { checkHealth } from '@/lib/api-client';
import { HealthCheckResponse } from '@/types/api';

export default function StatusPage() {
    const [status, setStatus] = useState<HealthCheckResponse | null>(null);
    const [isOnline, setIsOnline] = useState<boolean>(false);
    const [lastChecked, setLastChecked] = useState<Date | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchStatus = async () => {
        try {
            const response = await checkHealth();
            setStatus(response);
            setIsOnline(true);
            setLastChecked(new Date());
        } catch {
            setStatus(null);
            setIsOnline(false);
            setLastChecked(new Date());
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 bg-background px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                <div className="container mx-auto max-w-3xl">
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Service Status</h1>
                        <p className="text-base sm:text-lg text-muted-foreground">Real-time health monitoring of the analysis backend</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card border-2 border-border rounded-xl p-6 sm:p-8 shadow-xl">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Connection Status</h2>
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                                    <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>{isOnline ? 'Online' : 'Offline'}</span>
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="text-center py-8">
                                    <div className="inline-block w-8 h-8 border-4 border-border border-t-blue-500 rounded-full animate-spin"></div>
                                    <p className="text-sm text-muted-foreground mt-4">Checking service status...</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-muted/30 rounded-lg p-4">
                                            <p className="text-xs text-muted-foreground mb-1">Service Name</p>
                                            <p className="text-base font-medium text-foreground">{status?.service || 'Unknown'}</p>
                                        </div>
                                        <div className="bg-muted/30 rounded-lg p-4">
                                            <p className="text-xs text-muted-foreground mb-1">Version</p>
                                            <p className="text-base font-medium text-foreground">{status?.version || 'N/A'}</p>
                                        </div>
                                    </div>

                                    {lastChecked && (
                                        <div className="bg-muted/30 rounded-lg p-4">
                                            <p className="text-xs text-muted-foreground mb-1">Last Checked</p>
                                            <p className="text-sm text-foreground">{lastChecked.toLocaleString()}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="mt-6 pt-6 border-t border-border">
                                <button
                                    onClick={fetchStatus}
                                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Refresh Status
                                </button>
                            </div>
                        </div>

                        <div className="bg-muted/30 border border-border rounded-lg p-4 sm:p-6">
                            <h3 className="text-sm font-semibold text-foreground mb-2">About Auto-Refresh</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">This page automatically checks the service status every 30 seconds to ensure real-time monitoring.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
