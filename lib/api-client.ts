import { AnalyzeResponse, HealthCheckResponse, ApiError } from '@/types/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function analyzeStrategy(file: File): Promise<AnalyzeResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${API_URL}/analyze`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw {
                message: errorData.detail || 'Analysis failed. Please try again.',
                status: response.status,
            } as ApiError;
        }

        return await response.json();
    } catch (error) {
        if ((error as ApiError).message) {
            throw error;
        }
        throw {
            message: 'Unable to connect to analysis service. Please ensure the backend is running.',
            status: 0,
        } as ApiError;
    }
}

export async function checkHealth(): Promise<HealthCheckResponse> {
    try {
        const response = await fetch(`${API_URL}/health`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw {
                message: 'Health check failed',
                status: response.status,
            } as ApiError;
        }

        return await response.json();
    } catch (error) {
        if ((error as ApiError).message) {
            throw error;
        }
        throw {
            message: 'Unable to connect to service',
            status: 0,
        } as ApiError;
    }
}
