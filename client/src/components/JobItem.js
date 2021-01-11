import React, {useContext, useRef} from 'react';
import moment from 'moment';
import JobsContext from '../context/Jobs';
import useObserver from '../custom-hooks/Observer';
import Image from './Image';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faCalendar, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Row} from "react-bootstrap";

const JobItem = (props) => {
  const {onItemClick} = useContext(JobsContext);
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
          <Image src={company_logo} alt={company} width="100" height="100"/>
        )}
      </div>

      <div className="job-info">
        <div className="job-title">{title}</div>
        <Row style={{marginLeft: '0'}}>
          <div className="company-name">
            <FontAwesomeIcon id="company-icon" icon={faBuilding} fixedWidth/>
            {company}
          </div>
          <div className="job-location">
            <FontAwesomeIcon id="location-icon" icon={faMapMarkerAlt} fixedWidth/>
            {location}
          </div>
        </Row>
      </div>

      <div className="post-info">
        <div className="job-type">
          {type}
        </div>
        <div className="post-time">
          <FontAwesomeIcon id="calendar-icon" icon={faCalendar} fixedWidth/>
          Posted {moment(new Date(created_at)).fromNow()}
        </div>
      </div>
    </div>
  )
    ;
};

export default JobItem;
