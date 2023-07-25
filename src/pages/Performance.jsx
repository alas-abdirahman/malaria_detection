import React from "react";
import Background from "../assets/injection.png";
import PerformanceImg from "../assets/performance.png";
import accurImg from "../assets/accuracy.png";
import lossImg from "../assets/loss.png";

function Performance() {
  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          width: "100%",
          height: "400px",
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url(${Background})`,
          //   backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //   backdropFilter: "brightness(140%)",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 22,
            paddingTop: 1,
            textAlign: "center",
            margin: "auto",
          }}
        >
          <h3 style={{ marginTop: "10%" }}>MALARIA DISEASE USING</h3>
          <h5>MACHINE LEARNING</h5>
        </div>
      </div>
      <center>
        <h3>PERFORMANCE ANALYSIS</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "30%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              width: "30%",
              textAlign: "left",
            }}
          >
            <p>Accuracy: </p>
            <p>0.95</p>
            <p>Precission: </p>
            <p>0.96</p>
            <p>Recall: </p>
            <p>0.97</p>
            <p>F-Score: </p>
            <p>0.96</p>
          </div>
          <img src={PerformanceImg} width={220} alt="performance" />
        </div>
        <br />
        <h3>LOSS AND ACCURACY GRAPH</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "0%",
            textAlign: "center",
            width:'40%',
            justifyContent:'space-between'
          }}
        >
          <img src={lossImg} width={250} alt="loss" />
          <img src={accurImg} width={250} alt="accur" />
        </div>
      </center>
    </div>
  );
}

export default Performance;
