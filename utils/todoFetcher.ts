export const todoFetcher = (url: string) => {
  const last = url.split("/").pop();

  if (!last || last === "todos") return { todos: [] };

  fetch(url).then((r) => r.json());
};
