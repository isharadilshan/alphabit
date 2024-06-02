import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => navigation.navigate('HOME')}>welcome screen</Text>
    </View>
  );
};

export default WelcomeScreen;
