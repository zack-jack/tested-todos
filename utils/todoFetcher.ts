export const todoFetcher = (url: string) => fetch(url).then((r) => r.json());
