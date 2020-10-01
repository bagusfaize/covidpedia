/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.header}>
            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.sectionTitle}>Today</Text>
                <Text style={styles.sectionTitleBold}>Corona Virus Update</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 55 }}>
                <View style={{ flex: 1, height: 50, alignItems: 'center', borderRightColor:'white', borderRightWidth:.5}}>
                  <Text style={styles.displayFont}>287.000</Text>
                  <Text style={{fontSize:14, color:'#fff', fontWeight: 'bold'}}>Cases</Text>
                </View>
                <View style={{ flex: 1, height: 50, alignItems: 'center', borderRightColor:'white', borderRightWidth:.5}}>
                  <Text style={styles.displayFont}>215.000</Text>
                  <Text style={{fontSize:14, color:'#fff', fontWeight: 'bold'}}>Recovered</Text>
                </View>
                <View style={{ flex: 1, height: 50, alignItems: 'center'}}>
                  <Text style={styles.displayFont}>10.000</Text>
                  <Text style={{fontSize:14, color:'#fff', fontWeight: 'bold'}}>Deaths</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.body}>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  header: {
    backgroundColor: '#dc3644',
  },
  body: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginVertical: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#fff',
  },
  sectionTitleBold: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  displayFont: {
    fontSize:25,
    color: '#fff'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  bold: {
    fontWeight: "bold"
  }
});

export default App;
