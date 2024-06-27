// Login.jsx
import { Form, Link, useActionData } from "react-router-dom";

// components
import FormInput from "../components/FormInput";

// custom hooks
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData(); // useActionData() ni to'g'ri chaqirish
  const { signInWithEmail, isPending } = useLogin();

  useEffect(() => {
    if (userData) {
      signInWithEmail(userData.email, userData.password);
    }
  }, [userData]);

  return (
    <div className="grid place-items-center min-h-screen">
      <Form
        method="post"
        className="flex flex-col items-center gap-5 card bg-base-100 shadow-xl w-96 p-5"
      >
        <h1 className="text-4xl font-bold">Login</h1>
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="password" name="password" label="Password" />
        <div className="w-full">
          {!isPending && (
            <button className="btn btn-block btn-primary">Login</button>
          )}
          {isPending && (
            <button disabled className="btn btn-block btn-primary">
              Loading...
            </button>
          )}
        </div>
        <div className="flex gap-2 items-center">
          Sizda hisob yoqmi?
          <Link to="/register" className="link link-info">
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
