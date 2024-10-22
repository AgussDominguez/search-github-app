import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {Heading, Input, InputField} from '../../ui';
import {UsersPageTemplateProps} from './interfaces';
import {UsersPageTemplateStyles} from './styles';

const UsersPageTemplate: FC<UsersPageTemplateProps> = ({
  testID = 'users-page-template',
  style,
}) => {
  return (
    <View
      p="$10"
      testID={testID}
      style={[UsersPageTemplateStyles.container, style]}>
      <Heading>
        What<Heading color="$primary500"> Github User </Heading>
        do you want to search?
      </Heading>
      <Input
        variant="underlined"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField placeholder="Insert user here...." />
      </Input>
    </View>
  );
};

export default UsersPageTemplate;
