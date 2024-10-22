import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type RepositoriesPageTemplateProps = Partial<{
  testID: string;
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}>;
