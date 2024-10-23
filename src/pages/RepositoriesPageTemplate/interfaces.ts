import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IUser} from '../UsersPageTemplate/interfaces';

export type RepositoriesPageTemplateProps = Partial<{
  testID: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
}>;

export type IRepository = {
  id: number;
  name: string;
  private: boolean;
  owner: IUser;
  description: string;
};
