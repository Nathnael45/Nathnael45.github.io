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
              className="rounded-full"
            />
          </div>
          {/* Text  */}
          <div className="lg:w-2/3 lg:pl-16">
            <h1 className="text-4xl font-bold mb-4">Hi, my name is Nathnael Tesfaw!</h1>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed lorem lacus. Aenean vulputate ligula posuere convallis ornare. Suspendisse ipsum ligula, maximus et nunc a, mollis malesuada magna. Phasellus vitae sagittis diam, eu ornare turpis. Sed vel finibus nunc, ut rutrum eros. Vivamus iaculis non ante a ultrices. In convallis scelerisque ullamcorper. Nulla sem mauris, imperdiet non urna vel, vestibulum sollicitudin diam. Duis metus mauris, bibendum ac nulla eget, ornare suscipit sapien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
