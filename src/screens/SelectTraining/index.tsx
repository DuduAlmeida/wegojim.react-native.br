import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";
import { useSelectTraining } from "./hooks";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";
import { Title } from '../../components/Typography';

const questionImage = require("../../../assets/icons/question.svg");

export function SelectTraining() {
  const { list, title, control, setCurrentTraining } = useSelectTraining();

  return (
    <PageContainer>
      <Title>Treino {title}</Title>
      <Input
        control={control}
        name="search-training"
        placeholder="Pesquisar em treinos..."
      />
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
