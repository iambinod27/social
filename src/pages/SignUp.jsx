import { Button, Checkbox, Label, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
          <form className="space-y-5">
            <div className="flex justify-between gap-3 items-center">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fist name" value="First name" />
                </div>
                <TextInput id="text" placeholder="Keanu" required={true} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Last name" />
                </div>
                <TextInput id="text" placeholder="Reeves" required={true} />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email address" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="username" />
              </div>
              <TextInput
                id="text"
                type="text"
                placeholder="Keanu123"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required={true} />
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
              to="/login"
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
