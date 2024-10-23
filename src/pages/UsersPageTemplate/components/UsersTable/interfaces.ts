import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IUser} from '../../interfaces';

export type UsersTableProps = {
  testID?: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  resultsList: IUser[];
  loading: boolean;
};
