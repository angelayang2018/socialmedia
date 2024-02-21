import React from "react";
import LogTemplate from "../components/LogTemplate";
import LoginForm from "../components/LoginForm";



export default function Login() {

  return (
    <LogTemplate form = {<LoginForm />}></LogTemplate>
  );
}
