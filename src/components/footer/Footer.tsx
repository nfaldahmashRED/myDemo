import React from "react";

const footer = () => {
  return (
    <div className="foot">
      <div className="">
        جميع الحقوق محفوظة © 2023 - البورصة العقارية
        <img src="\src\assets\miniLogo.png"></img>
      </div>
      <div className="container__foot">
        <div>
          <a href="https://www.youtube.com/c/ksamoj" className="foot-element">
            <img
              src="\src\assets\youtube-logo.png"
              height={25}
              width={25}
            ></img>
          </a>
          {"      "}
          <a href="https://twitter.com/MojKsa" className="foot-element">
            <img src="src/assets/twitter-logo.png" height={25} width={25}></img>
          </a>
        </div>

        <div>
          <a
            className="foot-element"
            href="https://srem.moj.gov.sa/#:~:text=%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7%20%D9%88%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85,%D8%A7%D9%84%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9"
          >
            الشروط والأحكام
          </a>
          <a
            className="foot-element"
            href="https://srem.moj.gov.sa/#:~:text=%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7%20%D9%88%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85,%D8%A7%D9%84%D8%A3%D8%B3%D8%A6%D9%84%D8%A9%20%D8%A7%D9%84%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9"
          >
            {" "}
            حول البورصة العقارية
          </a>
          <a className="foot-element" href="https://srem.moj.gov.sa/FAQs">
            {" "}
            الأسئلة الشائعة
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
