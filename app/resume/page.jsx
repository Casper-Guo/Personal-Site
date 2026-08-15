import Image from 'next/image';
import Footer from '@/components/footer';

export const metadata = {
    title: 'Resume - Casper Guo',
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

export default function Resume() {
    const resume = [
        {
            // deliberate trailing white space to keep the keys unique
            "company": "DL Trading ",
            "dates": "June 2026 - Present",
            "role": "Quantitative Developer",
            "location": "Chicago, IL",
            "image": "/logos/dl.png",
            "bullets": []
        },
        {
            "company": "Amazon",
            "dates": "Aug - Nov 2025",
            "role": "Business Intelligence Engineer Intern",
            "location": "Nashville, TN",
            "image": "/logos/amazon.png",
            "bullets": []
        },
        {
            "company": "DL Trading",
            "dates": "May - Aug 2025",
            "role": "Quantitative Developer Intern",
            "location": "Chicago, IL",
            "image": "/logos/dl.png",
            "bullets": [
                "Built a Python market condition monitor by integrating with data providers over HTTP and websocket, reduced latency by 99+% over existing SQL solution. Used by internal and client traders for trading in all major sports",
                "Prototyped integration with an external exchange, including data ingestion and validation with SQL and Pydantic over REST APIs, and orderbook, RFQ, and portfolio management through websockets",
                "Developed an internal service latency alert using Python and Prometheus to simplify diagnostics and triaging"
            ]
        },
        {
            "company": "Shopify",
            "dates": "May - Aug 2022",
            "role": "Data Science Intern, Shopify Payments",
            "location": "Toronto, ON & Vancouver, BC",
            "image": "/logos/shopify.png",
            "bullets": [
                "Implemented and maintained Spark and SQL data pipelines to unblock SP deployment in France, improve data transformation workflow for three downstream teams, and contribute three new KPIs to company-wide dashboard",
                "Created four interactive KPI dashboards for stakeholders and clients using SQL, Matplotlib, and Plotly",
                "Processed and analyzed data gathered from an A/B test on onboarding email designs using Bayesian hypothesis testing and prepared visualizations for presentation to the marketing manager",
                "Performed a week of on-call duty involving handling data requests using Trino and BigQuery and triaging and debugging failing pipelines"
            ]
        },
        // {
        //     "company": "Michigan Data Science Team",
        //     "dates": "Aug 2021 - Aug 2024",
        //     "role": "Vice President of Education, Project Lead",
        //     "location": "Ann Arbor, MI",
        //     "image": "/logos/mdst.png",
        //     "bullets": [
        //         "Project lead for webscrapping & video synthesis, reinforcement learning, image colorization, and sports data analysis and visualization (see projects page)",
        //         "Collaborated with other execs on semesterly new member recruiting effort by developing onboarding materials, increased club enrollment by 200+% over two-year tenure",
        //         "Revamped two Python tutorials, developed statistics and machine learning challenges, improved setup guides, created a troubleshooting FAQ document, and oversaw a Q&A forum for 100+ new members every semester",
        //         "Managed weekly office hours and tutorial sessions with 150+ total attendees to lower the barrier of entry to data science",
        //         "Built job opportunity repositories for members with no-code contribution workflows via GitHub actions"
        //     ]
        // }
    ];


    return (
        <div>
            <div className='bg-gradient-to-b from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto px-2 py-32">
                    <h1 className='text-5xl font-extrabold text-center'>
                        My Resume 📄
                    </h1>
                </div>
            </div>
            <section className='bg-gradient-to-t from-slate-300 dark:from-slate-700 to-gray-200 dark:to-gray-800'>
                <div className="container mx-auto py-4 px-2">
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EDUCATION 👨‍🎓
                        </h2>
                        <Experience data={{
                            "company": "Georgia Institute of Technology",
                            "dates": "Aug 2024 - May 2026",
                            "role": "Master's of Science in Computer Science, Specialization: Computing Systems",
                            "location": "Atlanta, GA",
                            "image": "/logos/GT.png",
                        }} ><p>
                                <span className="font-bold">Coursework:</span> High Performance Computer Architecture, Computer Networks, Data Center Networks & Systems, Software Hardware Co-Design for ML, ML Security, Blockchain, Algorithms, Tech Policy & Privacy Law, Online Communities
                            </p></Experience>
                        <Experience data={{
                            "company": "University of Michigan",
                            "dates": "Aug 2020 - May 2024",
                            "role": "Bachelor of Science in Engineering in Data Science summa cum laude, Math Minor, Linguistics Minor",
                            "location": "Ann Arbor, MI",
                            "image": "/logos/michigan.png",

                        }} ><p>
                                <span className="font-bold">Coursework:</span> Machine Learning, Software Engineering, Data Structure & Algorithms, Web Systems, Computer Organization, Natural Language Processing, Applied Regression Analysis, Probability, Combinatorics & Graph Theory, Reinforcement Learning, Quantum Computing, Information Retrieval
                            </p></Experience>
                    </div>
                    <div className='py-2'>
                        <h2 className="text-3xl font-bold">
                            EXPERIENCE 👷‍♂️
                        </h2>
                        <div className="divider my-0"></div>
                        {resume.map((experience) => <Experience key={experience.company} data={experience} />)}
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

function Experience({ data, children }) {

    return (
        <div className='p-4 border border-slate-700 dark:border-white my-6 rounded-lg' >

            <div className="resume-grid mb-3">
                <Image className="w-[56px] h-[56px] mr-2 object-cover rounded row-span-2" width={56} height={56} src={data?.image} alt={data.company + " logo"} />
                <h3 className='font-bold'>{data.company}</h3>
                <span>{data.dates}</span>
                <span className=''>{data.role}</span>
                <span className='italic md:justify-self-end'>{data.location}</span>
            </div>
            {data?.bullets && <ul className='pl-4 list-disc'>
                {data.bullets.map((bullet, index) => {
                    return <li className='mb-1' key={index} >{bullet}</li>
                })}
            </ul>}
            {children}
        </div>
    )
}