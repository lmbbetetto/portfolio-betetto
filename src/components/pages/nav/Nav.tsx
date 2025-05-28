import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { useState } from "react";

import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18nify";

export function Nav() {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState("#");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsFillBookFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillPhone />
      </a>
      <div className="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <a className="dropdown-toggle">
          <FiGlobe />
        </a>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li
              className="flag-text"
              onClick={() => handleLanguageChange("pt")}
            >
              <ReactCountryFlag countryCode="br" />
              {t("pt")}
            </li>
            <li
              className="flag-text"
              onClick={() => handleLanguageChange("en")}
            >
              <ReactCountryFlag countryCode="us" />
              {t("en")}
            </li>
            <li
              className="flag-text"
              onClick={() => handleLanguageChange("es")}
            >
              <ReactCountryFlag countryCode="es" />
              {t("es")}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
