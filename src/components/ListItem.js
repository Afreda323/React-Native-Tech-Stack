import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    // Enable LayoutAnimation under Android
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { item, expanded } = this.props
    if (expanded) {
      return (
        <CardSection>
          <Text style={style.description}>{item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.item.id)}>
        <View>
          <CardSection>
              <Text style={style.title}>
                {this.props.item.title}
              </Text>
          </CardSection>
          {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    )
  }
}
const style = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  },
  description: {
    paddingLeft: 15,
    flex: 1
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedId === ownProps.item.id;
  return { expanded }
}
export default connect(mapStateToProps, actions)(ListItem);
