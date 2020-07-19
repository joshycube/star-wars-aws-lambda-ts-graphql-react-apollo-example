import React from "react";
import { useQuery } from "@apollo/client";

import { DispatchCharacter } from "@swweight/shared/types/Character";
import Loader from "../loader";
import Error from "../error";

import { CHARACTER_QUERY } from "../../graphql/queries/character";
import SearchResultsRender from "./render";

interface Props {
  keyword: string;
  dispatchCharacter: DispatchCharacter;
}

function SearchResults({ keyword, dispatchCharacter }: Props) {
  const { loading, error, data } = useQuery(CHARACTER_QUERY, {
    variables: {
      name: keyword,
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} subject={keyword} />;
  }

  return (
    <SearchResultsRender
      dispatchCharacter={dispatchCharacter}
      results={data.character}
    />
  );
}

export default SearchResults;
