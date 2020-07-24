import React, { useEffect, useState } from "react";
import { db } from "../utils/create-firestore";
import Navigation from "../components/navigation";
import Form from "../components/form";
import Graph from "../components/graph";

const LandingPage = ({ activities }) => {
  const collectionPath = "activities";
  const [activity, setActivity] = useState(activities[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection(collectionPath).onSnapshot(async (res) => {
      res.docChanges().forEach((change) => {
        const doc = { ...change.doc.data(), id: change.doc.id };

        switch (change.type) {
          case "added":
            return setData((data) => [...data, doc]);

          case "modified":
            return setData((data) => [
              ...data.map((d) => (d.id === doc.id ? doc : d)),
            ]);

          case "removed":
            return setData((data) => [...data.filter((d) => d.id !== doc.id)]);
        }
      });
    });
  }, []);

  return (
    <div>
      <div className={`nav z-depth-0`}>
        <div className={`section center`}>
          <h3 className={`white-text center`}>{`- The Dojo -`}</h3>
        </div>
      </div>
      <div className={`section center`}>
        <p className={`grey-text flow-text`}>
          {`A fitness tracker for ninjas`}
        </p>
      </div>
      <div className={`container section`}>
        <div className={`row`}>
          <div className={`col s12 l5`}>
            <Navigation
              selected={activity}
              options={activities}
              onChange={(option) => setActivity(option)}
            />
          </div>
          <div className={`col s12 l6 push-l1`}>
            <Graph data={data.filter((d) => d.activity === activity)} />
          </div>
        </div>
        <div className={`row`}>
          <Form
            activity={activity}
            onSubmit={async (d) =>
              db
                .collection(collectionPath)
                .add({ ...d, date: new Date().toString() })
            }
          />
        </div>
      </div>
    </div>
  );
};

LandingPage.getInitialProps = (ctx) => {
  return {
    activities: ["cycling", "running", "swimming", "walking"],
  };
};

export default LandingPage;
