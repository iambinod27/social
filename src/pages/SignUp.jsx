import { Alert, Button, Label, Navbar, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../store/actions/auth/authActions";
import { HiInformationCircle, HiOutlineMail } from "react-icons/hi";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "username must be 20 characters or less.")
        .required("Username is required."),
      email: Yup.string()
        .email("Invalid email Address.")
        .required("Email Is required."),

      password: Yup.string().required("Password is required"),
      confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),

    onSubmit: async (values, { resetForm }) => {
      const resultAction = await dispatch(register(values));

      if (register.fulfilled.match(resultAction)) {
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
          <h2 className="capitalize text-3xl">
            <h3>Join Us, Social </h3>
          </h2>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Create your account in to our platform
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
                  htmlFor="email"
                  value={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : "Your Email Address"
                  }
                  className={`${
                    formik.touched.email && formik.errors.email
                      ? "text-red-700"
                      : "text-black"
                  }`}
                />
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="name@company.com"
                required={true}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
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
                id="text"
                type="text"
                placeholder="Keanu123"
                name="username"
                required={true}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : "Your Password"
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
                required={true}
                name="password"
                placeholder="Enter Your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="confirm_password"
                  value={
                    formik.touched.confirm_password &&
                    formik.errors.confirm_password
                      ? formik.errors.confirm_password
                      : "Confirm Password"
                  }
                  className={`${
                    formik.touched.confirm_password &&
                    formik.errors.confirm_password
                      ? "text-red-700"
                      : "text-black"
                  }`}
                />
              </div>
              <TextInput
                id="confirm_password"
                type="password"
                required={true}
                name="confirm_password"
                placeholder="Confirm password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="w-full">
              <Button type="submit" color="dark">
                Create a new account
              </Button>
            </div>
          </form>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mr-2">
            Already have an account?
            <Link
              to="/"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
