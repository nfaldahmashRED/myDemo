import { NavBar } from "mini-burger";
import { Hamburger } from "svelte-hamburgers";
import Burger from "./burger";
import ListMnue from "./ListMnue";
import { useState } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const [listVisiblty, setListVisiblity] = useState(false);
  const [isACtive, setIsActive] = useState(false);

  return (
    <>
      <div className="manual">
        <a
          className="link manual"
          href="https://prod-srem-business-api.red.sa/api/v1/Download/DownloadGuide"
          target="_blank"
        >
          تحميل "الدليل الإرشادي" لمنصة البورصة العقارية
        </a>
      </div>
      <div className="container__head">
        <div className="head-element">
          <Link to="/" className="btn btn_login">
            تسجيل الدخول
          </Link>
        </div>
        <div className="head-element">
          <div className="container__head">
            <Link to="/">
              <img src="src\assets\sremLogoN.png" width={300} height={90} />
            </Link>
            {isACtive == false && (
              <Burger
                active=""
                onClick={() => {
                  setListVisiblity(true);
                  setIsActive(true);
                }}
              ></Burger>
            )}
            {isACtive == true && (
              <Burger
                active=" is-active"
                onClick={() => {
                  setListVisiblity(false);
                  setIsActive(false);
                }}
              ></Burger>
            )}
          </div>
        </div>
      </div>
      {listVisiblty == true && <ListMnue></ListMnue>}
    </>
  );
};

export default Header;
