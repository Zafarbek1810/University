import { HeaderProvider } from "../src/Context/HeaderContext";
import "../styles/globals.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfirmProvider } from "material-ui-confirm";

import {UserContextProvider} from "../src/Context/UserContext";
import { ToastContainer } from "react-toastify";
if (typeof window === undefined) {
  var window = {};
}

const lang = window?.localStorage?.getItem("siteLang") || "ru";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["ru", "en", "uz"],
    lng: lang,
    fallbackLng: "ru",
    detectionL: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    ns: ["translation"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: true },
  });

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <ConfirmProvider>
        <HeaderProvider>
          <Component {...pageProps} />
          <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </HeaderProvider>
      </ConfirmProvider>
     </UserContextProvider>
  );
}

export default MyApp;
