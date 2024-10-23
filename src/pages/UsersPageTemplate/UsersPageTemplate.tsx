import React, {FC} from 'react';
import SearchPageTemplate from '../../common/components/SearchPageTemplate';
import {SearchType} from '../../common/components/SearchPageTemplate/interfaces';
import {UsersPageTemplateProps} from './interfaces';
import {UsersPageTemplateStyles} from './styles';

const UsersPageTemplate: FC<UsersPageTemplateProps> = ({
  testID = 'users-page-template',
}) => {
  return (
    <SearchPageTemplate
      testID={testID}
      style={UsersPageTemplateStyles.container}
      type={SearchType.Users}
    />
  );
};

export default UsersPageTemplate;
