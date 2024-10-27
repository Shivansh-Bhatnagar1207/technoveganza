import Navbar from "../components/Navbar";

export default function HomeLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}