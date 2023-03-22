import { Button, Checkbox, Label, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
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
            <h3>Let's Connect everyone</h3>
            <p>Get lost in the world of Internet.</p>
          </h2>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <form className="space-y-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required={true} />
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
              <Button>Log in to your account</Button>
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
