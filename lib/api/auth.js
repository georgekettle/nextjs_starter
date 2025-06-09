import { apiClient } from './client';

export const authApi = {
  /**
   * Sign up a new user
   * @param {Object} data - User signup data
   * @param {string} data.email - User's email
   * @param {string} data.password - User's password
   * @param {string} data.password_confirmation - Password confirmation
   * @param {string} [data.name] - User's name (optional)
   * @returns {Promise<Object>} Response data containing user and token
   */
  signup: (data) => {
    return apiClient.post('/signup', { user: data });
  },

  /**
   * Log in an existing user
   * @param {Object} data - Login credentials
   * @param {string} data.email - User's email
   * @param {string} data.password - User's password
   * @returns {Promise<Object>} Response data containing user and token
   */
  login: (data) => {
    return apiClient.post('/login', data);
  },

  /**
   * Get the current user's information
   * @returns {Promise<Object>} Response data containing user information
   */
  getCurrentUser: () => {
    return apiClient.get('/me');
  },

  /**
   * Log out the current user
   * @returns {Promise<Object>} Response data confirming logout
   */
  logout: () => {
    return apiClient.delete('/logout');
  },

  /**
   * Request a password reset
   * @param {Object} data - Password reset request data
   * @param {string} data.email - User's email
   * @returns {Promise<Object>} Response data confirming the request
   */
  requestPasswordReset: (data) => {
    return apiClient.post('/password/forgot', data);
  },

  /**
   * Reset password with token
   * @param {Object} data - Password reset data
   * @param {string} data.token - Reset token from email
   * @param {string} data.password - New password
   * @returns {Promise<Object>} Response data confirming the reset
   */
  resetPassword: (data) => {
    return apiClient.post('/password/reset', data);
  },
}; 