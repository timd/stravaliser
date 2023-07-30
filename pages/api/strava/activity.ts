import type { NextApiRequest, NextApiResponse } from 'next'
import { getActivities } from '@/lib/strava';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const activities = await getActivities()
  res.status(200).json({ activities })
}
