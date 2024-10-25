import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 px-6 py-3 text-white rounded-lg border-white shadow-xl shadow-cyan-900">About Page</h1>
        <br />
        <p className="text-xl max-w-2xl mb-8">
          Welcome to my about page! I'm a passionate web developer with experience in HTML, CSS, TypeScript, Tailwind CSS, SHADCN, React, and Next.js. I am dedicated to creating outstanding websites with a high level of dedication and attention to detail.
        </p>

        {/* Button to go to Contact Page */}
        <Link href="/contact">
          <button className="px-6 py-2 border border-white text-white rounded-lg hover:bg-zinc-900 shadow-lg shadow-cyan-800">
            Go to Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}