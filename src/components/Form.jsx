import { useState, useEffect, useRef } from "react";

function Form({ data, onChange, onSubmit }) {
  const inputRef = useRef(null);
  // console.log(data)
  useEffect(() => {
    return () => {};
  }, [data]);

  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <div className="name_input">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={onChange}
            ref={inputRef}
            required
          />
        </label>
        </div>
        <br />

        <div className="level_input">
          <label>
            Level:
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              name="level"
              value={data.level}
              onChange={onChange}
              ref={inputRef}
            />
            <span>{data.level}</span>
          </label>
        </div>
        <br />

        <div className="color_input">
          Color: 
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="red"
              onChange={onChange}
              defaultChecked={data.color === "red" ? true : null}
              required
            />
            <span>🔴</span>
          </label>
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="blue"
              onChange={onChange}
              defaultChecked={data.color === "blue" ? true : null}
            />
            <span>🔵</span>
          </label>
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="green"
              onChange={onChange}
              defaultChecked={data.color === "green" ? true : null}
            />
            <span>🟢</span>
          </label>
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="pink"
              onChange={onChange}
              defaultChecked={data.color === "pink" ? true : null}
            />
            <span>💖</span>
          </label>
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="orange"
              onChange={onChange}
              defaultChecked={data.color === "orange" ? true : null}
            />
            <span>🟠</span>
          </label>
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="yellow"
              onChange={onChange}
              defaultChecked={data.color === "yellow" ? true : null}
            />
            <span>🟡</span>
          </label>
          <label>
            <input
              type="radio"
              id="color"
              name="color"
              value="black"
              onChange={onChange}
              defaultChecked={data.color === "black" ? true : null}
            />
            <span>⚫️</span>
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="white"
              onChange={onChange}
              defaultChecked={data.color === "white" ? true : null}
            />
            <span>⚪️</span>
          </label>
        </div>
        <br />
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default Form;
