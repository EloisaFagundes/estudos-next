import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <p>About us :O</p>
      <hr />
      <div>
        <Link href="/" className="text-blue-600 underline">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default About;