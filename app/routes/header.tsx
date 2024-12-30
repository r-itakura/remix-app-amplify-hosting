import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header style={{ backgroundColor: "#e0ffe0", padding: "1rem" }}>
        <nav>
            <Link to="/" className="text-3xl font-bold text-green-600 mb-6">
            ずんだもんとのチャットアプリ
            </Link>
        </nav>
        </header>
    );
}