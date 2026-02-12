import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                We&apos;re here to help you on your journey to wellness
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-primary hover:shadow-2xl transition-shadow">
                <div className="flex items-start mb-4">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@rlec.ca" className="text-lg text-primary hover:text-primary-dark transition-colors">
                      info@rlec.ca
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-secondary hover:shadow-2xl transition-shadow">
                <div className="flex items-start mb-4">
                  <span className="bg-gradient-to-r from-secondary to-secondary-light text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Toll Free Tel/Fax</h3>
                    <a href="tel:18447141132" className="text-lg text-secondary hover:text-secondary-dark transition-colors">
                      1-844-714-1132
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-accent-mint hover:shadow-2xl transition-shadow">
                <div className="flex items-start mb-4">
                  <span className="bg-gradient-to-r from-accent-mint to-accent-lime text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-lg text-gray-700">
                      4617 Burgoyne St.<br />
                      Mississauga, ON<br />
                      L4W 1G3
                    </p>
                  </div>
                </div>
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
                We are here to help you navigate the challenges of radiotherapy late effects. Whether you have questions about our services or would like to schedule a consultation, please don&apos;t hesitate to reach out.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our experienced team is committed to providing compassionate care and personalized treatment options for those who have developed complications from radiotherapy.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
