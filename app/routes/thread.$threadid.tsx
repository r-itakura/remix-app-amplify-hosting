import { useParams } from "@remix-run/react";

export default function ThreadPage() {
    const params = useParams();
    return <h1>Threasd Page {params.threadid}</h1>;
}