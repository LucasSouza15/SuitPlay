import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Box, Container, PickerBox, PickerText, TextPicker} from './styles';

const ItemsCombo = [
  {
    label: 'Item 1',
    value: '1',
  },
  {
    label: 'Item 2',
    value: '2',
  },
];

type Props = {
  items: Array<{label: string; value: string}>;
  onSelectValue: (value: any) => void;
  text: string;
  width?: number;
};

const ComboBox: React.FC<Props> = ({width, text, onSelectValue, items}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <Container>
        <TextPicker>{text}</TextPicker>
        <Box>
          <Picker
            style={[PickerBox, {width: width ? width : 241}]}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => {
              onSelectValue(itemValue);
              setSelectedLanguage(itemValue);
            }}>
            {items.map((item, index) => (
              <Picker.Item
                style={PickerText}
                key={index}
                label={item.label}
                value={item.value}
                color={'#000'}
              />
            ))}
          </Picker>
        </Box>
      </Container>
    </>
  );
};

export default ComboBox;
