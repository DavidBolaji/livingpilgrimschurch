import styled from "@emotion/styled";
import { Checkbox, Drawer, Form, Tooltip } from "antd";
import { Field, Formik } from "formik";
import React, { useRef, useState } from "react";
import { GiWallet } from "react-icons/gi";
import { RxCaretRight } from "react-icons/rx";
import { TbPhoneCalling } from "react-icons/tb";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { AntInput } from "../Form/controls/FormControls";
import {
  isRequired,
  validateEmail,
  validateName,
} from "../Form/validate/validate";

import "./index.css";

export const StyledDrawer = styled(Drawer)`
  background-color: #0a2540 !important;
  .ant-drawer-header-title {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .ant-drawer-close {
    /* display: none; */
    color: white;
  }

  p {
    color: #fff;
    font-size: 15px;
    text-align: center;
    font-family: oswald;
    margin-bottom: 20px;
  }

  h3 {
    color: #fff;
    text-align: center;
    position: relative;
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 15px;

    &:after {
      content: "";
      width: 20%;
      height: 3px;
      text-align: center;
      position: absolute;
      left: 50%;
      /* top: 50%; */
      transform: translateX(-50%);
      display: block;
      background-color: #00a359;
    }
  }

  button {
    background-color: #00a359;
    padding: 5px 15px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 800;
    font-family: oswald;
  }

  button:disabled {
    color: #00a359;
  }

  ul > li {
    color: #fff;
    margin-bottom: 10px;
    font-family: oswald;
  }
`;

const HelpLine = () => {
  const [open, setOpen] = React.useState(false);
  const [showPayBtn, setShowPayBtn] = React.useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const handleSubmit = (
    values: any,
    { resetForm }: { resetForm: (val: any) => void }
  ) => {
    toast("hi");
    setShowPayBtn((prev) => !prev);
    ref!.current!.click();
    // setOpen(false)
    // resetForm({ values: "" });
  };

  return (
    <section className="helpline">
      <div className="helpline-give-card" onClick={() => setOpen(true)}>
        <div className="helpline-left">
          <div className="helpline-left-icon">
            <GiWallet />{" "}
          </div>
          <div className="helpline-left-text">give</div>
        </div>
        <div className="helpline-caret">
          <RxCaretRight />
        </div>
      </div>
      <div className="helpline-give-card">
        <div className="helpline-left">
          <div className="helpline-left-icon">
            <TbPhoneCalling />{" "}
          </div>
          <div className="helpline-left-text">
            <a href="tel:+2348037130048">(+234) 803 713 0048</a>
          </div>
        </div>
        <div className="helpline-caret">
          <RxCaretRight />
        </div>
      </div>
      <StyledDrawer open={open} onClose={() => setOpen(false)}>
        <h3>online giving</h3>
        <p>Select your preferred payment method below to make your giving.</p>
        <p style={{ textAlign: "left" }}>1. Pay online</p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            email: "",
            fname: "",
            lname: "",
            amount: "",
          }}
        >
          {({
            handleSubmit,
            values,
            isSubmitting,
            resetForm,
          }: {
            handleSubmit: any;
            values: any;
            isSubmitting: any;
            resetForm: any;
          }) => (
            <Form>
              <>
                <Field
                  component={AntInput}
                  type="text"
                  name="fname"
                  placeholder="Enter First Name"
                  defaultValue={values.fname}
                  validate={validateName}
                  hasFeedback
                />
                <Field
                  component={AntInput}
                  type="text"
                  name="lname"
                  placeholder="Enter Last Name"
                  defaultValue={values.lname}
                  validate={validateName}
                  hasFeedback
                />
                <Field
                  component={AntInput}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  defaultValue={values.email}
                  validate={validateEmail}
                  hasFeedback
                />
                <Field
                  component={AntInput}
                  type="text"
                  name="amount"
                  placeholder="Enter Amount"
                  defaultValue={values.amount}
                  validate={isRequired}
                  hasFeedback
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {values.email &&
                  values.amount &&
                  values.fname &&
                  values.lname ? (
                    <Checkbox
                      style={{ color: "white" }}
                      onChange={handleSubmit}
                    >
                      confirm payment
                    </Checkbox>
                  ) : (
                    <Tooltip
                      title="fill all box to activate this feild"
                      color="blue"
                    >
                      <Checkbox
                        // onChange={handleSubmit}
                        disabled
                      >
                        <span style={{ color: "#fff" }}>tick to accept</span>
                      </Checkbox>
                    </Tooltip>
                  )}
                  <button
                    style={{ display: "none" }}
                    ref={ref}
                    className="stylebtn"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    Pay
                  </button>
                  <RenderPayment
                    val={values}
                    active={showPayBtn}
                    resetField={resetForm}
                    setActive={() => setShowPayBtn(false)}
                    close={() => setOpen(false)}
                  />
                </div>
              </>
            </Form>
          )}
        </Formik>

        <p style={{ textAlign: "left", marginTop: 20 }}>
          2. Transfer to the following Accounts
        </p>
        <ul>
          <li>Account No: 20700564 Bank: UBA</li>
          {/* <li>Account No: 841929440110 Bank: GTB</li> */}
          <li>Account No: 1012722623 Bank: Zenith</li>
        </ul>
      </StyledDrawer>
    </section>
  );
};

export default HelpLine;

const RenderPayment = ({
  val,
  active,
  resetField,
  setActive,
  close,
}: {
  val: any;
  active: boolean;
  resetField: () => void;
  setActive: () => void;
  close: () => void;
}) => {
  const [config, setConfig] = useState<any>({
    reference: new Date().getTime().toString(),
    email: "",
    amount: "", //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.REACT_APP_PUBLIC_KEY_PAYSTACK,
  });
  const initializePayment = usePaystackPayment(config);
  React.useEffect(() => {
    setConfig((prev: any) => {
      return {
        reference: new Date().getTime().toString(),
        email: val.email,
        amount: +val.amount * 100,
        publicKey: process.env.REACT_APP_PUBLIC_KEY_PAYSTACK,
      };
    });
  }, [val]);

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    resetField();
    setActive();
    close();
    toast.error(
      "Something went wrong, please try a different means of transfer"
    );
  };
  return (
    <div>
      {!active ? (
        <Tooltip title={"fill all boxes to submit"}>
          <button
            style={{ backgroundColor: "#ededed", cursor: "not-allowed" }}
            onClick={() => {
              // initializePayment(() => {alert('success')}, onClose)
            }}
            disabled={!active}
          >
            Confirm Payment
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={() => {
            initializePayment(() => {
              toast.success("Payment successful, God bless you");
              resetField();
              setActive();
              close();
            }, onClose);
          }}
          disabled={!active}
        >
          Confirm Payment
        </button>
      )}
    </div>
  );
};
