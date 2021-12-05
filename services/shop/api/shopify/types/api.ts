export type ApiParams = {
  url: string;
  query: string;
};

export type ApiReturnType<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiParams): Promise<{ data: T }>;
}
