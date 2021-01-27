import React from 'react';
import {StyleSheet, View, TextInput, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const TextBox = (props) => {
  const {
    errorDisplayText,
    placeholderText,
    textInputHeaderDisplayText,
    textInputText,
    iconType,
    textBoxID,
    ...rest
  } = props;
  const [focus, setFocus] = React.useState(props.focus);

  return (
    <View style={styles.textInputView}>
      <Text style={styles.textInputHeaderText}>
        {textInputHeaderDisplayText}
      </Text>
      <View style={styles.action}>
        <TextInput
          value={textInputText}
          style={[
            styles.textInput,
            {
              color: '#ffffff',
            },
          ]}
          placeholder={placeholderText}
          placeholderTextColor="#ffffff8c"
          setFocus={focus}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          {...rest}
        />
        <Icon name={iconType} color="#D83A2F" size={20} />
      </View>

      <Text style={styles.errorText}>{errorDisplayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: Platform.OS === 'ios' ? 1 : 5,
    backgroundColor: '#141414',
    flex: 1,
  },
  errorText: {
    color: '#D83A2F',
    fontSize: 11,
    fontFamily: 'Rubik-Regular',
    marginTop: 5,
  },
  textInputView: {
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  textInputHeaderText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Rubik-Regular',
    textAlign: 'left',
    marginBottom: 5,
  },
  action: {
    flexDirection: 'row',
    backgroundColor: '#C2C9C91A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default TextBox;
