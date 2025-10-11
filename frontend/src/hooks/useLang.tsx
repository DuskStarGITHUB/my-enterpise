/**
 * =====================================================
 *  NAME    : useLang.tsx
 *  DATE    : 23/09/2025
 *  DESCRIPTION: CUSTOM HOOK TO ACCESS LANGUAGE STATE
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { useTranslation } from "react-i18next";
import { Lang, setLang } from "@/store/tasks/langState";

// HOOK
export const useLang = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { i18n } = useTranslation();
  const langRedux = useSelector((state: RootState) => state.lang.current);
  useEffect(() => {
    const storedLang = (localStorage.getItem("i18nextLng") as Lang) || "es";
    if (storedLang !== langRedux) {
      dispatch(setLang(storedLang));
      i18n.changeLanguage(storedLang);
    }
  }, [dispatch, i18n]);
  const set = (newLang: Lang) => {
    dispatch(setLang(newLang));
    localStorage.setItem("i18nextLng", newLang);
    i18n.changeLanguage(newLang);
  };
  return { lang: langRedux, set };
};
