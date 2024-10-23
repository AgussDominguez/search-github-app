import React, {FC} from 'react';
import SearchPageTemplate from '../../common/components/SearchPageTemplate';
import {SearchType} from '../../common/components/SearchPageTemplate/interfaces';
import {RepositoriesPageTemplateProps} from './interfaces';
import {RepositoriesPageTemplateStyles} from './styles';

const RepositoriesPageTemplate: FC<RepositoriesPageTemplateProps> = ({
  testID = 'repositories-page-template',
}) => {
  return (
    <SearchPageTemplate
      testID={testID}
      style={RepositoriesPageTemplateStyles.container}
      type={SearchType.Repositories}
    />
  );
};

export default RepositoriesPageTemplate;
