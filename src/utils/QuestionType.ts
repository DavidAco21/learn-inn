export interface QuestionType {
  id: number;
  name: string;
  description?: string;
  duration: number;
  type: number;
  createdBy: string;


  option: {
    multipleChoice: [
      {
        answer: string;
        rightAnswer: boolean;
      }
    ];
    trueOrFalse: [
        {
            answer: string;
            rightAnswer: boolean;
        },
        {
            answer: string;
            rightAnswer: boolean;
        }
    ];
    shortAnswer: {
      isShortAnswer: boolean;
    };
  };


}
