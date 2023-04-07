import styled from "@emotion/styled";
interface FormProps {
  children?: React.ReactNode;
  onSubmit?: (e: React.SyntheticEvent) => void;
}
function Form({ children, onSubmit }: FormProps) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
const StyledForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Form;
