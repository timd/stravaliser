// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAthlete } from '@/lib/strava';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getAthlete();
  res.status(200).json({ response })
}
