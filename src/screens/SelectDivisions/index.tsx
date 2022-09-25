import React from "react";
import { Image, SafeAreaView } from "react-native";

import { DIVISIONS_LIST } from "./constants";
import { Header } from "../../components/Header";
import { Button } from "../../components/Form/Button";

import { styles } from "./styles";

const questionImage = require("../../../assets/icons/question.svg");

export function SelectDivisions() {
  console.log('questionImage', questionImage);
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {DIVISIONS_LIST.map((division, divisionIndex) => (
        <Button
          key={`division_${divisionIndex}`}
          justifyContent="space-between"
          content={
            <>
              {division.title}

              <Image style={styles.icon} source={{uri: questionImage}} />
            </>
          }
        />
      ))}
    </SafeAreaView>
  );
}
