import type { AxiosError } from 'axios';

export function extractApiErrorMessage(err: unknown): string {
  const axiosError = err as AxiosError<{ message?: string }>;
  return (
    axiosError?.response?.data?.message ||
    axiosError?.message ||
    "Erreur inconnue"
  );
}
