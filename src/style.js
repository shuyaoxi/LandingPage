import styled from 'styled-components';

export const Statement1 = styled.div`
  width: 90%;
  font-family: Roboto;
  font-style: bold;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
`;

export const Statement2 = styled.div`
  font-family: Roboto Slab;
  font-style: bold;
  font-weight: normal;
  font-size: 18px;
  line-height: 36px;
  width: 80%;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  text-transform: capitalize;
`;
export const Form = styled.div`
  align-items: left;
  width: 100%;
  button {
    font-family: Roboto;
    font-style: normal;
    font-size: 12px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #ffffff;
    background: #3e48a6;
    height: 48px;
    border-radius: 2px;
    position: relative;
    align-self: left;
    bottom: 1px;
  }
  input {
    padding-left: 10px;
    padding-right: 10px;
    width: 60%;
    height: 42px;
    top: auto;
    border: solid 1px lightgrey;
    border-radius: 3px;
  }
`;
export const Wrap1 = styled.div`
  width: 35%;
  margin-left: 5%;
  float: left;
  margin-top: 10%;
`;

export const Alert = styled.div`
  color: red;
  font-family: Roboto;
  font-size: 10px;
`;
