
import useFormValidation from "../../hooks/useFormValidation";
import style from './RestartFrame.module.css'
import { FaUser } from 'react-icons/fa';

const validateUserForm = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const RestartFrame = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(initialState, validateUserForm);

  return (
    <div className={style.RestartFrame_container}>
      <div className={style.RestartFrame_form_container}>
        <h1 className={style.RestartFrame_heading}><span className={style.RestartFrame_re}>[re]</span>Start</h1>
        <div className={style.RestartFrame_intro}>
          <h3 className={style.RestartFrame_create}>Create your Free accounts</h3>
          <p className={style.RestartFrame_advisor_content}>Our Career Advisors Are Waiting To Help You</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={style.RestartFrame_input_container}>
              <FaUser size={16} color={"#9095A0"} />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style.RestartFrame_input}
                placeholder="Fist Name"
              />
            </div>
            <div className={style.RestartFrame_input_error_container}>
              {errors.firstName && <p className={style.RestartFrame_input_error}>{errors.firstName}</p>}
            </div>
          </div>
          <div>
            <div className={style.RestartFrame_input_container}>
              <FaUser size={16} color={"#9095A0"} />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style.RestartFrame_input}
                placeholder="Last Name"
              />
            </div>
            <div className={style.RestartFrame_input_error_container}>
              {errors.lastName && <p className={style.RestartFrame_input_error}>{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <div className={style.RestartFrame_input_container}>
              <FaUser size={16} color={"#9095A0"} />
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={style.RestartFrame_input}
                placeholder="Email"
              />
            </div>
            <div className={style.RestartFrame_input_error_container}>
              {errors.email && <p className={style.RestartFrame_input_error}>{errors.email}</p>}
            </div>
          </div>


          <button type="submit" disabled={isSubmitting} className={style.RestartFrame_submit_button}>
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestartFrame;
