
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { SalesProvider } from "./context/SalesContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <UserProvider>
          <SalesProvider>
            <AppRoutes />
          </SalesProvider>
        </UserProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
