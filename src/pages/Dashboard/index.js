import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
};

const Dashboard = () => {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
