export interface QuestionType {
  id: number;
  name: string;
  description?: string;
  duration: number;
  type: 'multipleChoice'|'boolean'|'shortAnswer'|'poll';
  createdBy: string;
  time: number;

  value?: boolean; // only for boolean type
  options?: {
    text: string,
    rightAnswer?: boolean;
  }[];
}

