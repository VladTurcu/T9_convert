import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Keypad = styled.div`
    width: 300px;
`;

export const WordList = styled.div`
    width: 300px;
    height: 200px;
    overflow: scroll;
    margin-top: 20px;
    ${props => props.hasWords &&
        'box-shadow: inset 0 -12px 25px -12px rgba(0, 0, 0, 0.2);'
    }
`;

export const Word = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #C5C5C5;
`;

export const DigitContainer = styled.div`
    height: 12px;
    font-size: 12px;
`;

