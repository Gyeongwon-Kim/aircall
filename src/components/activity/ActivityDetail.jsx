import React, {useState, useEffect}  from 'react';

import { useParams } from 'react-router-dom';

const ActivityDetail = (props) => {
    const { id } = useParams();
    
    const [activity, setActivity] = useState([]);
    useEffect(() => {
        fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setActivity(data);
            })
    }, [])

    return (
        <div className="detail-container">
            <div><i className="material-icons icon-user">account_circle</i></div>
            {activity.id}
            created_at
            direction
            from
            to
            via
            duration
            is_archived
            call_type
        </div>
    );
};

export default ActivityDetail;
