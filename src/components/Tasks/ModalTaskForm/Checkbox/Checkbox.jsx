import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxSpan,
  CheckboxStyle,
  InnerCircleStyle,
} from './Checkbox.styled';

const Checkbox = ({ value, checked, label, onChange, color }) => {
  const handleCheckboxChange = () => {
    onChange(value);
  };

  return (
    <CheckboxLabel>
      <CheckboxInput
        type="checkbox"
        value={value}
        checked={checked}
        onChange={handleCheckboxChange}
        required
      />
      <CheckboxStyle checked={checked} color={color}>
        {checked && <InnerCircleStyle checked={checked} color={color} />}
      </CheckboxStyle>
      <CheckboxSpan>{label}</CheckboxSpan>
    </CheckboxLabel>
  );
};

export default Checkbox;
