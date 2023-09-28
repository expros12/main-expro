import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
const Profile = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="max-w-[1170px] m-auto">
        <div className="mt-[20px]">
          <input className="w-[400px] focus:outline-none bg-[white] p-[10px] border-[1px] border-[#b4b4b4] border-solid rounded-tl-[5px] rounded-bl-[5px]" />
          <button className="bg-[#5a9cd5] pt-[11px] pb-[11px] pr-[20px] p-[20px] rounded-[5px] ml-[-15px] text-[#fff]">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
