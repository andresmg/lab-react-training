import React from 'react';

const IdCard = (props) => {
  return (
    <div className='id-card col-11 col-sm-5'>
      <div className='image mr-5'>
        <img src={props.picture} alt="id card" />
      </div>
      <div>
        <p>
          <strong> First Name </strong>
          {props.firstName}
        </p>
        <p>
          <strong> Last Name </strong>
          {props.lastName}
        </p>
        <p>
          <strong> Gender </strong>
          {props.gender}
        </p>
        <p>
          <strong> Height </strong>
          {props.height/100}m
        </p>
        <p>
          <strong> Birthday </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};
export default IdCard;