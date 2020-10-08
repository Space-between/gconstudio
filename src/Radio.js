import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('company');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" style={{marginLeft: "10px"}}>
      <FormLabel component="legend"></FormLabel>
      <RadioGroup row aria-label="position" name="account" value={value} onChange={handleChange} style={{float: "left"}}>
        <FormControlLabel value="company" control={<Radio />} label="번역회사" />
        <FormControlLabel value="client" control={<Radio />} label="의뢰인" />
        <FormControlLabel value="translator" control={<Radio />} label="번역가" />
      </RadioGroup>
    </FormControl>
  );
}