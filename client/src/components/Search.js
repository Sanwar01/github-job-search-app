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
      setState({
        ...state,
        [name]: value
      });
    };

    const handleFullTimeBtnClick = () => {
      setState((prevState) => ({
        ...state,
        full_time: !prevState.full_time
      }));
    }

    const handleSearch = (event) => {
      event.preventDefault();
      console.log(state);
      onSearch(state);
    };

    return (
      <div className="search-section">

        <div className="title">
          <h1>Search for your dream job</h1>
          <h3>Finding your new job just got easier</h3>
        </div>

        <Form className="search-form" onSubmit={handleSearch}>
          <FontAwesomeIcon id="search-icon" icon={faSearch} fixedWidth/>
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
          <FontAwesomeIcon id="location-icon" icon={faMapMarkerAlt} fixedWidth/>
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

        </Form>
      </div>
    );
  }
;

export default Search;
