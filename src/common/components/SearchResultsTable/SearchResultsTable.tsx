import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {IUser} from '../../../pages/UsersPageTemplate/interfaces';
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  HStack,
  Text,
} from '../../../ui';
import {SearchResultsTableProps} from './interfaces';
import {SearchResultsTableStyles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchResultsTable: FC<SearchResultsTableProps> = ({
  testID = 'search-results-table',
  style,
  resultsList,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const renderItem: ListRenderItem<IUser> = ({item}) => (
    <Box
      $base-pl={0}
      $base-pr={0}
      $sm-pl="$4"
      $sm-pr="$5"
      py="$2"
      borderBottomWidth={'$1'}
      borderColor="#dee8f4">
      <HStack space="md" justifyContent="center" alignItems="center">
        <Avatar size="sm">
          <AvatarImage source={{uri: item.avatar_url}} />
        </Avatar>
        <Box>
          <Text
            fontSize="$xs"
            color="$primary500"
            alignSelf="flex-start"
            $dark-color="$warmGray400"
            bold>
            {item.id.toString()}
          </Text>
        </Box>

        <Box w="$32">
          <Text
            alignSelf="flex-start"
            color="$coolGray800"
            fontWeight="$bold"
            $dark-color="$warmGray100">
            {item.login}
          </Text>
        </Box>
        <Box w={'$2/5'}>
          <Button
            w="$full"
            size="md"
            variant="link"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}>
            <Icon name={'open'} color="#235086" size={16} />
            <ButtonText color="#235086"> Go to profile</ButtonText>
          </Button>
        </Box>
      </HStack>
    </Box>
  );

  return (
    <View testID={testID} style={[SearchResultsTableStyles.container, style]}>
      <Box py="$10">
        <FlatList
          data={resultsList}
          renderItem={renderItem}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          keyExtractor={(item: any) => item.id}
        />
      </Box>
    </View>
  );
};

export default SearchResultsTable;
