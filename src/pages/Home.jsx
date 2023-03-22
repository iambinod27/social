import Content from "../components/Content";
import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <div className="bg-primary text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 ">
          <div className="max-h-screen overflow-y-scroll">
            <SideMenu />
          </div>
        </div>
        <div className="col-span-7">
          <div className="p-5 max-h-screen overflow-y-scroll">
            <Content />
          </div>
        </div>
        <div className="col-span-3">
          <div className="p-5 max-h-screen overflow-y-scroll">ChatList</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
