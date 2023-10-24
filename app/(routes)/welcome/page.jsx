'use client'

import Link from 'next/link'
export default function Welcome() {
  const developerTips = [
    'Continuous Learning: Stay up-to-date with the latest technologies and best practices in software development.',
    'Write Clean and Maintainable Code: Strive for clean, well-structured, and maintainable code.',
    'Version Control and Collaboration: Use version control systems (e.g., Git) to track changes in your code.',
    'Testing and Debugging: Thoroughly test your code to catch and fix bugs early in the development process.',
    'Documentation and Communication: Document your code, projects, and APIs. Effective communication is crucial for project success.',
  ]
  const developerBonusTip =
    'Bonus Tip: Problem Solving and Critical Thinking: Cultivate strong problem-solving and critical thinking skills. Break down issues into smaller, manageable parts, and use logical reasoning to find solutions efficiently.'

  const contentCreatorsTips = [
    "Plan and Outline: Before diving into writing, create a clear plan and outline for your content. This helps you organize your thoughts, identify key points, and maintain a logical flow in your writing. It can save you time and reduce writer's block.",
    "Write Regularly: Develop a consistent writing routine. Practice makes perfect, and the more you write, the better you become. Even if it's just a short daily writing exercise, it can significantly improve your skills over time.",
    'Revise and Edit: Your first draft is unlikely to be perfect. Editing is where your content truly shines. Take the time to review, revise, and refine your work. Look for errors, improve clarity, and enhance your writing style.',
    'Research and Fact-Check: Thoroughly research your topics, and ensure the accuracy of the information you present. Always fact-check to avoid spreading incorrect or misleading information. Citing reliable sources is essential.',
    "Embrace Feedback: Don't be afraid to seek feedback from peers, editors, or your audience. Constructive criticism can help you identify areas for improvement and refine your writing skills. Be open to suggestions and willing to make changes.",
  ]
  const contentCreatorsBonusTip =
    "Bonus Tip: Avoid Procrastination: Procrastination can be a writer's worst enemy. Set deadlines, break tasks into smaller, manageable chunks, and use productivity techniques like the Pomodoro method to stay focused and motivated."

  const studentEducatorTips = [
    'Set Clear Goals: Define your educational goals and objectives. Knowing what you want to achieve helps you stay motivated and focused.',
    'Effective Time Management: Prioritize tasks, create a schedule, and avoid procrastination. Efficient time management is essential for productivity.',
    'Engage Actively: Participate in class discussions, ask questions, and collaborate with peers. Active engagement enhances learning and understanding.',
    'Diverse Learning Resources: Explore a variety of learning resources, including textbooks, online courses, videos, and interactive tools.',
    "Seek Feedback: Don't hesitate to ask for feedback from educators or peers. Constructive criticism can help you improve and refine your skills.",
  ]
  const studentEducatorBonusTip =
    'Bonus Tip: Embrace Adaptability - Be open to new ideas and flexible in your approach to learning. The ability to adapt to new challenges and technologies is a valuable skill in education and beyond.'

  return (
    <main className='flex flex-row min-h-screen items-center justify-around p-20 space-x-10'>
      <div className='bg-white/50 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6 shadow-md hover:scale-150 hover:z-50 transition-transform duration-300 transform hover:translate-x-40'>
        <h2 className='text-2xl font-bold mb-4'>
          Tips for Software Developers
        </h2>
        <p>Here are some tips for developers:</p>
        <ol className='list-decimal p-4'>
          {developerTips.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className='text-sm font-bold'>{developerBonusTip}</p>
        <div className='flex justify-center'>
          <Link
            href={'/login'}
            className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2 px-4 mt-4 transition-colors duration-300 transform hover:scale-105'
          >
            Software Developers Login
          </Link>
        </div>
      </div>
      <div className='bg-white/50 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6 shadow-md hover:scale-150 hover:z-50 transition-transform duration-300'>
        <h2 className='text-2xl font-bold mb-4'>
          Tips for Content Creators and Writers
        </h2>
        <p>Here are some tips for creators and writers:</p>
        <ol className='list-decimal p-4'>
          {contentCreatorsTips.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className='text-sm font-bold'>{contentCreatorsBonusTip}</p>
        <div className='flex justify-center'>
          <Link
            href={'/login'}
            className='bg-violet-500 hover:bg-blue-600 text-white rounded-lg p-2 px-4 mt-4 transition-colors duration-300 transform hover:scale-105'
          >
            Content Creators and Writers Login
          </Link>
        </div>
      </div>
      <div className='bg-white/50 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6 shadow-md hover:scale-150 hover:z-50 transition-transform duration-300 transform hover:-translate-x-40'>
        <h2 className='text-2xl font-bold mb-4'>
          Tips for Students and Educators
        </h2>
        <p>Here are some tips for students and educators:</p>
        <ol className='list-decimal p-4'>
          {studentEducatorTips.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <p className='text-sm font-bold'>{studentEducatorBonusTip}</p>
        <div className='flex justify-center'>
          <Link
            href={'/login'}
            className='bg-green-500 hover:bg-blue-600 text-white rounded-lg p-2 px-4 mt-4 transition-colors duration-300 transform hover:scale-105'
          >
            Students and Educators Login
          </Link>
        </div>
      </div>
    </main>
  )
}
