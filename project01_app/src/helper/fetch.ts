type Args<T = {}> = {
  url: string;
  data?: T;
};
type Method = 'get' | 'post' | 'patch' | 'delete';

const configure = (method: Method) => ({
  method,
  header: {
    'Content-Type': 'application/json',
  },
});

export const read = ({ url }: Args) => {
  return fetch(url, configure('get'));
};

export const create = ({ url, data }: Args) => {
  return fetch(url, { ...configure('post'), body: JSON.stringify(data) });
};

export const update = ({ url, data }: Args) => {
  return fetch(url, { ...configure('patch'), body: JSON.stringify(data) });
};

export const remove = ({ url }: Args) => {
  return fetch(url, configure('delete'));
};
