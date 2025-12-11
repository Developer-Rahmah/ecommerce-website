"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import type { HeaderProps, Currency, CurrencyOption } from "./Header.types";
import styles from "./Header.module.css";
import { iconsObject } from "@/src/assets/icons/iconsObject";
import { Icon } from "../../atoms/Icon/index";
import { Button } from "../../atoms/Button/index";

const CURRENCY_OPTIONS: CurrencyOption[] = [
  { code: "SAR(﷼)", symbol: "SAR", countryFlag: "sarFlag" },
  { code: "USD($)", symbol: "USD", countryFlag: "usaFlag" },
  { code: "EUR(€)", symbol: "EUR", countryFlag: "eurFlag" },
  { code: "JOD( د.ا)", symbol: "JOD", countryFlag: "jodFlag" },
];

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("SAR");
  const { language, setLanguage, t } = useLanguage();

  const currentCurrency =
    CURRENCY_OPTIONS.find((c) => c.code === selectedCurrency) ||
    CURRENCY_OPTIONS[0];

  return (
    <header className={`${styles.header} ${className}`}>
      {/* Promo Bar */}
      <div className={styles["promo-bar-container"]}>
        <div className={styles["promo-bar-content"]}>
          <div className={styles["promo-text"]}>
            {t("header.promoText")}
            <span className={styles["promo-code"]}>{t("header.code")}</span>
          </div>
          <div className={styles["promo-controls"]}>
            <div className={styles["currency-selector"]}>
              <Button
                className={styles["currency-button"]}
                onClick={() =>
                  setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
                }
                aria-label="Select currency"
              >
                <Icon
                  name={iconsObject[currentCurrency?.countryFlag]}
                  width={14}
                  height={14}
                />
                <span>{currentCurrency.symbol}</span>
                {/* <svg width="10" height="10" viewBox="0 0 10 10" fill="none"> */}
                {/* <path
                    d="M2.5 4L5 6.5L7.5 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  /> */}
                <Icon
                  name={
                    isCurrencyDropdownOpen
                      ? iconsObject.dropdownArrow
                      : iconsObject.rightArrow
                  }
                />
                {/* </svg> */}
              </Button>
              {isCurrencyDropdownOpen && (
                <div className={styles["currency-dropdown"]}>
                  {CURRENCY_OPTIONS.map((currency) => (
                    <button
                      key={currency.code}
                      className={`${styles["currency-option"]} ${
                        selectedCurrency === currency.code ? styles.active : ""
                      }`}
                      onClick={() => {
                        setSelectedCurrency(currency.code);
                        setIsCurrencyDropdownOpen(false);
                      }}
                    >
                      <span className={styles["currency-symbol"]}>
                        {currency.symbol}
                      </span>
                      <span className={styles["currency-code"]}>
                        {currency.code}
                      </span>
                      <span className={styles["currency-name"]}>
                        {currency.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className={styles["language-selector"]}>
              <Button
                className={styles["language-button"]}
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                {language === "en" ? "English" : "العربية"}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2.5 4L5 6.5L7.5 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              {isLanguageDropdownOpen && (
                <div className={styles["language-dropdown"]}>
                  <button
                    className={`${styles["language-option"]} ${
                      language === "en" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setLanguage("en");
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className={`${styles["language-option"]} ${
                      language === "ar" ? styles.active : ""
                    }`}
                    onClick={() => {
                      setLanguage("ar");
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles["header-main"]}>
        <div className={styles["header-main-container"]}>
          <button
            className={styles["mobile-menu-toggle"]}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 5H18M2 10H18M2 15H18"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav className={styles["nav-desktop"]}>
            <a href="#" className={styles["nav-link"]}>
              {t("header.dresses")}
            </a>
            <a href="#" className={styles["nav-link"]}>
              {t("header.tops")}
            </a>
            <a href="#" className={styles["nav-link"]}>
              {t("header.occasion")}
            </a>
            <a href="#" className={styles["nav-link"]}>
              {t("header.kids")}
            </a>
            <a href="#" className={styles["nav-link"]}>
              {t("header.home")}
            </a>
            <a
              href="#"
              className={`${styles["nav-link"]} ${styles["shop-all"]}`}
            >
              {t("header.shopAll")}
            </a>
          </nav>

          <div className={styles.logo}>
            <h1>Aleena</h1>
          </div>

          <div className={styles["header-actions"]}>
            <a
              href="#"
              className={`${styles["action-link"]} ${styles["account-link"]}`}
            >
              {t("header.account")}
            </a>
            <button
              aria-label={t("header.search")}
              className={styles["action-button"]}
            >
              <Image
                src={iconsObject.search || "/placeholder.svg"}
                alt="Search"
                width={20}
                height={20}
              />
            </button>
            <button
              aria-label={t("header.cart")}
              className={styles["action-button"]}
            >
              <Image
                src={iconsObject.shoppingBag || "/placeholder.svg"}
                alt="Cart"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={styles["mobile-menu"]}>
            <nav className={styles["mobile-nav"]}>
              <a href="#" className={styles["mobile-nav-link"]}>
                {t("header.dresses")}
              </a>
              <a href="#" className={styles["mobile-nav-link"]}>
                {t("header.tops")}
              </a>
              <a href="#" className={styles["mobile-nav-link"]}>
                {t("header.occasion")}
              </a>
              <a href="#" className={styles["mobile-nav-link"]}>
                {t("header.kids")}
              </a>
              <a href="#" className={styles["mobile-nav-link"]}>
                {t("header.home")}
              </a>
              <a
                href="#"
                className={`${styles["mobile-nav-link"]} ${styles["shop-all"]}`}
              >
                {t("header.shopAll")}
              </a>
              <a
                href="#"
                className={`${styles["mobile-nav-link"]} ${styles["mobile-account"]}`}
              >
                {t("header.account")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
