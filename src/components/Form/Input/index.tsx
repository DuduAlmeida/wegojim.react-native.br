import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import {
  Icon,
  Error,
  Label,
  FormInput,
  Container,
  InputContainer,
  ToggleShowPassButton,
} from "./styles";
import { If } from '../../If';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  title?: string;
  error?: string;
}

export function Input({
  name,
  control,
  title,
  error,
  secureTextEntry,
  ...rest
}: Props) {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <Container>
      <If condition={!!title}>
        <Label>{title}</Label>
      </If>
      <If condition={!!error}>{error && <Error>{error}</Error>}</If>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputContainer>
            <FormInput
              {...rest}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry && passwordHidden}
            />
            {secureTextEntry && (
              <ToggleShowPassButton
                onPress={() => setPasswordHidden(!passwordHidden)}
              >
                <Icon name={passwordHidden ? "eye-off" : "eye"} />
              </ToggleShowPassButton>
            )}
          </InputContainer>
        )}
      />
    </Container>
  );
}
