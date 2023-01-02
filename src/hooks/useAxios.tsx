import React, { useState } from "react";
import axios from "axios";

const Url: string = "http://localhost:8080";

const getData = (url: string, data: any[]) => {
  axios
    .get(Url + url)
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
};

const postData = (url: string, data: any[]) => {
  axios
    .post(Url + url)
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
};

const useAxios = (url: string, method: string, data: any[]) => {
  if (method == "get") {
    getData(url, data);
  } else if (method == "post") {
    postData(url, data);
  }
};

export default useAxios;
