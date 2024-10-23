import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type UsersPageTemplateProps = Partial<{
  testID: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}>;

export type IUser = {
  id: number;
  avatar_url: string;
  login: string;
  url: string;
};
