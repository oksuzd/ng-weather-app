export interface ErrorMessage {
  error: 'region' | 'extensions';
  message: string;
  location?: string | undefined;
}