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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Button;
