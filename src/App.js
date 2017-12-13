import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyC_MY3YxvFo-8JLGEGD6gfOt-EAkJvOv44',
        authDomain: 'authentication-a5cc5.firebaseapp.com',
        databaseURL: 'https://authentication-a5cc5.firebaseio.com',
        projectId: 'authentication-a5cc5',
        storageBucket: 'authentication-a5cc5.appspot.com',
        messagingSenderId: '651801900518'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return (
            <Card>
              <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                  Log Out
                </Button>
              </CardSection>
            </Card>
          );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
            <Spinner size="large" />
            </CardSection>
          </Card>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
