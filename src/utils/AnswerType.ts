export interface AnswerType {
  id: string;
  questionId: string;
  createdBy: string;
  multipleChoice: [
    {
      index: number;
      checked: boolean;
    }
  ];
  trueOrFalse: {
    indexMarkedAnswer: number;
  };
  shortAnswer: {
    shortAnswer: string;
  };
}
