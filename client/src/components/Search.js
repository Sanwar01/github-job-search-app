import React, {useState, useContext} from 'react';
import {Form} from 'react-bootstrap';
import JobsContext from '../context/Jobs';
import {faMapMarkerAlt, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = () => {
  const {onSearch} = useContext(JobsContext);

  const [state, setState] = useState({
    description: '',
    location: '',
    full_time: false
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if (name === 'full_time') {
      setState((prevState) => ({
        ...state,
        [name]: !prevState.full_time
      }));
    } else {
      setState({
        ...state,
        [name]: value
      });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
    onSearch(state);
  };

  return (
    <div className="search-section">
      <Form className="search-form" onSubmit={handleSearch}>
        <FontAwesomeIcon className="icon" icon={faSearch} size="lg"/>
        <Form.Group controlId="description">
          <Form.Control
            type="text"
            name="description"
            value={state.description || ''}
            placeholder="Enter search term"
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="vl"/>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg"/>
        <Form.Group controlId="location">
          <Form.Control
            type="text"
            name="location"
            value={state.location || ''}
            placeholder="Enter location"
            onChange={handleInputChange}
          />
        </Form.Group>

        <button className="btn-search" type="submit">
          Search
        </button>
        {/*<div className="filters">*/}
        {/*  <Form.Group controlId="full_time">*/}
        {/*    <Form.Check*/}
        {/*      type="checkbox"*/}
        {/*      name="full_time"*/}
        {/*      className="full-time-checkbox"*/}
        {/*      label="Full time only"*/}
        {/*      checked={state.full_time}*/}
        {/*      onChange={handleInputChange}*/}
        {/*    />*/}
        {/*  </Form.Group>*/}
        {/*</div>*/}
      </Form>
    </div>
  );
};

export default Search;
