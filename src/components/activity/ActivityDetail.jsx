import React from 'react';
import Moment from 'moment';

const ActivityDetail = ({activity}) => {
  return (
    activity !== null && (
      <div className="detail-box">
        {activity.call_type=="voicemail" ? (
          <div className="content-box">
            <i className={`material-icons icon-call color-${activity.call_type}`}>voicemail</i>
            <div>
              <div>{activity.from ? activity.from : 'Unknown'}</div>
              <div>voice mail from {activity.to ? activity.to : 'Unknown'}</div>
            </div>
          </div>
        ) : (
          [activity.direction=="inbound" ? (
            <div className="content-box">
              <i className={`material-icons icon-call color-${activity.call_type}`}>call_received</i>
              <div>
                <div>{activity.from ? activity.from : 'Unknown'}</div>
                <div>missed a call from {activity.to ? activity.to : 'Unknown'}</div>
              </div>
            </div>
          ) : (
            <div className="content-box">
              <i className={`material-icons icon-call color-${activity.call_type}`}>call_made</i>
              <div>
                <div>{activity.to ? activity.to : 'Unknown'}</div>
                <div>tried to call on {activity.from ? activity.from : 'Unknown'}</div>
              </div>
            </div>
          )]
        )}
        <div className="time-box">
          <div>
            {Moment(activity.created_at).format('hh:mm a')}
          </div>
        </div>
      </div>
    )
  );
};

export default ActivityDetail;
