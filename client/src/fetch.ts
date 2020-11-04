const DOMAIN_URL = "http://localhost:1323";

export const fetchGet = (path: string): Promise<Response> => {
  return fetch(DOMAIN_URL + path, {
    credentials: "include",
  });
};

export const fetchPost = (path: string, body: unknown): Promise<Response> => {
  return fetch(DOMAIN_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
};
