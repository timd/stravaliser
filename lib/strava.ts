const ATHLETE_ENDPOINT = `https://www.strava.com/api/v3/athlete`;
const ATHLETE_ACTIVITIES_ENDPOINT = 'https://www.strava.com/api/v3/athlete/activities'
const STREAM_ENDPOINT = 'https://www.strava.com/api/v3/activities'
 
export const getAthlete = async () => {

  const access_token = process.env.STRAVA_CLIENT_SECRET || '';
  const url = `${ATHLETE_ENDPOINT}`
  
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }

}

export const testGetActivities = async () => {
  return { name: 'testGetActivities' }
}

export const getActivities = async () => {

  const access_token = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET || '';
  const url = `${ATHLETE_ACTIVITIES_ENDPOINT}`

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    const activities = result.slice(0, 1).map((activity: any) => ({
      name: activity.name,
      distance: activity.distance,
      moving_time: activity.moving_time,
      elapsed_time: activity.elapsed_time,
      type: activity.type,
      sport_type: activity.sport_type,
      id: activity.id,
      start_date: activity.start_date,
      start_date_local: activity.start_date_local,
      timezone: activity.timezone,
      utc_offset: activity.utc_offset,
      map: activity.map,
    }));

    return activities[0];

  } catch (err) {
    console.log(err);
  }

}

export const getStream = async (activity: string) => {

  const access_token = process.env.STRAVA_CLIENT_SECRET || '';
  const url = `${STREAM_ENDPOINT}/${activity}/streams?keys=time,latlng&key_by_type=false`
  
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
 
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }

}
