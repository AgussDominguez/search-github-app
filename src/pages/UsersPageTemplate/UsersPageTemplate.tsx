import React, {FC} from 'react';
import SearchPageTemplate from '../../common/components/SearchPageTemplate';
import {SearchType} from '../../common/components/SearchPageTemplate/interfaces';
import {useManageUsers} from './hooks/ManageUsers';
import {UsersPageTemplateProps} from './interfaces';
import {UsersPageTemplateStyles} from './styles';

const UsersPageTemplate: FC<UsersPageTemplateProps> = ({
  testID = 'users-page-template',
}) => {
  const {usersList, loading} = useManageUsers();

  return (
    <SearchPageTemplate
      testID={testID}
      style={UsersPageTemplateStyles.container}
      type={SearchType.Users}
      usersList={usersList}
      loading={loading}
    />
  );
};

export default UsersPageTemplate;
