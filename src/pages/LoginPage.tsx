import styled from "@emotion/styled";
import Button from "components/common/Button";
import Form from "components/common/Form";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export function LoginPage() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <img src="/logo.png" alt="logo" />
        <GoogleLoginButton type="submit">
          <FcGoogle />
          <span>Google로 계속하기</span>
        </GoogleLoginButton>
        <AppleLoginButton type="submit">
          <FaApple />
          <span>Apple로 계속하기</span>
        </AppleLoginButton>
      </Form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const LoginButton = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  border-radius: 1rem;
  border: 0.1rem solid #333;
  width: 80vw;
  height: 5vh;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  span {
    margin: 0 auto;
  }
`;
const GoogleLoginButton = styled(LoginButton)`
  background-color: white;
`;
const AppleLoginButton = styled(LoginButton)`
  background-color: black;
  color: white;
`;
export default LoginPage;
