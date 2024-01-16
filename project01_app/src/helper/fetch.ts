type Args<T = {}> = {
  url: string;
  data?: T;
};
type Method = 'get' | 'post' | 'patch' | 'delete';

const BASE_URL = 'http://localhost:3000';

const configure = (method: Method) => ({
  method,
  header: {
    'Content-Type': 'application/json',
  },
});

export const read = ({ url }: Args) => {
  return fetch(`${BASE_URL}${url}`, configure('get'));
};

export const create = ({ url, data }: Args) => {
  return fetch(`${BASE_URL}${url}`, { ...configure('post'), body: JSON.stringify(data) });
};

export const update = ({ url, data }: Args) => {
  return fetch(`${BASE_URL}${url}`, { ...configure('patch'), body: JSON.stringify(data) });
};

export const remove = ({ url }: Args) => {
  return fetch(`${BASE_URL}${url}`, configure('delete'));
};
