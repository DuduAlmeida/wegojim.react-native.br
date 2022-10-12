import { DivisionProxy } from "./types";
import { FirebaseResponse } from './../firebase/types';

export const Division = (response: any = {}): DivisionProxy => ({
  id: response?.id || "#id_error",
  type: response?.type || "division",
  title: response?.title || "",
  description: response?.description || "",
});

export const DivisionList = (response: FirebaseResponse): DivisionProxy[] =>
  Object.entries(response).map(([key, value]) =>
    Division({
      id: key,
      ...value,
    })
  ) || [];

export default {};
