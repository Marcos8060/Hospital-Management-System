import React from "react";
import Doctors from "./dashboard/rightbar/doctors";
import BookedSessions from "./dashboard/rightbar/booked-sessions";
import Calender from "./dashboard/rightbar/calender";
import TopSection from "./dashboard/rightbar/top-section";

const RightBar = () => {
  return (
    <>
      <section className="h-[94vh] overflow-auto hide-scrollbar px-2">
        <TopSection />
        <section className="space-y-1 mb-2">
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
            <h1 className="uppercase text-xs font-semibold">Booked Sessions</h1>
            <h1 className="text-sm">See All</h1>
          </div>
          <BookedSessions />
          <BookedSessions />
        </section>
        <Calender />
      </section>
    </>
  );
};

export default RightBar;
