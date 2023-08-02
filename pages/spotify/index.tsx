import type { NextPage } from 'next';
import { UserButton } from "@clerk/nextjs";

const Spotify: NextPage = () => {
    return (
        <div>
            <header>
				<UserButton afterSignOutUrl="/"/>
			</header>
            <div>Spotify</div>
        </div>
    )
}

export default Spotify;