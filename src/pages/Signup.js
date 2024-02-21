import React from "react";
import LogTemplate from "../components/LogTemplate";
import SignUpForm from "../components/SignUpForm";

export default function Signup() {
  return (
    <LogTemplate form = {<SignUpForm/>}></LogTemplate>
  );
}
