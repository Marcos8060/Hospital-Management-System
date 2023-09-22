import React from "react";
import Doctors from "./dashboard/rightbar/doctors";
import BookedSessions from "./dashboard/rightbar/booked-sessions";
import TopSection from "./dashboard/rightbar/top-section";
import CalenderDate from "./dashboard/rightbar/calender";

const RightBar = () => {
  return (
    <>
      <section className="h-[94vh] px-2 overflow-y-auto">
        <TopSection />
          <section className="space-y-1 my-4">
            <div className="flex items-center justify-between">
              <h1 className="uppercase text-xs font-semibold">Doctors</h1>
              <h1 className="text-sm">See All</h1>
            </div>
            <Doctors />
            <Doctors />
            <Doctors />
          </section>
          <section className="my-3 space-y-1">
            <div className="flex items-center justify-between">
              <h1 className="uppercase text-xs font-semibold">
                Booked Sessions
              </h1>
              <h1 className="text-sm">See All</h1>
            </div>
            <BookedSessions />
            <BookedSessions />
          </section>
        <div className="">
          <CalenderDate />
        </div>
      </section>
    </>
  );
};

export default RightBar;
