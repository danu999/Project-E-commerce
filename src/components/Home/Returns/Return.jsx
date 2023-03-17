import React from "react";
import "./Return.scss";

const Return = (innerPage) => {
  return (
    <div className="return">
      {!innerPage && <div className="sec-heading"></div>}
      <h1>RETURN</h1>
      <p className="text_return">
        {" "}
        FREE 365 DAY RETURNS
        <br></br>
        Return shipping from anywhere is always FREE. If
        you are not 100% satisfied with your purchase from online shopping, you
        can return your qualifying item(s) for a full refund within 365 days of
        purchase – no catches or exceptions! Returns must be unworn with the
        original tags attached (including the security tag, if applicable) and
        with the original packaging; returned merchandise that does not satisfy
        these requirements may not qualify for a refund. Click here to start
        your easy self-service return, or contact us. If you have received
        defective, damaged or incorrect merchandise, please contact us directly.
        Once we receive your qualifying return and approve your refund, Online
        shopping will credit your original method of payment. Depending on your
        financial institution, please allow an additional 7 – 10 business days
        for the credit to post to your bank or credit card account.{" "}
      </p>
    </div>
  );
};
export default Return;
