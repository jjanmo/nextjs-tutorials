import { BASE_URL, requestOptions } from '@/constants/fetch';
import { Connection } from '@/interface/connect';

export async function getConnectData() {
  const response = await fetch(`${BASE_URL}/api/connect`, {
    method: 'GET',
    ...requestOptions,
    next: {
      tags: ['connect'],
    },
  });
  if (!response.ok) throw new Error('Failed to fetch `/connect`');

  const data = (await response.json()) as Connection[];
  return data;
}
