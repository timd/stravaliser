import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css'
import Activity from './Activity';
import { getActivities } from '@/lib/strava';

const Strava: NextPage = () => {

    return (
        <div className={styles.homeWrapper}>
            <div>Strava index.tsx</div>
            <Activity
                activity={getActivities()}
            />
        </div>
    )
}

export default Strava;