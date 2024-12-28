import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/AddressForm.css";

// Validation function
const validate = (values) => {
  const errors = {};

  if (!values.recipientName) {
    errors.recipientName = "*Required";
  } else if (values.recipientName.length > 15) {
    errors.recipientName = "*Must be 15 characters or less";
  }
  if (values.recipientNumber) {
    if (!/^[0-9]+$/.test(values.recipientNumber)) {
      errors.recipientNumber = "*Phone number must contain only digits";
    } else if (values.recipientNumber.length < 10) {
      errors.recipientNumber = "*Phone number must be at least 10 digits";
    } else if (values.recipientNumber.length > 15) {
      errors.recipientNumber = "*Phone number must be 15 digits or less";
    }
  }
  if (!values.streetAddress) {
    errors.streetAddress = "*Required";
  }
  if (!values.suburb) {
    errors.suburb = "*Required";
  }
  if (!values.city) {
    errors.city = "*Required";
  }
  if (!values.province) {
    errors.province = "*Required";
  }
  if (!values.postalCode) {
    errors.postalCode = "*Required";
  } else if (!/^[0-9]+$/.test(values.postalCode)) {
    errors.postalCode = "*Postal Code must contain only digits";
  }

  return errors;
};

const AddressForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      recipientName: "",
      recipientNumber: "",
      streetAddress: "",
      complexBuilding: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: "",
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Form Submitted", values);
        setIsSubmitted(true); 
        setSubmitting(false); 
      }, 1000);
    },
  });

  const handleCancel = () => {
    navigate("/shipping");
  };

  return (
    <div className="delivery-form">
      {/* Conditional rendering of the form */}
      {!isSubmitted ? (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="recipientName">Recipient Name</label>
            <input
              id="recipientName"
              name="recipientName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.recipientName}
              placeholder="Recipient Name"
            />
            {formik.touched.recipientName && formik.errors.recipientName && (
              <div className="error-message">{formik.errors.recipientName}</div>
            )}
          </div>

          <div>
            <label htmlFor="recipientNumber">Recipient Number</label>
            <input
              id="recipientNumber"
              name="recipientNumber"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.recipientNumber}
              placeholder="Recipient Number"
            />
            {formik.touched.recipientNumber &&
              formik.errors.recipientNumber && (
                <div className="error-message">
                  {formik.errors.recipientNumber}
                </div>
              )}
          </div>

          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              id="streetAddress"
              name="streetAddress"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.streetAddress}
              placeholder="Street Address"
            />
            {formik.touched.streetAddress && formik.errors.streetAddress && (
              <div className="error-message">{formik.errors.streetAddress}</div>
            )}
          </div>

          <div>
            <label htmlFor="complexBuilding">Complex or Building</label>
            <input
              id="complexBuilding"
              name="complexBuilding"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.complexBuilding}
              placeholder="Complex or Building Name"
            />
            {formik.touched.complexBuilding &&
              formik.errors.complexBuilding && (
                <div className="error-message">
                  {formik.errors.complexBuilding}
                </div>
              )}
          </div>

          <div>
            <label htmlFor="suburb">Suburb</label>
            <input
              id="suburb"
              name="suburb"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.suburb}
              placeholder="Suburb"
            />
            {formik.touched.suburb && formik.errors.suburb && (
              <div className="error-message">{formik.errors.suburb}</div>
            )}
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              placeholder="City"
            />
            {formik.touched.city && formik.errors.city && (
              <div className="error-message">{formik.errors.city}</div>
            )}
          </div>

          <div>
            <label htmlFor="province">Province</label>
            <input
              id="province"
              name="province"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.province}
              placeholder="Province"
            />
            {formik.touched.province && formik.errors.province && (
              <div className="error-message">{formik.errors.province}</div>
            )}
          </div>

          <div>
            <label htmlFor="postalCode">Postal Code</label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postalCode}
              placeholder="Postal Code"
            />
            {formik.touched.postalCode && formik.errors.postalCode && (
              <div className="error-message">{formik.errors.postalCode}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={formik.isSubmitting}>
            Submit
          </button>

          {/* Cancel Button */}
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        // Success message after form submission
        <div className="success-message">
          Shipping address successfully submitted!
          <button className="back-to-btn" onClick={() => navigate("/shipping")}>
            Back to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
