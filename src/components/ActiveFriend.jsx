import { Avatar } from "flowbite-react";

const ActiveFriend = () => {
  return (
    <div className="flex justify-start my-2">
      <Avatar
        img="https://media.newyorker.com/photos/5ec1cfde320293f9a8c889f2/master/w_2560%2Cc_limit/ra761.jpg"
        status="online"
        rounded={true}
      >
        <div className=" font-medium dark:text-white">
          <div>Keanu Reeves</div>
        </div>
      </Avatar>
    </div>
  );
};
export default ActiveFriend;
