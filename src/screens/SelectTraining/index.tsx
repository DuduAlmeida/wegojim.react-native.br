import React from "react";

import { styles } from "./styles";
import { useSelectTraining } from "./hooks";
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { Button } from "../../components/Form/Button";
import { PageContainer } from "../../components/PageContainer";
import { ListContainer } from "../../components/ListContainer";
import { Card } from "../../components/Card";
import { THEME } from "../../theme";
import { SearchForm } from "../../components/SearchForm";

export function SelectTraining() {
  const { list, title, setCurrentTraining } = useSelectTraining();

  return (
    <PageContainer>

      <Text style={styles.title}>
        Treino {title}
      </Text>

      <SearchForm />

      <ListContainer>
        {list.map((training, trainingIndex) => (
          <Card
            key={`training_${trainingIndex}`}
            title={training.title}
            onPress={() => setCurrentTraining(training)}
          />
        ))}
      </ListContainer>

    </PageContainer>
  );
}
