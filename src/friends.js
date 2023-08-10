import React from 'react';
export const Friends = (props) => {
  const Profile = () => {
    return (
      <div className="profile">
        <img className="profileLogo" src={props.profile} />
        <span
          className="availability"
          style={
            props.availability
              ? { background: 'var(--online)' }
              : { background: 'var(--offline)' }
          }
        ></span>
      </div>
    );
  };
  return (
    <div className="friend">
      <Profile />
      <div>
        <h3 className="Username">{props.name}</h3>
        <p className="lastMsg">{props.lastMsg}</p>
      </div>
      <p className="lastMsgTime">{props.lastMsgTime}</p>
    </div>
  );
};
