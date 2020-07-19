import React from "react";

import { DispatchCharacter } from "@swweight/shared/types/Character";

import SearchResults from "../searchResults";
import SearchWidgetRender from "./render";

interface Props {
  dispatchCharacter: DispatchCharacter;
}

function SearchWidget({ dispatchCharacter }: Props) {
  const [keyword, setKeyword] = React.useState<string>("");
  const [submit, setSubmit] = React.useState<boolean>(false);

  React.useEffect(() => {
    setSubmit(false);
  }, [keyword]);

  return (
    <React.Fragment>
      <SearchWidgetRender
        keyword={keyword}
        onChange={setKeyword}
        onSubmit={() => setSubmit(!submit)}
      />
      {submit && keyword.length >= 3 && (
        <SearchResults
          dispatchCharacter={dispatchCharacter}
          keyword={keyword}
        />
      )}
    </React.Fragment>
  );
}

export default SearchWidget;
