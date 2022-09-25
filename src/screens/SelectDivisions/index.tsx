import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";
import { DIVISIONS_LIST } from "./constants";
import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";

const questionImage = require("../../../assets/icons/question.svg");

export function SelectDivisions() {
  return (
    <PageContainer>
      {DIVISIONS_LIST.map((division, divisionIndex) => (
        <Button
          key={`division_${divisionIndex}`}
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
