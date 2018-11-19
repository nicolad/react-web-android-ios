/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NewsFeed from './shared/NewsFeed';

export default class App extends Component {
  render() {
    return <NewsFeed />
  }
}
