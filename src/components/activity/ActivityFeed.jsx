import React, {useState, useEffect}  from 'react';
import ActivityBox from './ActivityBox.jsx';

const ActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("https://aircall-job.herokuapp.com/activities")
            .then(res => {
                return res.json();
            })
            .then(data => {
                data.filter(e => e.is_archived == false);
                setActivities(data);
            })
    }, [])
    return (
        (
        <div className="feed-box">
            {activities.map(activity => (
                <ActivityBox key={activity.id} activity={activity}/>
            ))}
        </div>
        )
    );
};

export default ActivityFeed;
