import React from "react";
import { FormattedMessage } from "react-intl";

import * as Styled from "./styles";
import TextInput from "../textInput";
import Button from "../button";
import Spacing from "../spacing";

interface Props {
  keyword: string;
  onChange: Function;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function SearchWidgetRender({ onChange, onSubmit }: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <FormattedMessage id="searchhint">
          {(placeholder: string) => (
            <TextInput
              testid="search-input"
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
            />
          )}
        </FormattedMessage>
      </Styled.Item>
      <Styled.Item>
        <Spacing horizontal="small">
          <Button testid="search-submit" variant="primary" onClick={onSubmit}>
            <FormattedMessage id="search" />
          </Button>
        </Spacing>
      </Styled.Item>
    </Styled.Wrapper>
  );
}

export default SearchWidgetRender;
