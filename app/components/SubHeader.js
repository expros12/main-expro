import React from "react";
import Image from "next/image";
import activity from "/public/assets/activity-icon.png";
import mypost from "/public/assets/mypost-icon.png";
import mydis from "/public/assets/mydis-icon.png";
import myreview from "/public/assets/myreview-icon.png";
import spk from "/public/assets/spkexp-icon.png";
import manu from "/public/assets/manuscript-icon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const SubHeader = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#082857] to-[#3b7fb9]">
        <div className="container m-auto flex justify-between items-center">
          <div className="flex">
            <div className="hover:bg-[#636363] cursor-pointer pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex flex-col items-center">
              <Image
                src={activity}
                width={100}
                height={100}
                alt="activity"
                className="w-[30px]"
              />
              <small className="text-[#fff] text-[13px]">Activity Area</small>
            </div>
            <div className="hover:bg-[#636363] cursor-pointer pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex flex-col items-center">
              <Image
                src={mypost}
                width={100}
                height={100}
                alt="activity"
                className="w-[30px]"
              />
              <small className="text-[#fff] text-[13px]">My Posts</small>
            </div>
            <div className="hover:bg-[#636363] cursor-pointer pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex flex-col items-center">
              <Image
                src={mydis}
                width={100}
                height={100}
                alt="activity"
                className="w-[30px]"
              />
              <small className="text-[#fff] text-[13px]">
                Discussion Group
              </small>
            </div>
            <div className="hover:bg-[#636363] cursor-pointer pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex flex-col items-center">
              <Image
                src={myreview}
                width={100}
                height={100}
                alt="activity"
                className="w-[30px]"
              />
              <small className="text-[#fff] text-[13px]">
                My Review Center
              </small>
            </div>
            <div className="hover:bg-[#636363] cursor-pointer pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex flex-col items-center">
              <Image
                src={spk}
                width={100}
                height={100}
                alt="activity"
                className="w-[30px]"
              />
              <small className="text-[#fff] text-[13px]">
                Speak to an Expert
              </small>
            </div>
            <div className="hover:bg-[#636363] cursor-pointer pt-[15px] pb-[15px] pl-[10px] pr-[10px] flex flex-col items-center">
              <Image
                src={manu}
                width={100}
                height={100}
                alt="activity"
                className="w-[30px]"
              />
              <small className="text-[#fff] text-[13px]">My Reading Room</small>
            </div>
          </div>
          <div className="flex items-center">
            <Image src={mypost} width={100} height={100} className="w-[30px]" />
            <KeyboardArrowDownIcon color="white" className="text-[white]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
