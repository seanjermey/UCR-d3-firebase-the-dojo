import React, { useState } from "react";

interface FormProps {
  activity: string;
  onSubmit: ({ activity: string, distance: number }) => Promise<any>;
}

const Form = ({ activity, onSubmit }) => {
  const [distance, setDistance] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      className={`col m6 push-m3`}
      onSubmit={(e) => {
        e.preventDefault();

        if (!distance || isNaN(parseInt(distance))) {
          return setError("Distance must be a number");
        }

        onSubmit({
          distance: parseInt(distance),
          activity,
        }).then(() => {
          setDistance("");
          setError("");
        });
      }}
    >
      <p className={`flow-text grey-text center`}>
        How much <span>{activity}</span> has you done today?
      </p>
      <input
        type={`text`}
        className={`grey-text`}
        id={activity}
        value={distance}
        placeholder={`Distance in m`}
        onChange={(e) => setDistance(e.target.value)}
      />
      <p className="center pink-text error text-lighten-1">{error}</p>
    </form>
  );
};

export default Form;
