import axios from "axios";
import { GET_LEADS } from "./types";

export const getLeads = () => disptach => {
  axios
    .get("/api/leads/")
    .then(response => {
      dispatch({
        type: GET_LEADS,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};
