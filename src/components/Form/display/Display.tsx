import { Form, Field } from "formik";
// import { dateFormat, timeFormat } from "../FieldFormats/FieldFormats";
import { AntInput, AntTextArea } from "../controls/FormControls";
import { validateEmail, validateName, isRequired } from "../validate/validate";
import "../styles.css";
import { Spin } from "antd";

const FormDisPlay = ({
  handleSubmit,
  values,
  submitCount,
  isSubmitting,
}: {
  handleSubmit: any;
  values: any;
  submitCount: any;
  isSubmitting: any;
}) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      type="text"
      name="name"
      //   label="Name"
      placeholder="Enter Name"
      defaultValue={values.name}
      validate={validateName}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="email"
      type="email"
      //   label="Email"
      placeholder="Enter Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntInput}
      name="phone"
      type="text"
      //   label="Email"
      placeholder="Enter Phone Number"
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntTextArea}
      maxLength={100}
      //   showCount={true}
      name="message"
      placeholder="message"
      type="text"
      row={200}
      //   value={values.message}
      //   label="Message"
      //   defaultValue={values.message}
      validate={isRequired}
      //   submitCount={submitCount}
      hasFeedback
    />

    <div className="submit-container">
      <button className="stylebtn" type="submit" disabled={isSubmitting}>
        {isSubmitting && <Spin />}Book Appointment
      </button>
    </div>
  </Form>
);

export default FormDisPlay;
