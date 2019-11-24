import axios from "axios";
import { input, sanitize } from "../../../../../shared/index";
import { api } from "./api";
import { loading, error, success } from "./handlers";

export function get(value, updateState, localState) {
  const { maxLength, name } = input;

  if (value && value.length < maxLength) {
    const path = encodeURI(api());

    const payload = { params: { [name]: sanitize(value) } };

    loading(updateState, localState);

    axios
      .get(path, payload)
      .then(res => success(updateState, localState, name, value, res.data))
      .catch(err => error(updateState, localState, err));
  }
}