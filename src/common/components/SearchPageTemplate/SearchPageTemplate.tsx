import React, {FC} from 'react';
import {SearchPageTemplateProps} from './interfaces';
import {SearchPageTemplateStyles} from './styles';
import {View} from '@gluestack-ui/themed';
import {Heading, Input, InputField} from '../../../ui';
import SearchResultsTable from '../SearchResultsTable';

const SearchPageTemplate: FC<SearchPageTemplateProps> = ({
  testID = 'search-page-template',
  style,
  type,
}) => {
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
          placeholder={`Write the ${type?.toLowerCase()} name here....`}
        />
      </Input>
      <SearchResultsTable
        resultsList={[
          {
            id: 1,
            avatar_url: 'https://avatars.githubusercontent.com/u/73178068?v=4',
            login: 'edu-amr',
            url: 'https://api.github.com/users/AgussDominguez',
          },
          {
            id: 2,
            avatar_url: 'https://avatars.githubusercontent.com/u/91979239?v=4',
            login: 'AgussDominguez',
            url: 'https://api.github.com/users/edu-amr',
          },
        ]}
      />
    </View>
  );
};

export default SearchPageTemplate;
