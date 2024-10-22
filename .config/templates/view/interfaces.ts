import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { NavProps } from '../../../src/App/interfaces';

export type TemplateNameProps = NavProps &
  Partial<{
    testID: string;
    style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  }>;
