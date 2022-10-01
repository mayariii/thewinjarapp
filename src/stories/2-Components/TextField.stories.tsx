import * as React from "react";
import TextFieldInput from "../../components/TextField";

export default {
  title: "2-Components/Inputs",
};

export const TextFieldComponent = () => (
  <TextFieldInput name={"name"} label={"This is my label"} />
);
