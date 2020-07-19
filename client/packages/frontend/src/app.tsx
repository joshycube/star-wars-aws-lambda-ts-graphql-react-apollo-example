import React from "react";
import { ApolloProvider } from "@apollo/client";
import { IntlProvider } from "react-intl";

import AppWrapper from "./components/appWrapper";
import Routes from "./routes";
import client from "./utils/getApolloClient";
import messages from "@swweight/shared/translations";

import "./index.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale="en" messages={messages["en"]}>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App;
