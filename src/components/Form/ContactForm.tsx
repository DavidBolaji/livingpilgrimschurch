import React, { PureComponent } from "react";
import { Formik } from "formik";
import Display from "./display/Display";
import { message } from "antd";
import { send } from "@emailjs/browser";
// import { toast } from 'react-toastify';

const initialValues = {
  name: "",
  email: "",
  message: "",
  emaailTo: "odavidbolaji14@gmail.com",
};

const serviceId: any = process.env.REACT_APP_SERVICE_ID;
const templateId: any = process.env.REACT_APP_TEMPLATE_ID;
const publicId: any = process.env.REACT_APP_PUBLIC_KEY;

export default class ContactForm extends PureComponent {
  handleSubmit = (formProps: any, { resetForm }: { resetForm: any }) => {
    // console.log(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SERVICE_ID, formProps, process.env.REACT_APP_PUBLIC_KEY)
    send(serviceId, templateId, formProps, publicId).then(
      function (response) {
        message.success("Mail sent 👍");
        resetForm({ values: "" });
      },
      function (error: any) {
        message.error("Sorry an error occured");
        resetForm({ values: "" });
      }
    );

    // alert(
    //   `Email: ${email} \nName: ${name} \nMessage: ${message}\n}`
    // );
  };

  render = () => (
    <Formik
      initialValues={initialValues}
      onSubmit={this.handleSubmit}
      // render={Display}
    >
      {Display}
    </Formik>
  );
}
