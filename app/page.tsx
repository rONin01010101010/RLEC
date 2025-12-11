import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl">
                Providing established healthcare to lead you on your journey to wellness.
              </h1>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Radiation Therapy?</h2>
              <p className="text-lg text-gray-600 mb-4">
                Radiation therapy is one of the main methods of treating cancer. It uses machines called linear accelerators to deliver precise and focused high energy x-rays to damage or kill cancer cells. It is a powerful and well proven tool used in the battle against cancer. It has revolutionized the management of many tumors and improved the outcome of persons suffering malignancy over the past few decades and saved countless from hardship and mortality.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What are the Complications That May Arise from Radiation Therapy?</h2>
              <p className="text-lg text-gray-600 mb-4">
                As in all therapies - not all outcomes are equally favorable. In a small percentage of those who receive radiotherapy, the tissue response is accentuated and damage to normal tissue occurs. The unpleasant effects usually settle post irradiation, however not in all cases.
              </p>

              <p className="text-lg text-gray-600 mb-4">Problems can manifest in many ways:</p>
              <ul className="text-lg text-gray-600 mb-4 list-disc pl-8">
                <li>thinning out &quot;wasting&quot; of tissue</li>
                <li>fibrotic transformation (elastic tissue becomes tough and leathery)</li>
                <li>bone fractures (known as insufficiency fractures/or pathological fractures) when bones become weak and break spontaneously or with minor trauma</li>
                <li>infection - lack of host defences to keep bacteria and other invaders at bay</li>
                <li>pain - this may result from damage to the nervous tissue as well as chronic inflammation of the supporting tissues - known to occur as a result of the radiotherapy</li>
                <li>bleeding - spontaneously due to lack of regular repair and maintenance</li>
              </ul>

              <p className="text-lg text-gray-600 mb-4">
                The common underlying feature is a loss of the normal ability to perform &quot;housekeeping chores&quot; of tissue repair and maintenance.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                The timing of these unwanted biological effects of radiation exposure (Complications) can be divided into 2 groups:
              </p>
              <ol className="text-lg text-gray-600 mb-4 list-decimal pl-8">
                <li>If sustained following treatment the problem is called persistent radiation effects.</li>
                <li>If the initial inflammation settles and then after 3 months or more, tissue deterioration and loss of function develops, this has been termed radiation late effects.</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What Options are Available for Those Suffering from Radiation Therapy Complications?</h2>
              <p className="text-lg text-gray-600 mb-4">
                In 2000 the Adult Radiotherapy Late Effects Clinic was initiated at the Princess Margaret Hospital in Toronto to try and expand the range of options available to those suffering from complications of radiation therapy. Dr. Levin and Dr. Evans were co-founders of this service. That clinic has helped &gt; 1000 patients to date. This experience has enabled the provision of a range of therapeutic options to meet the needs of this population.
              </p>

              <p className="text-lg text-gray-600">
                In 2016, <Link href="https://drwayneevans.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">Dr. Wayne Evans</Link> established the Radiotherapy Late Effects Clinic as a further expansion of the services available to Ontario residents to assist those who have developed complications of radiotherapy. Please view our expanded therapeutic choices.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
