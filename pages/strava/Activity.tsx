export default function Activity({activity}: any) {
    if (!activity) return <div>loading...</div>;
    return (
        <div>
            <h1>Activity</h1>
            <p>name = {activity.name}</p>
        </div>
    )
}