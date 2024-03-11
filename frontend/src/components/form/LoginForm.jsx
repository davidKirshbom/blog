import { useState } from "react";
import useProvideAuth from "../../hooks/useProvideAuth";
import Form from "./Form";
import Input from "./Input";
import SubmitButton, { themes } from "./SubmitButton";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, signIn } = useProvideAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (e.nativeEvent.submitter.value === "register") {
      const registerResponse = await register(data.username, data.password);
    } else {
      const loginResponse = await signIn(data.username, data.password);
    }
    setIsLoading(false);
    navigation("/");
  };
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-xl   flex flex-col  flex-shrink w-96">
      <Form
        title="Welcome to blog!"
        onSubmit={handleSubmit}
        onError={(e) => setIsLoading(false)}
      >
        <div className="mb-4">
          <Input
            label="Username"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-between mb-4 sm:flex-row">
          <SubmitButton
            name="clickType"
            theme={themes.default}
            type="submit"
            value="login"
            disabled={isLoading}
          >
            Login
          </SubmitButton>
          <SubmitButton
            name="clickType"
            type="submit"
            theme={themes.secondary}
            value="register"
            disabled={isLoading}
          >
            Create Account
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
