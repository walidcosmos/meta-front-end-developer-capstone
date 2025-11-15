/**
 * FormField component - Reusable form field wrapper with label and error handling
 * @param {ReactNode} children - Input or select element
 * @param {string} label - Label text for the field
 * @param {string} htmlFor - ID of the input element (for accessibility)
 * @param {boolean} hasError - Whether the field has a validation error
 * @param {string} errorMessage - Error message to display when hasError is true
 */
const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {/* Display error message if field validation fails */}
      {hasError && errorMessage ?
        <p data-testid="error-message">{errorMessage}</p> : null}
    </div>
  );
};

export default FormField;
