import React, {useState, useEffect}  from 'react';
import Moment from 'moment';

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

    function updateArchiveStatus(status) {
        fetch(`https://aircall-job.herokuapp.com/activities/${activity.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                is_archived: status
            })
        }).then(res => {
            if (res.ok) {
                activity.is_archived = status;
                setActivity(activity);
            }
        })
    }
    return (
        <div className="detail-container">
            <div><i className="material-icons icon-user">account_circle</i></div>
            <div className="detail-username">{activity.direction=="outbound" ? (activity.from ? activity.from : 'Unknown') : (activity.to ? activity.to : 'Unknown')}</div>
            <div className="detail-phone-num">{activity.direction=="outbound" ? (activity.to ? activity.to : 'Unknown') : (activity.from ? activity.from : 'Unknown')}</div>
            <div className="detail-content-box">
                <div>{Moment(activity.created_at).format('MMM d, YYYY')}</div>
                <div>{activity.direction}</div>
                <div>{activity.call_type}</div>
                <div>via {activity.via}</div>
                <div>{activity.duration} secs</div>
                <div>{activity.is_archived ? 'Archived' : 'Not archived'}</div>
            </div>
            <button className="button-archive" onClick={() => updateArchiveStatus(!activity.is_archived)}>
                {activity.is_archived ? 'Unarchive' : 'Archive'}
            </button>
        </div>
    );
};

export default ActivityDetail;
