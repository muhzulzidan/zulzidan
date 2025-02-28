import * as React from "react"
import { useEffect } from "react"
import { navigate } from "@reach/router"

const RedirectPage = () => {
    useEffect(() => {
        navigate("https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan%2C%20saya%20mau%20bertanya%20soal%20aco%20daily%20magang")
    }, [])

    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Redirecting...</h1>
            <p style={paragraphStyles}>
                Anda akan segera diarahkan ke halaman baru.
            </p>
        </main>
    )
}

export default RedirectPage

export const Head = () => (
    <>
        <title>Redirecting...</title>
        <meta name="robots" content="noindex, nofollow" />
    </>
)

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    color: "#333",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    backgroundColor: "#f4f4f4",
    padding: "0 20px",
}

const headingStyles = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
}

const paragraphStyles = {
    fontSize: "1.25rem",
    marginBottom: "2rem",
}