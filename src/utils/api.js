const API_ENDPOINT = "http://localhost:8000/tasks/";

export const fetchTasks = async () => {
  const res = await fetch(API_ENDPOINT);

  return res.json();
};

export const fetchSigleTask = async (id) => {
  const res = await fetch(API_ENDPOINT + id);

  return res.json();
};

export const createTask = async ({ title, body }) => {
  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title, body }),
  });

  return res.json();
};

export const editTask = async ({ id, title, body }) => {
  const res = await fetch(API_ENDPOINT + id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title, body }),
  });

  return res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(API_ENDPOINT + id, {
    method: "DELETE",
  });

  return res.json();
};
