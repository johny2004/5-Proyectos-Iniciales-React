import NavBar from "./navbar";
export default function Layout({children}) {

    const contaiinerStyle = {
        width:"90%",
        margin: "25px auto",
        padding: "20px",
    }
    return (
        <div >
            <NavBar />
            <div style={contaiinerStyle}>{children}   </div>
        </div>
    );
}