import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import APIConnectionTAXSettingsEnhanced from "./pages/APIConnectionTAXSettingsEnhanced";
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
        title = "API Connector - TAX Settings";
        metaDescription = "Configure tax form collection and processing settings for your API connector";
        break;
      case "/api-connection-payouts-settings-edit-disabled":
        title = "API Connector - Payouts Settings";
        metaDescription = "Configure payout settings for your API connector";
        break;
      case "/api-connection-payouts-settings-default":
        title = "API Connector - Payouts Settings";
        metaDescription = "Configure default payout settings for your API connector";
        break;
      case "/api-connection-self-invoice-settings-default":
        title = "API Connector - Self Invoice Settings";
        metaDescription = "Configure self-invoice settings for your API connector";
        break;
      case "/api-connection-payouts-eligibility":
        title = "API Connector - Payouts Eligibility";
        metaDescription = "Configure payout eligibility criteria for your API connector";
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
    <>
      <Routes>
        <Route path="/" element={<APIConnectionTAXSettingsEnhanced />} />
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
      
      {/* Global Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--Tooltip-190-Tooltip-fill)',
            color: 'var(--Default-290-Text)',
            border: '1px solid var(--Disabled-Default-310-CB-RB-stroke)',
            borderRadius: 'var(--br-8)',
            fontFamily: 'var(--Inter)',
            fontSize: 'var(--Paragraph-14-Paragraph-bold-Font-Size)',
          },
          success: {
            iconTheme: {
              primary: 'var(--Notes-Statuses-Sucsess-250-Stroke-statuses)',
              secondary: 'var(--Tooltip-190-Tooltip-fill)',
            },
          },
          error: {
            iconTheme: {
              primary: 'var(--Items-Error-default-Items-170-Text-Error-default)',
              secondary: 'var(--Tooltip-190-Tooltip-fill)',
            },
          },
        }}
      />
    </>
  );
}

export default App;
