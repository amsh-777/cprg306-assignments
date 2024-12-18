import Link from "next/link";


export default function Home() {
  let linkStyle ="block bg-blue-500 text-white p-4 w-80 rounded-md shadow hover:bg-blue-600 ";
  return (
    <main >
     <h1 className="text-2xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
     <div className="space-y-4">
     <Link href="./week-2/" className={linkStyle}>Week-2</Link> 
     <Link href="./week-3/" className={linkStyle}>Week-3</Link> 
     <Link href="./week-4/" className={linkStyle}>Week-4</Link> 
     <Link href="./week-5/" className={linkStyle}>Week-5</Link> 
     <Link href="./week-6/" className={linkStyle}>Week-6</Link> 
     <Link href="./week-7/" className={linkStyle}>Week-7</Link> 
     <Link href="./week-8/" className={linkStyle}>Week-8</Link> 
     <Link href="./week-9/" className={linkStyle}>Week-9</Link> 
     <Link href="./week-10/" className={linkStyle}>Week-10</Link> 
     </div>
    </main>
  );
}
