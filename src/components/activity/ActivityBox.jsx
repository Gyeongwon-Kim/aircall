import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const ActivityBox = ({activity}) => {
  return (
    activity !== null && (
      <div>
        <div className="divider">{Moment(activity.created_at).format('MMM, D YYYY')}</div>
        <Link to={`/detail/${activity.id}`} className="detail-box">
          {activity.call_type=="voicemail" ? (
            <div className="content-box">
              <i className={`material-icons icon-call color-${activity.call_type}`}>voicemail</i>
              <div>
                <div className="phone-num">{activity.from ? activity.from : 'Unknown'}</div>
                <div className="desc">voice mail from {activity.to ? activity.to : 'Unknown'}</div>
              </div>
            </div>
          ) : (
            [activity.direction=="inbound" ? (
              <div key={activity.direction} className="content-box">
                <i className={`material-icons icon-call color-${activity.call_type}`}>call_received</i>
                <div>
                  <div className="phone-num">{activity.from ? activity.from : 'Unknown'}</div>
                  <div className="desc">missed a call from {activity.to ? activity.to : 'Unknown'}</div>
                </div>
              </div>
            ) : (
              <div key={activity.direction} className="content-box">
                <i className={`material-icons icon-call color-${activity.call_type}`}>call_made</i>
                <div>
                  <div className="phone-num">{activity.to ? activity.to : 'Unknown'}</div>
                  <div className="desc">tried to call on {activity.from ? activity.from : 'Unknown'}</div>
                </div>
              </div>
            )]
          )}
          <div className="time-box">
            <div>
              {Moment(activity.created_at).format('hh:mm a')}
            </div>
          </div>
        </Link>
      </div>
    )
  );
};

export default ActivityBox;
