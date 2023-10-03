import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { FaVenusMars } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import profile from "/public/assets/placeholder.jpg";
import bio from "/public/assets/bio-icon.png";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <Header />
      <SubHeader />

      <div className="bg-[#f3f3f3]">
        <div>
          <div className="max-w-[1170px] m-auto">
            <div className="flex justify-between">
              <div className="pt-[20px]">
                <input
                  placeholder="Search..."
                  className="placeholder:text-[14px] w-[400px] focus:outline-none bg-[white] p-[10px] border-[1px] border-[#b4b4b4] border-solid rounded-tl-[5px] rounded-bl-[5px]"
                />
                <button className="bg-[#5a9cd5] pt-[11px] pb-[11px] pr-[20px] p-[20px] rounded-[5px] ml-[-15px] text-[#fff]">
                  SEARCH
                </button>
              </div>
              <div>
                <select className="mt-[20px] text-[#555] w-[200px] h-[35px] focus:outline-none pt-[6px] pb-[6px] pr-[24px] pl-[12px] text-ellipsis overflow-hidden whitespace-nowrap text-[14px] shadow-md rounded-[4px] border-[1px] border-solid border-[#ccc]">
                  <option className="leading-[1.42857143px] pt-[6px] pb-[6px] pr-[12px] pl-[12px] text-[14px] border-b-[#f5f5f5] border-b-[1px] border-b-solid">
                    Relevance
                  </option>
                  <option className="leading-[1.42857143px] pt-[6px] pb-[6px] pr-[12px] pl-[12px] text-[14px] border-b-[#f5f5f5] border-b-[1px] border-b-solid">
                    General
                  </option>
                  <option className="leading-[1.42857143px] pt-[6px] pb-[6px] pr-[12px] pl-[12px] text-[14px] border-b-[#f5f5f5] border-b-[1px] border-b-solid">
                    Advertise
                  </option>
                  <option className="leading-[1.42857143px] pt-[6px] pb-[6px] pr-[12px] pl-[12px] text-[14px] border-b-[#f5f5f5] border-b-[1px] border-b-solid">
                    My Discussions
                  </option>
                  <option className="leading-[1.42857143px] pt-[6px] pb-[6px] pr-[12px] pl-[12px] text-[14px] border-b-[#f5f5f5] border-b-[1px] border-b-solid">
                    Reading Room
                  </option>
                  <option className="pt-[20px]">Review Center</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] max-w-[1170px] m-auto justify-center mt-[15px]">
          <div className="w-[25%]">
            <div className="bg-[white] border-[1px] border-solid border-[#cecece] rounded-[5px]">
              <div className="bg-[#3a7fba] h-[120px] rounded-tl-[5px] rounded-tr-[5px] relative">
                <div className="absolute bg-[#fff] left-[31%] top-[70px] rounded-[50%]">
                  <Image
                    src={profile}
                    className="w-[100px] p-[3px] rounded-[50%]"
                  />
                </div>
              </div>
              <div>
                <h1 className="mt-[60px] text-[22px] font-bold text-center">
                  Joseph Wick R
                </h1>
                <p className="text-center text-[14px] text-[#464646]">
                  Professor <br />
                  Department of Biotechnology
                  <br /> University of Texas
                  <br /> USA
                </p>
                <div className="flex gap-[15px] ml-[10px]">
                  <div className="p-[10px] bg-[#f7fbfc] rounded-[8px] border-[1px] border-solid border-[#dadada]">
                    <FaVenusMars className="text-[20px]" />
                  </div>
                  <div>
                    <strong className="font-bold text-[15px]">Gender</strong>
                    <p className="text-[14px] text-[#464646]">Male</p>
                  </div>
                </div>
                <div className="flex gap-[15px] ml-[10px] mt-[10px]">
                  <div className="p-[10px] bg-[#f7fbfc] rounded-[8px] border-[1px] border-solid border-[#dadada]">
                    <FaVenusMars className="text-[20px]" />
                  </div>
                  <div>
                    <strong className="font-bold text-[15px]">Email</strong>
                    <p className="text-[14px] text-[#464646]">
                      vallikumargg@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-[15px] ml-[10px] mt-[10px]">
                  <div className="p-[10px] bg-[#f7fbfc] rounded-[8px] border-[1px] border-solid border-[#dadada]">
                    <FaVenusMars className="text-[20px]" />
                  </div>
                  <div>
                    <strong className="font-bold text-[15px]">Phone</strong>
                    <p className="text-[14px] text-[#464646]">+91 9999999999</p>
                  </div>
                </div>
                <button className="text-[11px] block m-auto mt-[10px] mb-[10px] leading-[24px] rounded-[3px] bg-[#002147] pt-[4px] pr-[10px] pb-[4px] pl-[10px] text-[#fff]">
                  View Profile
                </button>
              </div>
            </div>
            <div className="bg-[white] border-[1px] border-solid border-[#cecece] rounded-[5px] mt-[15px]">
              <div className="flex justify-center items-center mt-[20px] mb-[20px]">
                <Image src={bio} className="w-[35px]" alt="bio" />
                <strong className="text-[24px]">Biography</strong>
                <FaEdit className="bg-[#f2f2f2] ml-[56px] border-[1px] border-solid border-[#d3d3d3] w-[29px] h-[29px] rounded-[4px] pl-[8px] pt-[2px] hover:text-[#23527c]" />
              </div>
              <div className="border-[1px] border-solid border-[#c5c5c5]"></div>
              <div className="pb-[20px]">
                <h1 className="text-[15px] font-bold mt-[15px] mb-[5px] ml-[20px]">
                  Introduction
                </h1>
                <p className="text-[14px] leading-[18px] ml-[20px] mr-[20px] text-[#464646]">
                  Department of Nutrition and Nutritional Deficiency Diseases,
                  Faculty of Veterina ry Medicine, Mansoura University, Egypt
                </p>
                <h1 className="text-[15px] font-bold mt-[15px] mb-[5px] ml-[20px]">
                  Research Interest
                </h1>
                <p className="text-[14px] leading-[18px] ml-[20px] mr-[20px] text-[#464646]">
                  Master of Computer Science
                  <br /> 2015 - 2018
                  <br />
                  Department of Nutrition and Nutritional Deficiency Diseases,
                  Faculty of Veterina ry Medicine, Mansoura University, Egypt
                </p>
                <h1 className="text-[15px] font-bold mt-[15px] mb-[5px] ml-[20px]">
                  Introduction
                </h1>
                <p className="text-[14px] leading-[18px] ml-[20px] mr-[20px] text-[#464646]">
                  Department of Nutrition and Nutritional Deficiency Diseases,
                  Faculty of Veterina ry Medicine, Mansoura University, Egypt
                </p>
                <h1 className="text-[15px] font-bold mt-[15px] mb-[5px] ml-[20px]">
                  Location
                </h1>
                <p className="ml-[20px] text-[#3884c5]">India</p>
                <p className="text-[14px] ml-[20px] text-[#464646]">
                  151/4 BT Chownk, Delhi
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[100px] border">
            <div>
              <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 pd0 pi-crossedu">
                <div className="text-[#fff] text-[14px] uppercase leading-[30px] w-[185px] bg-gradient-to-r from-[#082857] to-[#3b7fb9] pl-[15px]">
                  Work Experience
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
