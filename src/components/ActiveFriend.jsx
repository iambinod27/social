import { Avatar } from "flowbite-react";

const ActiveFriend = () => {
  return (
    <div className="my-2 hover:bg-s_primary py-2 hover:rounded-lg px-1 cursor-pointer">
      <Avatar
        img="https://media.newyorker.com/photos/5ec1cfde320293f9a8c889f2/master/w_2560%2Cc_limit/ra761.jpg"
        status="online"
        rounded={true}
        className="!justify-start"
      >
        <div className=" font-medium dark:text-white">
          <div>Keanu Reeves</div>
        </div>
      </Avatar>
    </div>
  );
};
export default ActiveFriend;
