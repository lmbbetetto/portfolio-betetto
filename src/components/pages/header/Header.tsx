import { useTranslation } from "react-i18next";
import "./header.css";

export function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <div className="container header__container">
        <h5>{t("ola")}</h5>
        <h1>Leonardo Betetto</h1>
        <h5 className="text-light">{t("dev")}</h5>
      </div>
    </header>
  );
}
