import React from "react";
import "./Term.scss";

const Return = (innerPage) => {
  return (
    <div className="term">
      {!innerPage && <div className="sec-heading"></div>}
      <h1>TERMS & CONDITIONS</h1>
      <p className="text_term">
        {" "}
        REVIEWS AND COMMENTS
        <br></br>
        If allowed by online shopping, you may, as applicable, post reviews,
        comments, photos, videos, and other content; and submit suggestions,
        ideas, comments, questions, or other material or information
        (collectively, 'Content'), so long as the Content complies with our
        Community Guidelines and is not otherwise illegal, obscene, threatening,
        defamatory, invasive of privacy, infringing of intellectual property
        rights, or otherwise injurious to third parties or objectionable. If you
        do post or submit Content, and unless we indicate otherwise, you grant
        online shopping a nonexclusive, royalty-free, perpetual, irrevocable,
        and fully sublicensable right to use, reproduce, modify, adapt, publish,
        perform, translate, create derivative works from, distribute, and
        display such Content throughout the world in any media. You also grant
        online shopping and sublicensees the right to use the name that you
        submit in connection with such Content, if they choose. You represent
        and warrant that you own or otherwise control all of the rights to the
        Content that you submit; that the Content is accurate and will not cause
        injury to any person or entity; and that you will indemnify online
        shopping for all claims resulting from Content you supply. online
        shopping has the right but not the obligation to monitor, edit or remove
        any activity or Content. online shopping takes no responsibility and
        assumes no liability for any Content posted by you or any third party
        and may not review posted Content.
      </p>
    </div>
  );
};
export default Return;
