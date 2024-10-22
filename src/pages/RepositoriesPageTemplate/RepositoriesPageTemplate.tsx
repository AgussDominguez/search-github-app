import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {Heading, Input, InputField} from '../../ui';
import {RepositoriesPageTemplateProps} from './interfaces';
import {UsersPageTemplateStyles} from '../UsersPageTemplate/styles';

const RepositoriesPageTemplate: FC<RepositoriesPageTemplateProps> = ({
  testID = 'repositories-page-template',
  style,
}) => {
  return (
    <View
      p="$10"
      testID={testID}
      style={[UsersPageTemplateStyles.container, style]}>
      <Heading>
        What<Heading color="$primary500"> Github Repository </Heading>
        do you want to search?
      </Heading>
      <Input
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField placeholder="Insert repository name here...." />
      </Input>
    </View>
  );
};

export default RepositoriesPageTemplate;
