import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";
import Form from "../components/Form";

function Edit() {
  const { id } = useParams();
  const controller = new AbortController();

  const [crewInfo, setCrewInfo] = useState({
    name: "",
    level: "",
    color: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCrewInfo((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(crewInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("Crewmate").update(crewInfo).eq("id", id);
    setCrewInfo({
      name: "",
      level: "",
      color: "",
    });
    window.location = "/";
  };
  
  const handleDelete = async (e) => {
    e.preventDefault();
    await supabase.from("Crewmate").delete().eq("id", id)
    window.location = "/";
  }

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
    <div className="Edit">
      <br/>
      <h2>Edit Crew Info</h2>
      <Form data={crewInfo} onChange={handleChange} onSubmit={handleSubmit} />
      <button style={{backgroundColor: "#CE5959"}} onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Edit;
