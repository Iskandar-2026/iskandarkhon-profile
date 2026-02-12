"use client";


export default function AppFooter() {

  return (
    <footer className="absolute inset-x-0 bottom-0 z-50">          
            <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 py-8">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <span className="text-white text-5xl xl:text-6xl font-extrabold">7+</span>
                        <p className="max-w-[75px] leading-snug text-white/80">Years In Full Stack Developer</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <span className="text-white text-5xl xl:text-6xl font-extrabold">20</span>
                        <p className="max-w-[75px] leading-snug text-white/80">Projects Complete</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <span className="text-white text-5xl xl:text-6xl font-extrabold">60</span>
                        <p className="max-w-[75px] leading-snug text-white/80">Technologies Mastered</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <span className="text-white text-5xl xl:text-6xl font-extrabold">1600+</span>
                        <p className="max-w-[75px] leading-snug text-white/80">Code Commit</p>
                    </div>
                </div>            
        </div>
    </footer>
    )
};
 