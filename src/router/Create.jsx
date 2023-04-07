import { useEffect, useState } from "react";
import { supabase } from "../../client";
import Form from "../components/Form";

function Create() {
  const controller = new AbortController();
  const [crewInput, setCrewInput] = useState({
    name: "",
    level: "",
    color: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCrewInput((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(crewInput)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("Crewmate").insert(crewInput)
    setCrewInput({
      name: "",
      level: "",
      color: "",
    })
    window.location = "/";
  };

  useEffect(() => {
    return () => controller.abort();
  }, []);
  

  return (
    <div className="Create">
      <br/>
      <h2>Be a member of our crew!</h2>
      <Form data={crewInput} onChange={handleChange} onSubmit={handleSubmit}/>
    </div>
  );
}

export default Create;
