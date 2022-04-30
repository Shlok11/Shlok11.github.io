import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <section className="pb-4">
        <Link href="/">
          <a className='text-black text-4xl font-semibold'>Shlok Soni</a>
        </Link>
        
      </section>

      <section>
        <Link href="https://www.linkedin.com/in/shlok-soni/">
          <a className="text-gray-900 dark:text-white pr-4 py-6">LinkedIn</a>
        </Link>
        <Link href="https://twitter.com/ShlokSoni11">
          <a className="text-gray-900 dark:text-white pr-4 py-6">Twitter</a>
        </Link>
        <Link href="https://github.com/Shlok11">
          <a className="text-gray-900 dark:text-white pr-4 py-6">Github</a>
        </Link>
      </section>
      
    </nav>
  );
};
export default Navigation;
