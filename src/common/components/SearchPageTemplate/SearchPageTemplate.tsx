import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {useManageUsers} from '../../../pages/UsersPageTemplate/hooks/ManageUsers';
import {Heading, Input, InputField} from '../../../ui';
import {SearchPageTemplateProps, SearchType} from './interfaces';
import {SearchPageTemplateStyles} from './styles';
import {useManageRepositories} from '../../../pages/RepositoriesPageTemplate/hooks/ManageRepositories/useManageRepositories';
import RepositoriesTable from '../../../pages/RepositoriesPageTemplate/components/RepositoriesTable';
import UsersTable from '../../../pages/UsersPageTemplate/components/UsersTable';

const SearchPageTemplate: FC<SearchPageTemplateProps> = ({
  testID = 'search-page-template',
  style,
  type,
  usersList,
  repositoriesList,
  loading,
}) => {
  const {updateTempQuery: updateUsersQuery} = useManageUsers();
  const {updateTempQuery: updateRepositoriesQuery} = useManageRepositories();

  const handleQuery = (value: string) => {
    switch (type) {
      case SearchType.Users:
        updateUsersQuery(value);
        break;

      case SearchType.Repositories:
        updateRepositoriesQuery(value);
        break;
    }
  };
  return (
    <View
      p="$10"
      testID={testID}
      style={[SearchPageTemplateStyles.container, style]}>
      <Heading>
        What
        <Heading color="$primary500"> Github {type} </Heading>
        do you want to search?
      </Heading>
      <Input
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField
          onChangeText={handleQuery}
          placeholder={`Write the ${type?.toLowerCase()} name here....`}
        />
      </Input>
      {type === SearchType.Users && usersList !== undefined && (
        <UsersTable loading={loading} resultsList={usersList} />
      )}
      {type === SearchType.Repositories && repositoriesList !== undefined && (
        <RepositoriesTable loading={loading} resultsList={repositoriesList} />
      )}
    </View>
  );
};

export default SearchPageTemplate;
