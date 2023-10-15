import React, { ReactNode, useState } from "react";
import ArowButton from "./ArowButton";
import { Link } from "react-router-dom";

const ListMnue = () => {
  const [isACtiveArow, setIsActiveArow] = useState(false);
  const [isACtiveArow2, setIsActiveArow2] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div>
      <nav id="navigation">
        <div className="container__row">
          <div className="nav-card">
            {isACtiveArow == false && (
              <ArowButton
                active=""
                onClick={() => {
                  setIsActiveArow(true);
                }}
              ></ArowButton>
            )}
            {isACtiveArow == true && (
              <ArowButton
                active=" arrow_up"
                onClick={() => {
                  setIsActiveArow(false);
                }}
              ></ArowButton>
            )}
            المؤشرات
          </div>
          {isACtiveArow == true && (
            <div>
              <div className="nav-card nav-card_nest">
                مؤشر البورصة العقارية اليومي
              </div>
              <div className="nav-card nav-card_nest">الصفقات اليوميه</div>
              <div className="nav-card nav-card_nest">البيانات العقارية</div>
            </div>
          )}
          <div className="nav-card">
            {isACtiveArow2 == false && (
              <ArowButton
                active=""
                onClick={() => {
                  setIsActiveArow2(true);
                }}
              ></ArowButton>
            )}
            {isACtiveArow2 == true && (
              <ArowButton
                active=" arrow_up"
                onClick={() => {
                  setIsActiveArow2(false);
                }}
              ></ArowButton>
            )}
            الاستعلامات العقارية
          </div>
          {isACtiveArow2 == true && (
            <div>
              <div className="nav-card nav-card_nest">العقارات المملوكة</div>
              <div className="nav-card nav-card_nest">
                الاستعلام عن الصكوك المملوكة
              </div>
              <div className="nav-card nav-card_nest">عقارات الموروث</div>
            </div>
          )}
          <div className="nav-card nav-card_noNested">
            <Link to="https://srem.moj.gov.sa/du" target="_blank">
              تحديث الصكوك
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ListMnue;
