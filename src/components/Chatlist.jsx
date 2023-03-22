import { RiSearchLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import ActiveFriend from "./ActiveFriend";

const Chatlist = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Active Friends (2)</h4>
        <div className="flex items-center gap-2">
          <div>
            <RiSearchLine />
          </div>
          <div></div>
          <div className="cursor-pointer">
            <SlOptions />
          </div>
        </div>
      </div>
      {/* Friends List */}
      <ActiveFriend />
    </>
  );
};
export default Chatlist;
