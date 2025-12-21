import Link from "next/link";

export default function Home() {
  return (
    <nav>
      {/* Prefetched when the link is hovered or enters the viewport */}
      <Link href="/blog">Blog</Link>
      {/* No prefetching */}
      <a href="/contact">Contact</a>
    </nav>
  );
}
