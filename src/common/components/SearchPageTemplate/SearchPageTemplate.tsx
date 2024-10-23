import React, {FC} from 'react';
import {SearchPageTemplateProps} from './interfaces';
import {SearchPageTemplateStyles} from './styles';
import {View} from '@gluestack-ui/themed';
import {Heading, Input, InputField} from '../../../ui';

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
        <InputField placeholder={`Insert ${type?.toLowerCase()} here....`} />
      </Input>
    </View>
  );
};

export default SearchPageTemplate;
