export function formatReasonCode(code: string): string {
    return code
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export function getHealthStateIcon(state: string): string {
    const icons: Record<string, string> = {
        TRADE: '✅',
        MONITOR: '⚠️',
        SUPPRESS: '⛔️',
    };
    return icons[state] || '❓';
}
