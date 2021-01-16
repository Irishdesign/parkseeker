import { fetchtype } from "../store/types";

export const fetchData = (text: string = "acad", type: fetchtype = fetchtype.parkCode) => {
    const API_KEY = "AnCjdj5Ns8Hfok4SgkgYFfZX0heaVWXEUg87e2Kh";
    let url = "https://developer.nps.gov/api/v1/parks?" + type + "=" + text + "&api_key=" + API_KEY;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(" error: ", error);
        });
};
