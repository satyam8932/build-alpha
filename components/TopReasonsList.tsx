import { formatReasonCode } from '@/lib/format-utils';

interface Reason {
    code: string;
    details: string;
}

interface TopReasonsListProps {
    reasons: Reason[];
}

export const TopReasonsList = ({ reasons }: TopReasonsListProps) => {
    const limitationReason = reasons.find((r) => r.code === 'LIMITATION_TRADE_DATA_ONLY');
    const regularReasons = reasons.filter((r) => r.code !== 'LIMITATION_TRADE_DATA_ONLY');

    return (
        <div className="space-y-6 sm:space-y-8">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Why This Result Was Assigned</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Key factors identified in your trade history:</p>
            </div>

            <div className="space-y-4">
                {regularReasons.map((reason, index) => (
                    <div key={index} className="bg-card border-2 border-border rounded-lg sm:rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{formatReasonCode(reason.code)}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.details}</p>
                    </div>
                ))}
            </div>

            {limitationReason && (
                <div className="bg-muted/30 border-2 border-border/50 rounded-lg sm:rounded-xl p-5 sm:p-6 mt-8">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">ℹ️</div>
                        <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">About This Free Check</h3>
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{limitationReason.details}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
