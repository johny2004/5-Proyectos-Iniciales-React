import { Link } from "react-router-dom";
export default function Book({ item }) {

    const bookContainerStyle = {
        display: "flex",
        flexDirection: "column",
        
        width: "200px",
       
    }

    const bookInfoStyle = {
        textAlign: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        color: "white",
        textDecoration: "none",
    }
    return <div style={bookContainerStyle}>
        <Link to ={`/view/${item.id}`} style={bookInfoStyle}>
            <img src={item.cover} width ="200" alt={item.title} />
            <div>{item.title}</div>
        </Link>
    </div>;
    }