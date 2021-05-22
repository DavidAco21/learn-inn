import React from "react";
import { QuestionType } from "./QuestionType";

export const QuestionContext = React.createContext({
  questions: [] as QuestionType[],
});
