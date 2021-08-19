import Link from 'next/link';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="About">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Key Skills
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
           <li>Linux Administration (CentOS / RHEL & Debian / Ubuntu)</li>
           <li>Shell/Bash Scripting</li>
           <li>Web Server Administration (Nginx, Apache and IIS)</li>
           <li>Database management (MySQL, MariaDB & MSSQL)</li>
           <li>System Monitoring (Zabbix & Nagios/Icinga)</li>
           <li>Automated deployment of services via Docker</li>
           <li>Automated provisioning via Ansible</li>
           <li>Google-Fu!</li>
          </p>
        </div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hobbyist Achievements
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
           <li>2019 National Twinshock 250cc Class Runner Up</li>
           <li>2018 National Twinshock 250cc Class Champion</li>
           <li>2017 National Twinshock 250cc Class Champion</li>
           <li>2016 National Twinshock Intermediate Class Champion</li>
          </p>
        </div>    
      </div>
    </Container>
  );
}
