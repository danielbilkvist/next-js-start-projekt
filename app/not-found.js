import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <h1>404 - Siden blev ikke fundet</h1>
            <p>Beklager, men den side du leder efter findes ikke.</p>
            <p>
            <Link href="/">Go to the home page</Link>
            </p>
        </main>
    );
}