import { logout } from "../../firebase";

export default function Home() {
    return (
        <div style={{ background: "white", color: "red" }}>
            This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!  This is home page!!!!

            <button onClick={(e) => logout()}>Logout</button>
        </div>

    )
}