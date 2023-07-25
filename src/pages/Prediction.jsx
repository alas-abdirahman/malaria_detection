import React, { useEffect, useState } from "react";
import Background from "../assets/mainBackground.png";
import Input from "@mui/material/Input";
import { Button, Grid } from "@mui/material";
import * as tf from "@tensorflow/tfjs";
import axios from "axios";

export default function Prediction() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePrev, setImagePrev] = useState(null);

  const submit = async () => {
    if(image){
      setLoading(true);
      const formData = new FormData();
      formData.append("file", image);
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const data = await axios.post(`/predict`, formData, { headers });
      setLoading(false);
      setResult(data.data)
      console.log(data.data);
    }else{
      alert('Please upload your image')
    }
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setImagePrev(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={{ display: "block" }}>
      <div
        style={{
          width: "100%",
          height: "400px",
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url(${Background})`,
          backgroundPosition: "center",
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
        <h3>PREDICTION</h3>
        {/* <h5>MALARIA DISEASE DETECTION</h5> */}
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          // sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={4}>
            <div style={{ display: "block" }}>
              <h6>UPLOAD IMAGE AND PREDICT</h6>
              <Input
                accepted="image/*"
                required
                type="file"
                name="file"
                placeholder="blood image"
                onChange={handleImage}
              />{" "}
              <br />
              <Button
                onClick={submit}
                type="submit"
                variant="outlined"
                sx={{ mt: 4 }}
              >
                Predict
              </Button>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: "block" }}>
              <p>Image Preview</p>
              <img src={imagePrev} width={200} height={200} alt="blood cells" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: "block" }}>
              <p>Result</p>
              {result !== "" && <p>The blood is : &nbsp; <strong>{result}</strong></p>}
            </div>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}
