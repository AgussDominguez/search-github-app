import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IUser} from '../../../pages/UsersPageTemplate/interfaces';
import {IRepository} from '../../../pages/RepositoriesPageTemplate/interfaces';

export enum SearchType {
  Users = 'users',
  Repositories = 'repositories',
}

export type SearchPageTemplateProps = {
  testID: string;
  style: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  type: SearchType;
  usersList?: IUser[];
  repositoriesList?: IRepository[];
  loading: boolean;
};
