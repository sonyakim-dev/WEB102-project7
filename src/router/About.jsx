import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";

function About({}) {
  const { id } = useParams();
  const controller = new AbortController();
  const [crewInfo, setCrewInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Crewmate")
        .select()
        .eq("id", id);
      setCrewInfo(data[0]);
      // console.log(data, crewInfo);
    };
    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div className="About">
      <br />
      <h2>Detail about the crew</h2>
      {crewInfo && (
        <div style={{ display: "flex", backgroundColor: "black", padding: "20px 30px"}}>
          <img src={`../src/assets/${crewInfo.color}.png`}/>
          <div style={{padding: "10px 30px", marginLeft: "20px"}}>
            <p>ID: {crewInfo.id}</p>
            <p>Name: {crewInfo.name}</p>
            <p>Level: {crewInfo.level}</p>
            <p>Color: {crewInfo.color}</p>
            <p>Created At: {crewInfo.created_at.slice(0, 10)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
