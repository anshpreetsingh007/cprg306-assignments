import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Anshpreet Singh</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/anshpreetsingh007/cprg306-assignments.git">
          https://github.com/anshpreetsingh007/cprg306-assignments.git
        </Link>
      </p>
    </div>
  );
}
