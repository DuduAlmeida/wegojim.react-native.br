import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";
import { DIVISIONS_LIST } from "./constants";
import { useSelectDivisions } from "./hooks";
import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";

const questionImage = require("../../../assets/icons/question.svg");

export function SelectDivisions() {
  const { list, setCurrentDivision } = useSelectDivisions();

  return (
    <PageContainer>
      {list.map((division, divisionIndex) => (
        <Button
          key={`division_${divisionIndex}`}
          onPress={() => setCurrentDivision(division)}
          justifyContent="space-between"
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
