import React, {useState, useEffect}  from 'react';
import ActivityDetail from './ActivityDetail.jsx';

const ActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("https://aircall-job.herokuapp.com/activities")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log('data', data)
                setActivities(data);
            })
    }, [])
    return (
        (
        <div className="feed-box">
            {activities.map(activity => (
                <ActivityDetail key={activity.id} activity={activity}/>
            ))}
        </div>
        )
    );
};

export default ActivityFeed;
