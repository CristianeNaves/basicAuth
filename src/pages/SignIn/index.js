import React, {useContext} from 'react'; // useContext -> lê variáveis (passadas pelo provider) de um contexto
import {Button, View} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
};

const SignIn = () => {
  const {signed, signIn} = useContext(AuthContext);

  console.log(signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
