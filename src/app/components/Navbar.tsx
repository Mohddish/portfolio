import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-[#F5F5DC] font-sans text-lg font-medium px-4 py-2">
              MOHDDISH
            </Link>
          </div>
          <div>
            <Link 
              href="/contact" 
              className="text-[#F5F5DC] hover:text-yellow-400 transition-colors duration-200 px-4 py-2"
            >
              Say Hello!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 