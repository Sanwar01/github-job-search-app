import React, { useContext, useRef } from 'react';
import moment from 'moment';
import JobsContext from '../context/Jobs';
import useObserver from '../custom-hooks/Observer';
import Image from './Image';

const JobItem = (props) => {
  const { onItemClick } = useContext(JobsContext);
  const {
    id,
    type,
    created_at,
    company,
    location,
    title,
    company_logo,
    index
  } = props;
  const imageRef = useRef();
  const [isVisible] = useObserver(imageRef);

  return (
    <div className="job-item" index={index + 1} onClick={() => onItemClick(id)}>
      <div className="company-logo" ref={imageRef}>
        {isVisible && (
          <Image src={company_logo} alt={company} width="100" height="100" />
        )}
      </div>
      <div className="job-info">
        <div className="job-title">{title}</div>
        <div className="job-location">
          {location} | {type}
        </div>
        <div className="company-name">{company}</div>
      </div>
      <div className="post-info">
        <div className="post-time">
          Posted {moment(new Date(created_at)).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
