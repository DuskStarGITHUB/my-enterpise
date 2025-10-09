/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 09/10/2025
 *  DESCRIPTION: NOT FOUND PAGE
 * =====================================================
 */
// DEPENDENCIES
import { useTranslation } from "react-i18next";

// NOT FOUND PAGE
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <section className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">{t("not-found.message")}</p>
      <span className="animate-bounce">
        <svg
          className="mx-auto size-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </span>
      <p className="mt-4 text-gray-600">
        {t("not-found.go-back-home")}{" "}
        <a className="text-blue-500" href="/">
          {t("not-found.home")}
        </a>
      </p>
    </section>
  );
};
export default NotFoundPage;
