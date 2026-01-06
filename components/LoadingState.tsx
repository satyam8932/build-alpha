export const LoadingState = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] gap-8 sm:gap-12 px-4">
            <div className="relative">
                <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl animate-pulse"></div>

                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <div className="absolute inset-0 rounded-full border-[3px] border-gray-700/30"></div>

                    <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-indigo-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>

                    <div className="absolute inset-3 sm:inset-4 rounded-full border-[2px] border-transparent border-b-indigo-400 border-l-blue-400 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-30 animate-pulse"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg shadow-blue-500/50 animate-ping"></div>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4 max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">Analyzing Your Strategy</h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4">Running comprehensive health checks and risk analysis on your trading data</p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50 animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }}></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/50 animate-bounce" style={{ animationDelay: '200ms', animationDuration: '1s' }}></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50 animate-bounce" style={{ animationDelay: '400ms', animationDuration: '1s' }}></div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">Performance</span>
                </div>

                <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">Risk</span>
                </div>

                <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium">Health</span>
                </div>
            </div>
        </div>
    );
};
