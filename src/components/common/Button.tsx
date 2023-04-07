import styled from "@emotion/styled";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

function Button({ onClick, children, type, disabled }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  background-color: white;
  font-weight: bold;
  margin-top: 1vh;
  font-size: 0.8rem;
  border-radius: 1rem;
  border: 0.1rem solid #333;
  width: 80vw;
  height: 5vh;
`;

export default Button;
