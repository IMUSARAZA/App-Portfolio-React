import React, { useEffect, useState } from "react";
import Calendar from "react-activity-calendar";
import { Row } from "react-bootstrap";

const theme = {
  level0: "#2a1848",
  level1: "#5b2a86",
  level2: "#8b3db8",
  level3: "#c084f5",
  level4: "#f3e8ff",
};

function Github() {
  const [data, setData] = useState(null);
  const [narrow, setNarrow] = useState(
    () => window.innerWidth < 768
  );

  useEffect(() => {
    function onResize() {
      setNarrow(window.innerWidth < 768);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let active = true;

    fetch("https://github-contributions-api.jogruber.de/v4/IMUSARAZA?y=last")
      .then((response) => response.json())
      .then((body) => {
        if (active && Array.isArray(body.contributions)) {
          setData(body.contributions);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">activity</strong>
      </h1>
      {data && (
        <div className="github-calendar">
          <Calendar
            data={data}
            theme={theme}
            blockSize={narrow ? 8 : 13}
            blockMargin={narrow ? 3 : 4}
            fontSize={narrow ? 11 : 14}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      )}
    </Row>
  );
}

export default Github;
