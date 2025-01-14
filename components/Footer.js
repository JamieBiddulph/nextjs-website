import Link from 'next/link';

import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-purple-500 hover:text-purple-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <div className="w-full text-purple-500">
          <ExternalLink href="https://github.com/leerob/leerob.io">Thanks to Lee Rob for an awesome design template :)</ExternalLink>
      </div>
      <hr className="w-full border-1 border-purple-200 dark:border-purple-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-purple-500 hover:text-purple-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-purple-500 hover:text-purple-600 transition">
              About
            </a>
          </Link>
          </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/JamieBiddulph">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/jamie-biddulph-a665b3123/">
            LinkedIn
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-purple-500 hover:text-purple-600 transition">Uses</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
