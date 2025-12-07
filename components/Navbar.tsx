import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-white via-primary-50 to-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b-2 border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <Image
              src="/assets/Screenshot 2025-12-06 150821.png"
              alt="Radiation Therapy Late Effects"
              width={400}
              height={80}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="text-gray-700 hover:text-white hover:bg-primary px-4 py-2 rounded-lg transition-all font-medium">
              Home
            </Link>
            <Link href="/therapies" className="text-gray-700 hover:text-white hover:bg-secondary px-4 py-2 rounded-lg transition-all font-medium">
              Therapies
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-white hover:bg-accent-mint px-4 py-2 rounded-lg transition-all font-medium">
              Contact
            </Link>
          </div>

          <button className="md:hidden text-primary hover:text-primary-dark hover:bg-primary-50 p-2 rounded-lg transition-all">
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
