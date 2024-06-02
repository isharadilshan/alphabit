import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useQuery, gql} from '@apollo/client';

const GET_POSTS = gql`
  query FetchAllPosts {
    posts {
      id
    }
  }
`;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const {loading, error, data} = useQuery(GET_POSTS);

  console.log(
    'LOADINF G --------------',
    loading,
    'ERROR ------------',
    error,
    'DATA -----------------',
    data,
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => navigation.navigate('WELCOME')}>home screen</Text>
    </View>
  );
};

export default HomeScreen;
