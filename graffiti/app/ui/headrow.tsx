import Link from 'next/link';

export default function Header() {
    return (
        <>
        <nav>
            <Link href = "/">
                Graffiti logo here
            </Link>
            <Link href = "/create">
                Create 
            </Link>
        </nav>
        </>
    );
}