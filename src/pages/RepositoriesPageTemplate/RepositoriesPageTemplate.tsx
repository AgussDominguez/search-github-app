import React, {FC} from 'react';
import SearchPageTemplate from '../../common/components/SearchPageTemplate';
import {SearchType} from '../../common/components/SearchPageTemplate/interfaces';
import {useManageRepositories} from './hooks/ManageRepositories/useManageRepositories';
import {RepositoriesPageTemplateProps} from './interfaces';
import {RepositoriesPageTemplateStyles} from './styles';

const RepositoriesPageTemplate: FC<RepositoriesPageTemplateProps> = ({
  testID = 'repositories-page-template',
}) => {
  const {repositoriesList, loading} = useManageRepositories();
  return (
    <SearchPageTemplate
      testID={testID}
      style={RepositoriesPageTemplateStyles.container}
      type={SearchType.Repositories}
      repositoriesList={repositoriesList}
      loading={loading}
    />
  );
};

export default RepositoriesPageTemplate;
