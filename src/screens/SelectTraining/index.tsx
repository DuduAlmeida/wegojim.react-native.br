import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";
import { useSelectTraining } from "./hooks";
import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";

const questionImage = require("../../../assets/icons/question.svg");

export function SelectTraining() {
  const { list, setCurrentTraining } = useSelectTraining();

  return (
    <PageContainer>
      {list.map((training, trainingIndex) => (
        <Button
          key={`training_${trainingIndex}`}
          onPress={() => setCurrentTraining(training)}
          justifyContent="space-between"
          content={
            <>
              {training.title}

              <Image style={styles.icon} source={{ uri: questionImage }} />
            </>
          }
        />
      ))}
    </PageContainer>
  );
}
