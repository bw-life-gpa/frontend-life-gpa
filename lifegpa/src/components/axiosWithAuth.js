import axios from "axios";

export default function() {
  const authorization = localStorage.getItem("authorization");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${authorization}`,
      "Access-Control-Allow-Origin": "*"
    }
  });
}
