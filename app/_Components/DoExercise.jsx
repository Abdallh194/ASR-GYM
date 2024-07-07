"use client";
import React, { useEffect, useState } from "react";
import { FetchData, ExersiceOptions } from "../_utils/fetchfromapi";
import { FormControl } from "react-bootstrap";
import Image from "next/image";
const DoExercise = () => {
  const [SearchTerm, setSearchTerm] = useState("");
  const [Exercises, setExercises] = useState([]);
  const [BodyParts, setBodyParts] = useState([]);
  // useEffect((e) => {
  //   const GetExerciseCategories = async () => {
  //     const BodyParts = await FetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       ExersiceOptions
  //     );
  //     setBodyParts(BodyParts);
  //   };
  //   GetExerciseCategories();
  // });

  // console.log(BodyParts);

  const HandleSearch = async () => {
    if (SearchTerm) {
      const ExerciseData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExersiceOptions
      );
      const ResultSearch = ExerciseData.filter(
        (e) =>
          e.name.toLowerCase().includes(SearchTerm) ||
          e.target.toLowerCase().includes(SearchTerm) ||
          e.equipment.toLowerCase().includes(SearchTerm) ||
          e.bodyPart.toLowerCase().includes(SearchTerm)
      );
      setSearchTerm("");
      setExercises(ResultSearch);
    }
  };

  console.log(Exercises);
  return (
    <div className="BodyList">
      <div className="head">
        Sorry, the Exercise part is currently under construction
      </div>
      <Image
        src="/exercise_under.png"
        width={900}
        height={500}
        alt="dsasas"
        className="img-fluid"
      />
    </div>
  );
};

export default DoExercise;
