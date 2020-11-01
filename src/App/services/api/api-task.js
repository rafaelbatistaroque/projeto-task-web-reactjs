const API_BASE = "http://localhost:3000/api/v1";
const APP_JSON = { "Content-Type": "application/json" };

export const OBTER_TASKS_FILTRO = (endPoint, enderecoMac) => {
  return {
    url: `${API_BASE}/task/filtro/${endPoint}/${enderecoMac}`,
    options: {
      method: "GET",
      headers: APP_JSON,
    },
  };
};

export const CRIAR_TASK = (body) => {
  return {
    url: `${API_BASE}/task`,
    options: {
      method: "POST",
      headers: APP_JSON,
      body: JSON.stringify(body),
    },
  };
};

export const ATUALIZAR_TASK = (body, id) => {
  return {
    url: `${API_BASE}/task/${id}`,
    options: {
      method: "PUT",
      headers: APP_JSON,
      body: JSON.stringify(body),
    },
  };
};

