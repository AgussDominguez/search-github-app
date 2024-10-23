import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type UsersPageTemplateProps = Partial<{
  testID: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}>;
