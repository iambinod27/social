import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { RiSearchLine } from "react-icons/ri";

const Navbars = () => {
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
          label={
            <Avatar
              alt="User settings"
              img="https://hips.hearstapps.com/hmg-prod/images/gettyimages-594881580.jpg?resize=1200:*"
              rounded="true"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Pedro Pascal</span>
            <span className="block truncate text-sm font-medium">
              Pedro@pascal.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </Navbar>
    </>
  );
};
export default Navbars;
