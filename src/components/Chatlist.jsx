import { RiSearchLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import ActiveFriend from "./ActiveFriend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriends } from "../store/actions/friends/friendActions";
import { tokenRefresh } from "../store/actions/auth/authActions";

const Chatlist = () => {
  const dispatch = useDispatch();

  const { access_token } = useSelector((state) => state.auth);
  const { friends } = useSelector((state) => state.friend);

  console.log(access_token);

  useEffect(() => {
    dispatch(getFriends(access_token));
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between">
        <h4>Friends ({friends.length})</h4>
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
      {friends.map((friend) => {
        {
          return friend == [] ? (
            <p>No Friends</p>
          ) : (
            <ActiveFriend friend={friend} key={friend.id} />
          );
        }
      })}
    </>
  );
};
export default Chatlist;
