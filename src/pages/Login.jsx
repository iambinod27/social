import {
  Alert,
  Button,
  Checkbox,
  Label,
  Navbar,
  TextInput,
} from "flowbite-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../store/actions/auth/authActions";
import { HiInformationCircle } from "react-icons/hi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "username must be 20 characters or less.")
        .required("Username is required."),

      password: Yup.string().required("Password is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      const resultAction = await dispatch(login(values));

      if (login.fulfilled.match(resultAction)) {
        navigate("/");
      }

      resetForm();
    },
  });

  return (
    <>
      <Navbar className="!h-[0.5rem]">
        <Navbar.Brand>
          <div className="text-3xl font-medium">Social</div>
        </Navbar.Brand>
      </Navbar>
      <div className="w-full mx-auto min-h-screen flex items-center justify-center">
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <div className="capitalize text-3xl">
            <h3>Let's Connect everyone</h3>
            <p>Get lost in the world of Internet.</p>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            {message && (
              <Alert color="failure" icon={HiInformationCircle}>
                <span>
                  <span className="font-medium">{message}</span>
                </span>
              </Alert>
            )}
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  value={
                    formik.touched.username && formik.errors.username
                      ? formik.errors.username
                      : "Username"
                  }
                  className={`${
                    formik.touched.username && formik.errors.username
                      ? "text-red-700"
                      : "text-black"
                  }`}
                />
              </div>
              <TextInput
                id="username"
                name="username"
                type="text"
                placeholder="name@company.com"
                required={true}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : "Password"
                  }
                  className={`${
                    formik.touched.password && formik.errors.password
                      ? "text-red-700"
                      : "text-black"
                  }`}
                />
              </div>
              <TextInput
                id="password"
                type="password"
                name="password"
                required={true}
                placeholder="*********"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="/modal"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>

            <div className="w-full">
              <Button color="dark" type="submit">
                Log in to your account
              </Button>
            </div>
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
