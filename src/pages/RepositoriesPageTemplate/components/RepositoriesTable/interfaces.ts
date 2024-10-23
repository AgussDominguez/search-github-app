import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IRepository} from '../../interfaces';

export type RepositoriesTableProps = {
  testID?: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  resultsList: IRepository[];
  loading: boolean;
};
