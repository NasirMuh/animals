import { createClient } from "next-sanity";

const client = createClient({
    projectId: "eptiw9x7",
    dataset: "production",
    apiVersion: '2022-03-25',
    useCdn: true
});

export default client