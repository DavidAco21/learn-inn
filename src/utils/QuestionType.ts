export interface QuestionType {
  id: number;
  name: string;
  description?: string;
  duration: number;
  type: 'multipleChoice'|'boolean'|'shortAnswer'|'poll';
  createdBy: string;
  time: number;

  options: {
    text: string,
    rightAnswer?: boolean;
  }[];
}

