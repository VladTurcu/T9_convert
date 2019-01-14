import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 300px;
    height: 110px;
    margin-bottom: 20px;
    display: block;
`;

export const FormWrapper = styled.div`
    max-width: 300px;
    dislay: block;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 296px;
    height: 50px;
    margin: 1px;
    margin-bottom: 5px;
    border: none;
    outline: none;
    text-align: center;
    font-size: 18px;
    background-color: #F0F0F0;
`;

export const Button = styled.button`
    width: 98px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 18px;
    color: #ffffff;
    &:hover {
        cursor: pointer;
    }
    &.form_submit {
        background-color: #36C267;
        width: calc(50% - 2px);
        margin: 1px;
        &:hover {
            background-color: #1F8D45;
        }
    }

    &.negative {
        margin: 1px;
        width: calc(50% - 2px);
        background-color: #F02D2D;
        &:hover {
            background-color: #B01515;
        }
    }
    &.digit {
        color: #858585;
        background-color: #FFFFFF;
        box-shadow: inset 0px 0px 25px rgba(0,0,0,0.1);
        margin: 1px;
        &:hover {
            background-color: #F0EEEE;
        }
    }
`;

const Form = (props) => {
    return (
        <StyledForm {...props}>
            {props.children}
        </StyledForm>
    )
}

export default Form;