import React from "react";
import styled from 'styled-components'
// import commonStyles from '../../commonStyles'

export default ({ IconName, placeholder, value, onChange, password,borderColor }) => {
  return (
    <InputArea colorInput={'rgba(255,255,2)'} style={{borderColor:borderColor}}>
      {/* {IconName && <IconMaterial name={IconName} size={25} color={commonStyles.colors.textButtons} />} */}
      <Input
        colorInput={borderColor || 'rgba(255,255,2)'}
        placeholder={placeholder}
        placeholderTextColor={borderColor ?'rgba(255,255,255,0.5)': '#fff' }
        value={value}
        onChange={onChange}
        secureTextEntry={password}
        style={{color: borderColor ? 'rgba(255,255,255,0.5)': '#000' }}
      />
    </InputArea>
  );
};


export const InputArea = styled.div`
    width:90%;
    height:60px;
    background-color: transparent;
    flex-direction:row;
    padding-left:15px;
    align-items:center;
    margin-bottom:15px;
    border: 2px;
    border-color: #fff;
`;

export const Input = styled.input`
  flex: 1;
  font-size: 16px;
  color: ${props => props.colorInput || '#0FF'};
  margin-left:10px;
`;