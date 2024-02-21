import React from "react";
import LogTemplate from "../components/LogTemplate";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <LogTemplate form = {<ForgotPasswordForm/>}></LogTemplate>
  );
}
