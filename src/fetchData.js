export default async function fetchData(endpoint, callback) {
  const api =
    process.env.NODE_ENV === "production"
      ? "https://thiago-dev-api.herokuapp.com/api/"
      : "http://localhost:1337/api/";
  const response = await fetch(`${api}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const resp = await response.json();
  callback(resp?.data);
}
