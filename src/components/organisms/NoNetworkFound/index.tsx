import React, {useEffect, useState} from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import {Linking} from 'react-native';
import createStyles from './styles';

const NoNetworkFound: React.FC = () => {
  const [noNetworkState, setNoNetworkState] = useState<boolean>(false);
  const [userDismissed, setUserDismissed] = useState<boolean>(false);
  const cancelRef = React.useRef(null);
  const styles = createStyles();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setNoNetworkState(false);
      } else {
        setNoNetworkState(true);
      }
    });
    return unsubscribe();
  }, []);

  const reCheck = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setNoNetworkState(false);
      } else {
        setNoNetworkState(true);
      }
    });
  };

  const openSettings = () => {
    Linking.openURL('app-settings:');
  };

  return (
    <Portal>
      <Dialog
        visible={noNetworkState && !userDismissed}
        onDismiss={() => setUserDismissed(true)}>
        <Dialog.Title style={styles.alertHeader}>
          {'Network Error'}
        </Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            {'Please check your internet connection and try again!'}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={reCheck} ref={cancelRef}>
            Retry
          </Button>
          <Button onPress={openSettings}>Settings</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default NoNetworkFound;
