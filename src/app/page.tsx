const stats = [
  { name: 'Years In Full Stack Developer', value: '7+' },
  { name: 'Projects Completed', value: '6' },
  { name: 'Technologies Mastered', value: '40' },
  { name: 'Code Commits', value: '5000+' },
];

const name = "Iskandarkhon M.";
const role = "Full Stack Developer";
const description = "I am a full stack developer with over 7 years of experience. I specialize in developing customer-centric, passionate, and user-friendly web applications.";    

export default function Home() { 

  return (        
    <div className="isolate overflow-visible bg-gray-900 py-24 sm:py-32">   
        <img
          alt=""
          src="home.png"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center blur-xs"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-12 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              {role}
            </p>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-7xl">Hi I'm </h2>
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-indigo-400 sm:text-7xl">{name}</h2>
            <div className="space-y-4">
              <p className="mt-6 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">💯𝟭𝟬𝟬% 𝗖𝗹𝗶𝗲𝗻𝘁 𝗦𝗮𝘁𝗶𝘀𝗳𝗮𝗰𝘁𝗶𝗼𝗻</p>
              <p className="mt-2 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">My greatest good is developing customer-centric, passionate, and user-friendly web application. </p>
            </div>
          </div>
        </div>
    </div>
  );
}
