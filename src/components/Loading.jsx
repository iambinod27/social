import { Spinner } from "flowbite-react";

export const Loading = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center">
        <Spinner aria-label="Default status example" size="xl" />
        <p>Loading..</p>
      </div>
    </>
  );
};
