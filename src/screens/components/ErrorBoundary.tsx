import {StyleSheet, View} from 'react-native';
import React from 'react';
import RNRestart from 'react-native-restart';
import {Text, Button} from 'native-base';

interface Props {
  children: React.ReactNode;
}

interface States {
  hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<Props, States> {
  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    if (__DEV__) {
      console.log('getDerivedStateFromError:', error);
    }
    return {hasError: true};
  }

  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error: unknown, info: unknown) {
    // logComponentStackToMyService(info.componentStack)
    if (__DEV__) {
      console.log('CRASH ERROR:', error);
      console.log('CRASH INFO', info);
    }
  }

  onReloadApp = () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={styles.container}>
          <Text>Something went wrong</Text>
          <Button
            size={'md'}
            variant="outline"
            colorScheme="primary"
            style={styles.button}
            onPress={this.onReloadApp}>
            Go back to Home screen
          </Button>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '50%',
  },
});

export default ErrorBoundary;
