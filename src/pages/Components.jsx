import React from "react";
import Header from "../containers/common/Header";
import Popover from "@/components/headless/Popover";

const Components = () => {
  return (
    <>
      <Header />

      <Popover className="m-4">
        {({ open }) => (
          <>
            <Popover.Button className="border border-main rounded-md px-2 py-1">
              Click here
            </Popover.Button>

            <Popover.Panel>
              {(close) => <div onClick={close}>See What happens</div>}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
};

export default Components;
