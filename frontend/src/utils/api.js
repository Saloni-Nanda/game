

// API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/**
 * Calls the 404 API endpoint
 * This function is used to trigger a 404 error in the network tab
 * @returns {Promise} - The fetch promise
 */
export const call404API = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/not-found`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // The response will be a 404, which is expected
    // We return the response so the caller can handle it if needed
    return response;
  } catch (error) {
    console.error('Error calling 404 API:', error);
    throw error;
  }
};

/**
 * Generic button click handler that calls the 404 API
 * @param {Event} event - The click event
 */
export const handleButtonClick = async (event) => {
  // Call the 404 API when button is clicked
  await call404API();
};

export default call404API;
