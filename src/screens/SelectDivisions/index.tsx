import React from "react";

import { useSelectDivisions } from "./hooks";
// import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";
import { ListContainer } from "../../components/ListContainer";
import { Card } from "../../components/Card";


export function SelectDivisions() {

  const { list, setCurrentDivision } = useSelectDivisions();

  return (
    <PageContainer hasBackButton={false}>
      <ListContainer>
        {list.map((division, divisionIndex) => (
          <Card
            key={`division_${divisionIndex}`}
            title={division.title}
            onPress={() => setCurrentDivision(division)}
          />
        ))}
      </ListContainer>
    </PageContainer>
  );
}
