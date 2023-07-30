// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getStream } from '@/lib/strava';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const query = req.query;
    const { activity } = query;
  
    if (!activity) {
        res.status(400).json({ error: 'Missing activity' })
        return
    }

    const q = activity.toString();
    const response = await getStream(q);

    res.status(200).json({ response })
}