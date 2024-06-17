import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <body>
      <h1>graffiti</h1>
      <section className="blurb">
          In an age where media is passively consumed  in an algorithmically predestined scroll, graffiti takes the numbers out and gives the power back to the user. You can join “walls” that you’re interested in and share the open canvas with other members of that community. Paint your ideas, opinions, or tributes for everyone else to see. But what you spray matters as each wall has limited space. The community decides what stays at the top and what gets painted over.
      </section>
      <section className="Nav">
        <Link href = "/about"> about </Link>
        <Link href = "/browse" > browse </Link>
        <Link href = "/create" > create </Link>
      </section>
    </body>
    
    
  );
}
