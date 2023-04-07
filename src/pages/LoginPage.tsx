import styled from "@emotion/styled";
import Button from "components/common/Button";
import Form from "components/common/Form";
import {FaGoogle, FaApple} from 'react-icons/fa';
export function LoginPage() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <img src='/logo.png' alt="logo"/>
        <Button type="submit"><FaGoogle/>Google로 계속하기</Button>
        <Button type="submit"><FaApple/>Apple로 계속하기</Button>
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

export default LoginPage;
