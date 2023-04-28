import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../store/features/auth/authSlice";

const Navbars = () => {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar fluid={true} className="sticky top-0 h-16 !bg-primary text-white">
        <Navbar.Brand>
          <div className="text-3xl font-medium">Social</div>
        </Navbar.Brand>
        <div>
          <form>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              className="w-[28rem] "
              icon={RiSearchLine}
              placeholder="Search Social"
            />
          </form>
        </div>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt="User settings" rounded="true" />}
        >
          <Dropdown.Header>
            <span className="block text-sm capitalize font-semibold">
              {username}
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => dispatch(onLogout())}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </Navbar>
    </>
  );
};
export default Navbars;
