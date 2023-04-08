import styled from "@emotion/styled";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

function Button({ onClick, children, type, disabled, className }: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  
`;

export default Button;
