import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type SearchResultsTableProps = Partial<{
  testID: string;
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}>;
