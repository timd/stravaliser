import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css'
import Activity from './Activity';
import { getActivities } from '@/lib/strava';
import { useEffect, useState } from 'react';


const Strava: NextPage = () => {
    
    const [activity, setActivity] = useState<Object>();
    
    const fetchActivity = async () => {
        const getActivity = await getActivities();
        setActivity(getActivity);
        console.log(getActivity);
    };

    useEffect(() => { fetchActivity() }, []);

    return (
        <div className={styles.homeWrapper}>
            <div>Strava index.tsx</div>
            <Activity
                activity={ activity }
            />
        </div>
    )
}

export default Strava;