export interface OutUseTemplateName {
  testID?: string;
  increment: () => void;
  templateName: number;
}

export type UseTemplateName = () => OutUseTemplateName;

export type templateNameState = {
  templateName: number;
  inc: () => void;
  dec: () => void;
};
