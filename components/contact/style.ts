import styled, { css } from "styled-components";

interface InputI{
  error:boolean;
  [key:string]:any;
}

const Button = styled.button`
background-color:var(--secondary);
border:1px solid var(--secondary);
border-radius:20px;
color:white;
cursor:pointer;
font-size: 1rem;
margin:0 auto;
padding:.5em 1em;
text-align:center;
transition: opacity 0.5s ease-in-out;

&:hover,
&:focus {
  opacity: 0.8;
}
`
const Email = styled.a``;
const Error = styled.span`
  color: red;
  font-weight: 100;
  transform: translateY(-100%);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width:min(700px,100%);
 
`;
const Label = styled.label`
 color:var(--primary);
`;
const Section = styled.section`
   padding-block:1rem;
 
`;

const Input = styled.input`
  color: var(--primary);
  font-size: 1rem;
  padding: 0.8rem 1rem;
  margin: 1rem 0 2rem 0;
  ${({ error }:InputI) =>
    error
      ? css`
          border: 1px solid red;
        `
      : null}
  &:focus {
    outline: none;
  }
`;
const Text = styled.p`
  color: var(--primary);
  font-size: 1.1rem;
  margin: 2rem 0 2rem 0;
`;
const TextArea = styled.textarea`
  color: var(--primary);
  font-size: 1rem;
  height: 150px;
  margin: 1rem 0 2rem 0;
  padding: 0.5rem 1rem;
  resize: none;
  ${({ error }:InputI) =>
    error
      ? css`
          border: 1px solid red;
        `
      : null}
  &:focus {
    outline: none;
  }
`;
const Title = styled.h1`
 color:var(--secondary);
 font-size:2rem;
 width:fit-content;
 margin:0 auto;
`
export { Button,Email, Error, Form, Label, Section,  Input, Text, TextArea,Title };