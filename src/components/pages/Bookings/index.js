import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';

/**
 * Reducer function to update available times based on selected date
 * @param {Array} availableTimes - Current available time slots
 * @param {string} date - Selected date
 * @returns {Array} Updated available time slots
 */
const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

/**
 * Initialize available times for today's date
 * @param {Array} initialAvailableTimes - Initial state
 * @returns {Array} Available time slots for today
 */
const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

/**
 * Bookings component - Manages table reservation functionality
 * Handles available time slots and form submission
 */
const Bookings = () => {
  // Manage available time slots with reducer
  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  /**
   * Submit booking data to API and navigate to confirmation page
   * @param {Object} formData - Booking form data (date, time, guests, occasion)
   */
  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('confirmedBooking').path);
  }; 

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Bookings;
