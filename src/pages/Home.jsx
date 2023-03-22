import SideMenu from "../components/SideMenu";

const Home = () => {
  return (
    <div className="bg-primary text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r">
          <SideMenu />
        </div>
        <div className="col-span-8">
          <div className="p-5">Content</div>
        </div>
        <div className="col-span-2">ChatList</div>
      </div>
    </div>
  );
};
export default Home;
