import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <section className="pb-8">
        <h1>Hey there👋,</h1>
        <p className="text-lg">
          Shlok is a software developer, dreamer, and an adventure seeker. He
          loves working on challenging problems.Shlok's interests include
          programming, startups, and investing.
          He is currently pursuing Bachelor's degree in Computer Applications
          from LJ University, Ahmedabad.
        </p>
      </section>

      <section className="pt-2">
        <h1>Projects</h1>
        <hr className="pb-4"></hr>
        <Link href="https://github.com/Shlok11/rocket-api-testing">
          <a className="text-black text-2xl font-semibold underline">
            Rocket🚀
          </a>
        </Link>

        <p className="text-lg">
          Rocket makes API development uncomplicated. It's a platform for
          building and testing your APIs. Built using Vanilla Javascript, Rocket
          allows users to create HTTP/s requests, as well as read their
          responses.
        </p>

        <Link href="https://github.com/Shlok11/URL-Shortener">
          <a className="text-black text-2xl font-semibold underline">
            Shortzy - URL Shortner
          </a>
        </Link>

        <p className="text-lg">
          Developed Shortzy using Node.js, Express, and MongoDB. Shortzy shrinks
          the length of the URL and makes it Short and Sweet.
        </p>
        <Link href="https://github.com/Shlok11/meetup-react-app/tree/master">
          <a className="text-black text-2xl font-semibold underline">Meetup</a>
        </Link>

        <p className="text-lg">
          Built using React.js and Firebase.Meetup is a CRUD Application where
          users can add New Meetups, add their favorite meetups to their
          favorite page.
        </p>
      </section>
    </Layout>
  );
};

export default Index;
