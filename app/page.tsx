import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-primary-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-secondary-50 to-neutral-warm">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 md:p-16 mb-12 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Compassionate Care, Modern Medicine.
              </h1>
              <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-3xl">
                Providing established healthcare to lead you on your journey to wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/assets/Referral-RLEC_8+V0620.pdf"
                  download
                  className="bg-white hover:bg-primary-50 text-primary font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center inline-block"
                >
                  Download Referral Form
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-accent-mint">
                <div className="bg-gradient-to-br from-accent-mint to-primary-light text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  Care based in your individual needs and goals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-secondary">
                <div className="bg-gradient-to-br from-secondary to-secondary-light text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our providers are leaders in their specialized fields.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-accent-orange">
                <div className="bg-gradient-to-br from-accent-orange to-accent-coral text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facility</h3>
                <p className="text-gray-600">
                  State-of-the-art equipment and a caring environment.
                </p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Patient-First Approach</h2>
              <p className="text-lg text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-lg text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
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
