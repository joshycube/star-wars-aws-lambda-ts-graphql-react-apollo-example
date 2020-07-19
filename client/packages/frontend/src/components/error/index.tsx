import React from "react";
import { FormattedMessage } from "react-intl";
import { ApolloError } from "@apollo/client";

import * as Styled from "./styles";
import Spacing from "../spacing";
import Typography from "../typography";

export interface Props {
  error: ApolloError;
  subject?: string;
}

function Error({ error, subject }: Props) {
  return (
    <Spacing horizontal="none" vertical="medium">
      <Styled.Wrapper data-test-id="error-wrapper">
        {error.graphQLErrors.map(
          (errorObj: any): JSX.Element => {
            if (errorObj.extensions.exception.status === 404) {
              return (
                <Typography key={errorObj.message}>
                  <FormattedMessage
                    id="E000001"
                    values={{
                      subject,
                    }}
                  />
                </Typography>
              );
            }
            return (
              <Typography key={errorObj.message}>{errorObj.message}</Typography>
            );
          }
        )}
      </Styled.Wrapper>
    </Spacing>
  );
}

export default Error;
