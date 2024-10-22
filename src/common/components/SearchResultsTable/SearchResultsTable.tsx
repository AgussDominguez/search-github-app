import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { SearchResultsTableProps } from './interfaces';
import { SearchResultsTableStyles } from './styles';

const SearchResultsTable: FC<SearchResultsTableProps> = ({
  testID = 'search-results-table',
  style,
}) => {
  return (
    <View testID={testID} style={[SearchResultsTableStyles.container, style]}>
      <Text>SearchResultsTable component</Text>
    </View>
  );
};

export default SearchResultsTable;
