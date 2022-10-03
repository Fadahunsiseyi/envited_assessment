/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventDetails = ({ onSubmitForm }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm(inputs);
    setInputs({});
    navigate('/event');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Host Name:
        <input
          type="text"
          name="hostname"
          value={inputs.hostname || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Start/Finish Date:
        <input
          type="date"
          name="date"
          value={inputs.date || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter Location:
        <input
          type="text"
          name="location"
          value={inputs.location || ''}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

EventDetails.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default EventDetails;
