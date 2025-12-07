import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-coral/10">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-accent-mint to-primary-light text-white rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-primary-50">
                We're here to help you on your journey to wellness
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary hover:shadow-2xl transition-shadow">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-secondary hover:shadow-2xl transition-shadow">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-10 rounded-2xl shadow-xl border-2 border-secondary-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-secondary to-primary text-white p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
