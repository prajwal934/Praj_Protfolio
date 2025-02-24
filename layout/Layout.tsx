import Head from 'next/head';
import React, { Fragment, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
//
import Footer from 'components/common/Footer';
import Navbar from 'components/common/Navbar';

interface ILayoutProps extends PropsWithChildren {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    description: `I enjoy creating Backend solutions with solid foundations, scalability, and excellent user experiences.`,
    image: 'https://ik.imagekit.io/plzddtpgx/pfp-praj.jpg?updatedAt=1740377023806',
    type: 'website',
    ...customMeta,
  };
  return (
    <Fragment>
      <Head>
        <title>
          {meta.title
            ? `${meta.title} • Prajwal | Passionate Backend Engineer`
            : 'Prajwal | Passionate Backend Engineer'}
        </title>
        <meta name="robots" content="follow, index" />
        <meta
          name="keyword"
          content="Skyword, pra.dev, Prajwal, Portfolio, Passionate Backend Developer"
        />
        <meta name="author" content="Prajwal - Passionate Backend Developer" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://prajwal.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://prajwal.dev${router.asPath}`} />
        {/*  */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Prajwal" />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:title"
          content={
            meta.title
              ? `${meta.title} • Prajwal | Passionate Backend Engineer`
              : 'Prajwal | Passionate Backend Engineer'
          }
        />
        <meta property="og:image" content={meta.image} />
        {/*  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prajwal" />
        <meta
          name="twitter:title"
          content={
            meta.title
              ? `${meta.title} • Prajwal | Passionate Backend Developer`
              : 'Prajwal | Passionate Backend Engineer'
          }
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/*  */}
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/favicon.svg"
        />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
