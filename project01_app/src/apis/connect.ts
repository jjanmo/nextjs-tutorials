import { Connection } from '@/interface/connect';

export const BASE_URL = 'http://localhost:3000';

export const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export async function getConnectData() {
  const response = await fetch(`${BASE_URL}/api/connect`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/connect]`);

  const data = (await response.json()) as Connection[];
  return data;
}

export async function getConnectDetailData(id: string) {
  const response = await fetch(`${BASE_URL}/api/connect/${id}`, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/connect/${id}]`);

  const data = (await response.json()) as Connection;
  return data;
}

export async function deleteConnectData(id: string) {
  const response = await fetch(`${BASE_URL}/api/connect/${id}`, {
    method: 'DELETE',
    ...options,
  });

  if (!response.ok) throw new Error(`Failed to delete [/connect${id}]`);

  const data = (await response.json()) as Connection;
  return data;
}
