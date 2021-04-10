import React from "react";
import {MdComputer} from "react-icons/md";
import {FaDatabase, FaMoneyCheckAlt} from "react-icons/fa";

export const SampleUser = {
    sid : "19103102",
    name : "Nisha Yadav",
    cgpa : "6.9",
    branch : "Computer Science & Engineering",
    email : "nisha.bt19cse@pec.edu.in",
    password : "random",
    preferences : [{name : "Finance", logo : <FaMoneyCheckAlt size="30px"/> }, {name : "Software Developer", logo : <MdComputer size="30px"/> }, {name : "Data Science", logo : <FaDatabase  size="30px"/> }],
};