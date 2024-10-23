import {View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  HStack,
  Spinner,
  Text,
} from '../../../../ui';
import {IRepository} from '../../interfaces';
import {RepositoriesTableProps} from './interfaces';
import {SearchResultsTableStyles} from './styles';

const RepositoriesTable: FC<RepositoriesTableProps> = ({
  testID = 'search-results-table',
  style,
  resultsList,
  loading,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const renderItem: ListRenderItem<IRepository> = ({item}) => (
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
          <AvatarImage source={{uri: item.owner.avatar_url}} />
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

        <Box w="$20">
          <Text
            alignSelf="flex-start"
            color="$coolGray800"
            fontWeight="$bold"
            $dark-color="$warmGray100">
            {item.name}
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
        {resultsList && (
          <FlatList
            data={resultsList}
            renderItem={renderItem}
            keyExtractor={(item: IRepository, index: number) =>
              item.id.toString() + index.toString()
            }
            ListEmptyComponent={
              loading ? <Spinner size="large" color={'$primary500'} /> : <></>
            }
          />
        )}
      </Box>
    </View>
  );
};

export default RepositoriesTable;
