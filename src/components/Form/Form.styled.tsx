'use client';
import styled from '@emotion/styled';

const GAP_FORM_ELEMENT_STYLES = `
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const FormStyled = styled.form`
  ${GAP_FORM_ELEMENT_STYLES}
`;

const FormFieldsetStyled = styled.fieldset`
  ${GAP_FORM_ELEMENT_STYLES}
  border: none;
`;

export { FormStyled, FormFieldsetStyled };
