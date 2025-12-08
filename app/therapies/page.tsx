import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
                In 2000, when <Link href="https://drwayneevans.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">Dr. Wayne Evans</Link> and colleagues began exploring radiation therapy complications in Toronto, the most often used therapy to manage late effects was hyperbaric oxygen therapy owing to its long history as a tool to utilize in avoiding surgical misadventure when a surgical procedure was needed in "high risk tissue", that is, tissue which had been previously irradiated.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Nature of the Injury</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Microscopic changes are seen in previously irradiated tissue, which include a reduction of blood supply to the tissues along with reduced cell count. As such the vascular density is reduced and the tissues may be starved for oxygen and nutrients. Thus, a state of chronic hypoxia develops in a setting of insufficient repair cells to manage wear and tear at the cellular level.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In addition, there exists in radiation damaged tissue a chronic state of inflammation which slowly debilitates the tissue. This is known as fibroatrophic remodeling or degeneration.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">A. Hyperbaric Oxygen Therapy</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The use of oxygen under pressure in rehabilitation of radiotherapy damaged tissue dates to the 1970's and the science was advanced in the 1980s and 1990s most notably by the voluminous work of Dr. Robert Marx, a US army oral surgeon who was able to develop well defined strategies for managing radiotherapy injury to the jaw. The use of hyperbaric oxygen therapy has been more widely applied since that time and of late the most success has been found in abdominal and pelvic problems affecting the gastrointestinal and urinary systems. Dr. Evans & colleagues published a small series of cases on this in 2006 prior to a large randomized trial on radiation proctitis in 2008 which demonstrated a strong outcome advantage with the use of hyperbaric oxygen therapy.
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

        <Footer />
      </main>
    </>
  );
}
