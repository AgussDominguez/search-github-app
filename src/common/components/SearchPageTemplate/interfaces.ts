import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export enum SearchType {
  Users = 'User',
  Repositories = 'Repository',
}

export type SearchPageTemplateProps = {
  testID: string;
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  type: SearchType;
};
