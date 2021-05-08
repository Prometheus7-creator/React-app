import React from "react";
import useFetch from "react-fetch-hook";

export default function Api() {
const { isLoading, error, data } = useFetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
if (isLoading) return "Loading...";
if (error) return "Error!";
return (
<>
<img src={data.[0].thumbnail.small} alt="random user" />
<pre>{JSON.stringify(data, null, 2)}</pre>
</>
);
}