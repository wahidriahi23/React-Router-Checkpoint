import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const Filter = ({ onFilterChange }) => {
  // Function to handle changes in the filter inputs and invoke the onFilterChange function
  const handleInputChange = (filterType, value) => {
    // Call the onFilterChange function passed as a prop with the filter type and value
    onFilterChange(filterType, value);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Form className="d-flex">
          {/* Title filter input */}
          <Navbar.Brand>Title:</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            // Handle title input change
            onChange={(e) => handleInputChange('title', e.target.value)}
          />

          {/* Rating filter input */}
          <Navbar.Brand>Rating:</Navbar.Brand>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            // Handle rating input change
            onChange={(e) => handleInputChange('rating', e.target.value)}
          />

          {/* Search button */}
          <Button variant="outline-success" className="Bt">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Filter;
