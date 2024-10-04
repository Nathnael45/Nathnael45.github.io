import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src= "/profile-pic.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full transform transition-transform duration-300 hover:translate-x-4 hover:translate-y-4 hover:scale-110"
            />
          </div>
          {/* Info  */}
          <div className="lg:w-2/3 lg:pl-16">
            <h1 className="text-4xl font-bold mb-4">Hi, my name is Nathnael Tesfaw!</h1>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <h3></h3>
            <div className="text-lg leading-relaxed">
             <a className  = "underline" href="https://github.com/Nathnael45/WorkoutHub"> <span>Workout Hub</span></a>
             <br />
             <br />
              <a className  = "underline" href="https://github.com/dvala041/Lost_And_Found"> <span>Lost and Found App</span></a>
              <br />
              <br />
              <a className  = "underline" href="https://github.com/Nathnael45/Space-Game"> <span>Space Game</span></a>

            </div>
            <br />
            <h2 className="text-2xl font-bold mb-4">Links</h2>
            <div className="flex">
            <a href="https://www.linkedin.com/in/nathnael-tesfaw-2aa9171a1/"><Image
              src= "/lockedin.png"
              alt=" Linkdin Logo"
              width={100}
              height={50}
               /></a>

              <a href="https://github.com/Nathnael45"><Image
              src= "/gothub.png"
              alt=" Github Logo"
              width={100}
              height={50}
               /></a>
              
            </div>
            
    

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
