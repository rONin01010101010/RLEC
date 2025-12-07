import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Therapies() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-secondary to-secondary-light text-white rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Therapies
              </h1>
              <p className="text-lg text-secondary-50">
                Explore our comprehensive treatment options
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Therapies Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-100 hover:border-primary-light transition-all">
              <Image
                src="/assets/therapies.png"
                alt="Hyperbaric Oxygen Treatment"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Reference Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/references?ref=1"
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-semibold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Reference 1
              </Link>
              <Link
                href="/references?ref=2"
                className="bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-dark hover:to-secondary text-white font-semibold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Reference 2
              </Link>
              <Link
                href="/references?ref=3"
                className="bg-gradient-to-r from-accent-mint to-accent-lime hover:from-accent-lime hover:to-accent-mint text-white font-semibold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Reference 3
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-primary-dark via-primary to-primary-light text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-primary-50">
              &copy; {new Date().getFullYear()} Radiation Therapy Late Effects Clinic. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
