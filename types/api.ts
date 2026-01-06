export interface Reason {
    code: string;
    severity: string;
    details: string;
}

export interface AnalyzeResponse {
    health_state: string;
    reasons: Reason[];
}

export interface HealthCheckResponse {
    status: string;
    service: string;
    version: string;
}

export interface ApiError {
    message: string;
    status?: number;
}
