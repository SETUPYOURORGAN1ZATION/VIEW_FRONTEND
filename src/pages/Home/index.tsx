import Grass from "components/Grass";
import DayInfo from "interfaces/DayInfo";
import React from "react";

const Home = () => {
  const data: DayInfo[] = [
    { date: "2023-09-02", status: "TRUANCY", description: null },
    { date: "2023-09-03", status: "ATTENDANCE", description: null },
    { date: "2023-10-06", status: "ABSENT", description: "배고파서" },
    { date: "2023-12-27", status: "ATTENDANCE", description: null },
  ];

  return (
    <div>
      <Grass
        data={data}
        attendColor="#0085ff"
      />
    </div>
  );
};

export default Home;
