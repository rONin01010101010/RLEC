'use client';

import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function ReferencesContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref') || '1';

  const references = {
    '1': {
      title: 'Hyperbaric Medicine (Reference 1)',
      studies: [
        'Radiation-induced cystitis treated with hyperbaric oxygen therapy (RICH-ART): a randomised, controlled, phase 2-3 trial',
        'Hyperbaric Oxygen for Radiation Necrosis of the Brain',
        'Osteoradionecrosis: A New Concept of Its Pathophysiology',
        'Treatment of Radiation Proctitis With Hyperbaric Oxygen',
        'Hyperbaric Oxygen Treatment of Chronic Refractory Radiation Proctitis: A Randomized and Controlled Double-Blind Crossover Trial With Long-Term Follow-Up'
      ]
    },
    '2': {
      title: 'Pentoclo (Reference 2)',
      studies: [
        'The Radiation-Induced Fibroatrophic Process: Therapeutic Perspective via the Antioxidant Pathway'
      ]
    },
    '3': {
      title: 'Dietary Measures (Reference 3)',
      studies: [
        'Anti-inflammatory Diet and 10-year (2002-2012) Cardiovascular Disease Incidence: The ATTICA Study'
      ]
    }
  };

  const currentRef = references[ref as keyof typeof references] || references['1'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-warm via-white to-secondary-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/therapies"
            className="inline-flex items-center text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-lg mb-6 transition-all transform hover:scale-105 shadow-md font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Therapies
          </Link>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 md:p-12 mb-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold">
              {currentRef.title}
            </h1>
          </div>

          <div className="space-y-6">
            {currentRef.studies.map((study, index) => (
              <div
                key={index}
                className="border-l-4 border-primary bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <span className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-lg font-serif text-gray-900 leading-relaxed">
                    {study}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation between references */}
          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <Link
              href="/references?ref=1"
              className={`py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg font-semibold ${
                ref === '1'
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border-2 border-primary-100'
              }`}
            >
              Reference 1
            </Link>
            <Link
              href="/references?ref=2"
              className={`py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg font-semibold ${
                ref === '2'
                  ? 'bg-gradient-to-r from-secondary to-secondary-light text-white'
                  : 'bg-white text-gray-700 hover:bg-secondary-50 border-2 border-secondary-100'
              }`}
            >
              Reference 2
            </Link>
            <Link
              href="/references?ref=3"
              className={`py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg font-semibold ${
                ref === '3'
                  ? 'bg-gradient-to-r from-accent-mint to-accent-lime text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border-2 border-primary-100'
              }`}
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
            &copy; {new Date().getFullYear()} Radiotherapy Late Effects Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default function References() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-600">Loading...</div>
        </div>
      }>
        <ReferencesContent />
      </Suspense>
    </>
  );
}
