import React from "react";
import { RiAdvertisementFill } from "react-icons/ri";
import { AiFillContacts } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const DashHero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-24 justify-center">
        <div className="card  bg-base-100 shadow-xl lg:w-85">
          <figure>
            
              <div className=" top-0 left-0 flex items-center justify-center w-full h-full">
                <RiAdvertisementFill className="h-20 w-20 text-[#065f46]" />
              </div>
            
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#34d399]">Advertisement!</h2>
            <p className="text-[#10b981]">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl lg:w-85">
          <figure>
            <div className=" top-0 left-0 flex items-center justify-center w-full h-full">
              <AiFillContacts className="h-20 w-20 text-[#065f46]" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#34d399]">Contact Box</h2>
            <p className="text-[#10b981]">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl lg:w-85">
          <figure>
            <div className=" top-0 left-0 flex items-center justify-center w-full h-full">
              <MdEmail className="h-20 w-20 text-[#065f46]" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#34d399]">Email</h2>
            <p className="text-[#10b981]">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl lg:w-85">
          <figure>
            <div className=" top-0 left-0 flex items-center justify-center w-full h-full">
              <MdOutlineProductionQuantityLimits className="h-20 w-20 text-[#065f46]" />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#34d399]">Quotations</h2>
            <p className="text-[#10b981]">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHero;
