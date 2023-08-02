import Activity from './Activity';
import type { NextPage } from 'next';
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from 'react';
import { getActivities } from '@/lib/strava';
import styles from '../../styles/Home.module.css'

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
            <div>Strava</div>
            <header>
				<UserButton afterSignOutUrl="/"/>
			</header>
            <Activity
                activity={ activity }
            />
        </div>
    )
}

export default Strava;