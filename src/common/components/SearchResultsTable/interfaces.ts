import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IUser} from '../../../pages/UsersPageTemplate/interfaces';

export type SearchResultsTableProps = {
  testID?: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  resultsList: IUser[];
};
