import { useState, useEffect } from "react";
import { supabase } from "../../client";
import Card from "../components/Card";

function Home() {
  const controller = new AbortController();
  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Crewmate")
        .select()
        .order("created_at", { ascending: true });
      setCrewList(data);
    };
    fetchData();
    // console.log(crewList)
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="Home">
      <br/>
      <h2>Introduce our crews!</h2>
      <br/>
      <div className="Crews">
        {crewList &&
          crewList.map((crew) => (
            <Card
              key={crew.id}
              id={crew.id}
              name={crew.name}
              color={crew.color}
              level={crew.level}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
