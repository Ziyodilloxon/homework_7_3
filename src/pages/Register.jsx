// rrd
import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let photoURL = formData.get("photoURL");
  let displayName = formData.get("displayName");
  let password = formData.get("password");
  return { email, password, displayName, photoURL };
};

function Register() {
  const userData = useActionData();
  const { registerWithEmail, isPending } = useRegister();

  useEffect(() => {
    if (userData) {
      registerWithEmail(
        userData.email,
        userData.password,
        userData.displayName,
        userData.photoURL
      );
    }
  }, [userData]);
  return (
    <div className="grid place-items-center min-h-screen">
      <Form
        method="post"
        className="flex flex-col items-center gap-5  card bg-base-100 shadow-xl w-96 p-6"
      >
        <h1 className="text-4xl font-bold">Register</h1>
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="url" name="photoURL" label="Photo" />
        <FormInput type="password" name="password" label="Password" />
        <FormInput type="text" name="displayName" label="User Name" />
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
          Sizda hisob bormi?
          <Link to="/login" className="link link-info">
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
