export const fetchNews = () => {
    const url = "http://localhost:3000/news";

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
