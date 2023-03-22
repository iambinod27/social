import { FaLayerGroup, FaUserFriends } from "react-icons/fa";

const SideMenu = () => {
  return (
    <>
      <div className="p-3 ">
        <div className="flex items-center gap-3 mb-2 p-2">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-594881580.jpg?resize=1200:*"
            alt="Pedro pascal"
            className="rounded-full w-[30px] h-[30px] object-cover"
          />
          <p>Pedro Pascal</p>
        </div>
        <div className="flex items-center gap-3 mb-2 hover:bg-s_primary p-2 cursor-pointer hover:rounded-lg">
          <FaUserFriends className="w-[30px] h-[30px]" />
          <p>Friends</p>
        </div>
        <div className="flex items-center gap-3 mb-2 hover:bg-s_primary p-2 cursor-pointer hover:rounded-lg">
          <FaLayerGroup className="w-[30px] h-[30px]" />
          <p>Group</p>
        </div>
      </div>
    </>
  );
};
export default SideMenu;
