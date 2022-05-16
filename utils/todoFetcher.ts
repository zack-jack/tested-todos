export const todoFetcher = async (url: string) => {
  const last = url.split("/").pop();

  if (!last || last === "todos") return { todos: [] };

  const res = await fetch(url);
  const data = await res.json();

  return data;
};
