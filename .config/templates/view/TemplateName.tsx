import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { TemplateNameProps } from './interfaces';
import { TemplateNameStyles } from './styles';

const TemplateName: FC<TemplateNameProps> = ({
  testID = 'template-name',
  style,
}) => {
  return (
    <View testID={testID} style={[TemplateNameStyles.container, style]}>
      <Text>TemplateName component</Text>
    </View>
  );
};

export default TemplateName;
