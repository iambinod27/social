import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import { RiSearchLine } from "react-icons/ri";

const Navbars = () => {
  return (
    <>
      <Navbar
        fluid={true}
        className="h-[3.5rem text-black shadow-sm bg-s_primary"
      >
        <Navbar.Brand>
          <div className="text-3xl font-medium text-white">Social</div>
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
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </Navbar>
    </>
  );
};
export default Navbars;
