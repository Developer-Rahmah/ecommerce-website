"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import type { HeaderProps, Currency } from "./Header.types";
import styles from "./Header.module.css";
import { Icon } from "../../atoms/Icon/index";
import { Button } from "../../atoms/Button/index";
import CustomText, { TextVariant } from "../../atoms/CustomText";
import aleenaLogo from "../../../../public/aleena-logo.png";
import iconsObject from "@/src/assets/icons/iconsObject";
import { useClickOutside, useEscapeKey } from "@/src/utils/helpers";
import { useMobileView } from "@/hooks/use-mobile";

const CURRENCY_OPTIONS: Currency[] = [
  { code: "SAR(﷼)", symbol: "SAR", countryFlag: "sarFlag" },
  { code: "USD($)", symbol: "USD", countryFlag: "usaFlag" },
  { code: "EUR(€)", symbol: "EUR", countryFlag: "eurFlag" },
  { code: "JOD( د.ا)", symbol: "JOD", countryFlag: "jodFlag" },
];

export const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    CURRENCY_OPTIONS[0].code
  );

  const isMobileView = useMobileView(768);
  const { language, setLanguage, t } = useLanguage();

  // Refs for click outside detection
  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const currentCurrency =
    CURRENCY_OPTIONS.find((c) => c.code === selectedCurrency) ||
    CURRENCY_OPTIONS[0];

  // Use the helper hooks
  useClickOutside(
    [currencyDropdownRef, languageDropdownRef, mobileMenuRef],
    () => {
      setIsCurrencyDropdownOpen(false);
      setIsLanguageDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  );

  useEscapeKey(() => {
    setIsCurrencyDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  });

  // Handle toggle functions
  const toggleCurrencyDropdown = () => {
    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsCurrencyDropdownOpen(false);
  };

  return (
    <header className={`${styles.header} ${className}`}>
      {/* Promo Bar */}
      <div className={styles["promo-bar-container"]}>
        {isMobileView ? null : (
          <div className={styles["promo-bar-content"]}>
            <div className={styles["promo-text"]}>
              <CustomText variant={TextVariant.CAPTION_BODY1}>
                {t("header.promoText")}
              </CustomText>
            </div>
            <div className={styles["promo-controls"]}>
              {/* Currency Selector with ref */}
              <div
                className={styles["currency-selector"]}
                ref={currencyDropdownRef}
              >
                <Button
                  className={styles["currency-button"]}
                  onClick={toggleCurrencyDropdown}
                  aria-label="Select currency"
                  aria-expanded={isCurrencyDropdownOpen}
                >
                  <Icon
                    name={iconsObject[currentCurrency?.countryFlag]}
                    width={14}
                    height={14}
                  />
                  <span>{currentCurrency.symbol}</span>
                  <Icon
                    name={
                      isCurrencyDropdownOpen
                        ? iconsObject.dropdownArrow
                        : iconsObject.rightArrow
                    }
                  />
                </Button>
                {isCurrencyDropdownOpen ? (
                  <div className={styles["currency-dropdown"]}>
                    {CURRENCY_OPTIONS.map((currency) => (
                      <button
                        key={currency.code}
                        className={`${styles["currency-option"]} ${
                          selectedCurrency === currency.code
                            ? styles.active
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedCurrency(currency.code);
                          setIsCurrencyDropdownOpen(false);
                        }}
                      >
                        <span className={styles["currency-code"]}>
                          {currency.code}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Language Selector with ref */}
              <div
                className={styles["language-selector"]}
                ref={languageDropdownRef}
              >
                <Button
                  className={styles["language-button"]}
                  onClick={toggleLanguageDropdown}
                  aria-expanded={isLanguageDropdownOpen}
                >
                  {language === "en" ? "English" : "العربية"}
                  <Icon
                    name={
                      isLanguageDropdownOpen
                        ? iconsObject.topArrow
                        : iconsObject.dropdownArrow
                    }
                  />
                </Button>
                {isLanguageDropdownOpen && (
                  <div className={styles["language-dropdown"]}>
                    <Button
                      className={`${styles["language-option"]} ${
                        language === "en" ? styles.active : ""
                      }`}
                      onClick={() => {
                        setLanguage("en");
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      English
                    </Button>
                    <Button
                      className={`${styles["language-option"]} ${
                        language === "ar" ? styles.active : ""
                      }`}
                      onClick={() => {
                        setLanguage("ar");
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      العربية
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Header */}
      <div className={styles["header-main"]} ref={mobileMenuRef}>
        <div className={styles["header-main-container"]}>
          <Button
            className={styles["mobile-menu-toggle"]}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 5H18M2 10H18M2 15H18"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Button>

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
            <Image src={aleenaLogo} alt={"Aleena"} />
          </div>

          <div className={styles["header-actions"]}>
            <a
              href="#"
              className={`${styles["action-link"]} ${styles["account-link"]}`}
            >
              {t("header.account")}
            </a>
            <Button className={styles["action-button"]}>
              <Icon
                name={
                  isMobileView ? iconsObject.userAvatar : iconsObject.search
                }
              />
            </Button>
            <Button className={styles["action-button"]}>
              <Icon name={iconsObject.shoppingBag} />
            </Button>
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
