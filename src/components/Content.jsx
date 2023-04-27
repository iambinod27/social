import { useEffect } from "react";
import ContentPost from "./ContentPost";
import { Loading } from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../store/actions/auth/postActions";

const Content = () => {
  const { postItems, isLoading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost);
  }, []);

  return (
    <div className="grid place-items-center">
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          No post Availible
        </div>
      ) : (
        postItems.map((post) => <ContentPost post={post} />)
      )}
    </div>
  );
};
export default Content;
