import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";
import { useSelectDivisions } from "./hooks";
import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";

const questionImage = require("../../../assets/icons/question.svg");

export function SelectDivisions() {
  const { list, setCurrentDivision } = useSelectDivisions();

  return (
    <PageContainer hasBackButton={false}>
      {list.map((division, divisionIndex) => (
        <Button
          justifyContent="space-between"
          key={`division_${divisionIndex}`}
          onPress={() => setCurrentDivision(division)}
          content={
            <>
              {division.title}

              <Image style={styles.icon} source={{ uri: questionImage }} />
            </>
          }
        />
      ))}
    </PageContainer>
  );
}
