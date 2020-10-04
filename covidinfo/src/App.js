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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#dc3644" />
      <SafeAreaView >
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
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.headerTitle}>Today</Text>
                  <Text style={styles.headerTitleBold}>Corona Statistics</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'flex-end', flexDirection: 'row' }}>
                  <Text style={{ color: 'white', justifyContent: 'center',marginBottom:3 }}>Details</Text>
                  <Icon name="arrow-forward-ios" size={15} color='#fff' />
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 40, marginBottom: 30 }}>
                <View style={{ flex: 1, height: 50, alignItems: 'center', borderRightColor: 'white', borderRightWidth: .5 }}>
                  <Text style={styles.displayFont}>287k</Text>
                  <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Cases</Text>
                </View>
                <View style={{ flex: 1, height: 50, alignItems: 'center', borderRightColor: 'white', borderRightWidth: .5 }}>
                  <Text style={styles.displayFont}>215k</Text>
                  <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Recovered</Text>
                </View>
                <View style={{ flex: 1, height: 50, alignItems: 'center' }}>
                  <Text style={styles.displayFont}>10k</Text>
                  <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Deaths</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.body}>
            <View style={[styles.bodyRounded]}>
              <Text style={styles.sectionTitle}>Apa yang Harus Diketahui</Text>
              <ScrollView horizontal={true} style={{ paddingLeft:25, paddingBottom: 10 }} showsHorizontalScrollIndicator={false}>
                <Card bgColor='#dc3644' color='#fff' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
              </ScrollView>
              <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Title Section</Text>
              <ScrollView horizontal={true} style={{ paddingLeft: 25, paddingBottom: 10 }} showsHorizontalScrollIndicator={false}>
                <Card bgColor='#dc3644' color='#fff' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
              </ScrollView>
              <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Title Section</Text>
              <ScrollView horizontal={true} style={{ paddingLeft: 25, paddingBottom: 10 }} showsHorizontalScrollIndicator={false}>
                <Card bgColor='#dc3644' color='#fff' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
                <Card bgColor='#edf2f4' color='#495867' />
              </ScrollView>
            </View>
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
    backgroundColor: '#dc3644',
  },
  bodyRounded: {
    // paddingLeft: 25,
    // paddingHorizontal: 25,
    paddingVertical: 25,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    backgroundColor: '#fff'
  },
  sectionContainer: {
    marginVertical: 32,
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#fff',
  },
  headerTitleBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1d3557',
    marginHorizontal: 25
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
    fontSize: 23,
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
