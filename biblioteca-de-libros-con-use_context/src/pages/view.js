
import { useEffect } from "react";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/store";
import { useState } from "react";
export default function View() {

    const [item,setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    useEffect (() => {
        const book = store.getItem(params.bookId);
        setItem(book);
     
    }, []);

    if (!item) {
        return <Layout>Loading... <strong>{params.bookId}</strong> || <div>Item not found</div></Layout> 
    }
    return (
    <Layout>
        <h2>{item?.title}</h2>
        <div>{item?.cover?<img src={item?.cover} width="400" alt={item?.title} />: ""}</div>
        <div>{item?.author}</div>
        <div>{item?.intro}</div>
       <div>{item?.completed? "Completed": "Not completed"}</div>
       <div>{item?.review}</div> 
    </Layout>
);
}