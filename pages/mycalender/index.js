import Layout from "@/components/Layout";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const shedule = ({ courtCases }) => {
  return (
    <>
      {courtCases.map((cases, index) => (
        <p key={cases._id} index={index}>
          {cases.name}
        </p>
      ))}
    </>
  );
};

const index = () => {
  return (
    <Layout>
      <div className="">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventContent={shedule}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/cases", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return {
    props: {
      courtCases: data,
    },
  };
};

export default index;

// [
//   { title: 'event 1', date: '2023-04-01' },
//   { title: 'event 2', date: '2023-04-02' },
//   { title: 'event 2', date: '2023-04-09' },
//   { title: 'event 2', date: '2023-04-05' },
//   { title: 'event 2', date: '2023-04-04' },
//   { title: 'event 2', date: '2023-05-04' },
