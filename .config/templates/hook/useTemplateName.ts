import { create } from 'zustand';
import { type templateNameState } from './interfaces';

export const templateNameStore = create<templateNameState>((set) => ({
  templateName: 0,
  inc: (): void => set((state) => ({ templateName: state.templateName + 1 })),
  dec: (): void => set((state) => ({ templateName: state.templateName - 1 })),
}));

export const useTemplateName = (): templateNameState => {
  const { templateName, inc, dec } = templateNameStore();
  return { templateName, inc, dec };
};
