import { Form as FormikForm, Field as FormicField } from 'formik';
import styled from 'styled-components';

export const SearchSection = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding-right: ${p => p.theme.spasing(3)};
  padding-left: ${p => p.theme.spasing(3)};
  color: #fff;
  margin-bottom: ${p => p.theme.spasing(3)};
`;

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Field = styled(FormicField)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spasing(1)};
  padding-right: ${p => p.theme.spasing(1)};

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #fff;

  &:hover {
    opacity: 1;
    color: #3984e9;
  }
`;
