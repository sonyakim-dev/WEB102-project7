import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

function Summary({ data }) {
  useEffect(() => {}, [data]);

  return (
    <div className="Summary">
      <p>Total: {data.length}</p>
    </div>
  );
}

export default Summary;
