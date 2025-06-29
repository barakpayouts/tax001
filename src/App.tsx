import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import APIConnectionTAXSettingsEnable from "./pages/APIConnectionTAXSettingsEnable";
import APIConnectionPayoutsSettingsEditDisabled from "./pages/APIConnectionPayoutsSettingsEditDisabled";
import APIConnectionPayoutsSettingsDefault from "./pages/APIConnectionPayoutsSettingsDefault";
import APIConnectionSelfInvoiceSettingsDefault from "./pages/APIConnectionSelfInvoiceSettingsDefault";
import APIConnectionPayoutsEligibility from "./pages/APIConnectionPayoutsEligibility";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/api-connection-payouts-settings-edit-disabled":
        title = "";
        metaDescription = "";
        break;
      case "/api-connection-payouts-settings-default":
        title = "";
        metaDescription = "";
        break;
      case "/api-connection-self-invoice-settings-default":
        title = "";
        metaDescription = "";
        break;
      case "/api-connection-payouts-eligibility":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<APIConnectionTAXSettingsEnable />} />
      <Route
        path="/api-connection-payouts-settings-edit-disabled"
        element={<APIConnectionPayoutsSettingsEditDisabled />}
      />
      <Route
        path="/api-connection-payouts-settings-default"
        element={<APIConnectionPayoutsSettingsDefault />}
      />
      <Route
        path="/api-connection-self-invoice-settings-default"
        element={<APIConnectionSelfInvoiceSettingsDefault />}
      />
      <Route
        path="/api-connection-payouts-eligibility"
        element={<APIConnectionPayoutsEligibility />}
      />
    </Routes>
  );
}
export default App;
