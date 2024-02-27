import { BASE_URL, requestOptions } from '@/constants/fetch';
import { Connection } from '@/interface/connect';

export async function getConnectData() {
  const response = await fetch(`${BASE_URL}/api/connect`, {
    method: 'GET',
    ...requestOptions,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/connect]`);

  const data = (await response.json()) as Connection[];
  return data;
}

export async function getConnectDetailData(id: string) {
  const response = await fetch(`${BASE_URL}/api/connect/${id}`, {
    method: 'GET',
    ...requestOptions,
  });

  if (!response.ok) throw new Error(`Failed to fetch [/connect/${id}]`);

  const data = (await response.json()) as Connection;
  return data;
}

export async function deleteConnectData(id: string) {
  const response = await fetch(`${BASE_URL}/api/connect/${id}`, {
    method: 'DELETE',
    ...requestOptions,
  });

  if (!response.ok) throw new Error(`Failed to delete [/connect${id}]`);

  const data = (await response.json()) as Connection;
  return data;
}
