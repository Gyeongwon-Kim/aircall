import React, {useState, useEffect}  from 'react';
import { useSelector } from 'react-redux';

import ActivityBox from './ActivityBox.jsx';

const ActivityFeed = () => {
    const [activities, setActivities] = useState([]);
    const isArchivedFeeds = useSelector( (state) => state );

    useEffect(() => {
        fetch("https://aircall-job.herokuapp.com/activities")
            .then(res => {
                return res.json();
            })
            .then(data => {
                data = data.filter(e => e.is_archived == isArchivedFeeds);
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
