import { SlOptions } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { TbShare3 } from "react-icons/tb";
import { Avatar } from "flowbite-react";

const ContentPost = () => {
  return (
    <>
      <div className="bg-s_secondary rounded-md w-[500px] mb-10">
        <div className="flex justify-between items-center px-5 py-2">
          <Avatar
            img="https://hips.hearstapps.com/hmg-prod/images/gettyimages-594881580.jpg?resize=1200:*"
            rounded={true}
            size="md"
          >
            <div className=" font-medium dark:text-white">
              <div>Pedro Pascal</div>
              <div className="text-sm font-light dark:text-gray-400">6h</div>
            </div>
          </Avatar>
          <div className="cursor-pointer">
            <SlOptions />
          </div>
        </div>
        <div>
          <div className="px-5 py-2">La casa es te amo!!</div>
          <img
            src="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="landscape"
            className="h-full w-[500px] object-cover"
          />
        </div>
        <div className="grid grid-cols-6 place-items-center py-5">
          <div className="col-span-2">
            <div className="flex items-center gap-1">
              <AiOutlineLike className="h-5 w-5" />
              Like
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="flex items-center gap-1">
              <TfiCommentAlt className="h-5 w-5" />
              Comment
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex items-center gap-1">
              <TbShare3 className="h-5 w-5" />
              Share
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentPost;
