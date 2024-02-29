import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <ol className="flex flex-row p-3">
        <li className="m-4">
          <Link href="/">Home</Link>
        </li>
        <li className="m-4">
          <Link href="/posts/1">Posts</Link>
        </li>
        <li className="m-4">
          <Link href="/create">Add post</Link>
        </li>
        <li className="m-4">
          <Link href="/about">About</Link>
        </li>
      </ol>
    </div>
  );
}
