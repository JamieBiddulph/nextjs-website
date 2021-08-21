import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-purple-200 dark:border-purple-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-purple-900 dark:text-purple-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-purple-900 dark:text-purple-100">{title}</p>
      </div>
      <p className="text-purple-700 dark:text-purple-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2013</Year>
    <ul>
      <Step title="Started Computing Course At College">
        After seeing out / compeleting the Arts course at college, I opted to start a
        Games design / programming course (well, the vast majority of the course was general computing!)
      </Step>
      <Step title="Fell In Love With Computers">
        I immediately knew I had found my passion with computers. Really started to take
        well to the course contents and was getting fantastic grades.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="Finished Secondary School">
        Left Secondary School, not really knowing what I wanted to do next.
      </Step>
      <Step title="Started Arts Course At Local College">
        Started an Arts course wanting to work mostly with live action photography.
        Very few chances to do photography as part of the course so ended up doing Graphics design.
        Started to realised I really enjoyed working with computers.
      </Step>
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Divider />
      <Year>2021</Year>
      <ul>
       <Step title="New (To me) Technologies!">
         Starting the new role exposed my to many new technologies. One of which I now adore, Ansible!
       </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
       <Step title="Moved To New Role As DevOps Engineer">
         To progress my career further I decided it was time to move on and start a new role as a DevOps Engineer!
       </Step>
      </ul> 
      <Divider />
      <Year>2017</Year>
      <ul>
       <Step title="Promoted to System Support Specialst">
         Relecting on my progression in my job role I earned a promotion to System Support Specialst.
       </Step>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
       <Step title="2016 Twinshock Intermediates Champion">
         I won the 2016 Twinshock Motocross Intermediates Championship.
       </Step>
      </ul>
      <Divider />
      <Year>2015</Year>
      <ul>
       <Step title="Completed Computing Course">
         Completed my course with the highest grade possible.
       </Step>
       <Step title="Started Apprenticeship">
         Straight away I started my Apprenticeship as a Support Technician, as part of a fantastic team
         I picked up new skills very quickly.
       </Step>
       <Step title="Fell in Love with Linux">
         As part of my Apprenticeship I was now working with Linux, and fell in love!
       </Step>
      </ul>
      <Divider />
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-purple-900 dark:text-purple-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
