import Hero from '@/components/hero';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button';
import Footer from '@/components/footer';
import ProjectSection from '@/components/projectSection';
import { getProjectsData } from "@/lib/projects"

export const metadata = {
  title: 'Casper Guo',
  icons: {
    icon: '/logo.png',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}

export default async function Home() {
  const projectsData = await getProjectsData();
  return (
    <div>
      <Hero />
      <section className='py-10 bg-gray-200 dark:bg-gray-800'>
        <div className='flex flex-col items-center text-center gap-4'>
          <h2 className='text-3xl font-bold'>Some of My Projects</h2>
          <Button text="View All My Projects 👨‍💻" href='/projects' />
        </div>
        {
          projectsData.slice(0, 3).map((projectData, index) => (<ProjectSection key={projectData.name} data={projectData} left={index % 2} />))
        }
      </section>
      <section className='py-10 bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>

        <div className='container mx-auto px-2 flex items-center content-between flex-col md:flex-row gap-4'>
          <Image
            className="rounded h-[400px] w-auto object-cover md:mr-auto "
            width={500}
            height={500}
            src="/profile_pic.png"
            alt="Me, myself, and I"
          />
          <div className='md:w-2/3 lg:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>A bit about me</h2>
            <p className='mb-2'>I am a quantitative developer at DL Trading where I work on backend systems to enable quoting and trading sports markets and contracts.</p>
            <p className='mb-2'>I am an alumni of the University of Michigan with a major in data science and minors in math and linguistics. I received my master&apos;s degree in computer science from Georgia Tech, specializing in computing systems.</p>
            <p className='mb-2'>Major college football and hockey fan 🏈🏒 and growing the formula 1 🏎️ and soccer ⚽ crowd at DL. Just now getting into pro cycling 🚴.</p>
            <Button text="View My Resume 📄" href='/resume' />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
}

