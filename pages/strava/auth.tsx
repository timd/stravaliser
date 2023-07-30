import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID || '';
const redirectUri = process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI || '';

const stravaAuthUrl = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read,read_all,profile:read_all,profile:write,activity:read,activity:read_all,activity:write`

const StravaAuth: NextPage = () => {
    return (
        <div className={styles.homeWrapper}>
            <div>Strava StravaAuth</div>
            <Link href={stravaAuthUrl}>
                <button>Start Strava Auth</button>
            </Link>
        </div>
    )
}

export default StravaAuth;