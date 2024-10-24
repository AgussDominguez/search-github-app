import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TemplateNameProps = Partial<{
  testID: string;
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}>;
