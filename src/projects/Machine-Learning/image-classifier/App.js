import React from "react";
import Sketch from "react-p5";
import ml5 from "ml5";

export default (props) => {
  let mobilenet;
  let video;
  function gotResult(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      mobilenet.predict(gotResult);

    }
  }
  function modelReady() {
    console.log("mobilenet");
    mobilenet.predict(gotResult);
  }
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    video = p5.createCapture(p5.VIDEO);
     p5.createCanvas(500, 500);
    p5.background(0);
    mobilenet = ml5.imageClassifier("MobileNet",video, modelReady);
  };

  const draw = (p5) => {
    p5.stroke(255);
  };
  return <Sketch setup={setup} draw={draw} />;
};
