import React from "react";

import Image from "next/image";
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import Button from "./components/Button";

export default function HomePage() {
  return (
    <main className="bg-neutral-900 text-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-16">
      {/* Section 1: Logo and Intro */}
      <section className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src="/logo.jpg"
            alt="Renaissance Technologist Logo"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-heading sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-3 sm:mb-4">
          Renaissance Technologist
        </h1>
        <p className="text-yellow-500 text-lg font-sans sm:text-xl md:text-2xl mb-4 sm:mb-6">
          Master the Mind. Strengthen the Body. Guard the Digital Realm.
        </p>
        <p className="text-base font-sans sm:text-lg md:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
          This platform explores the evolution of the Renaissance man archetype for the modern age—where intellectual
          freedom, physical resilience, and digital sovereignty intersect.
        </p>
        <Button className="bg-yellow-500 font-sans hover:bg-yellow-400 text-neutral-900 font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 mt-6 sm:mt-8">
          Explore More
        </Button>
      </section>

      {/* Section 2: Connecting the Pillars */}
      <section className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl font-heading sm:text-3xl md:text-4xl tracking-wide mb-4 text-purple-500">
          Master the Three Pillars of Holistic Sovereignty
        </h2>
        <p className="text-gray-400 text-base font-sans sm:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-8">
          To live as a Renaissance Technologist, one must master the Mind, Body, and Digital Realm. These three pillars work
          together to create true intellectual, physical, and digital sovereignty.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Mind Pillar */}
          <div className="bg-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-yellow-500">🧠</span>
            </div>
            <h3 className="text-xl font-heading sm:text-2xl font-semibold text-yellow-500 mb-3">
              The Mental Realm: <br />Trivium & Natural Law
            </h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Mastery of logic, grammar, and rhetoric empowers the mind to discern truth and communicate effectively.
              Guided by principles of Natural Law, these skills foster intellectual freedom and alignment with universal
              truths.
            </p>
          </div>

          {/* Body Pillar */}
          <div className="bg-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-green-500">💪</span>
            </div>
            <h3 className="text-xl font-heading sm:text-2xl font-semibold text-green-500 mb-3">
              The Physical Realm: <br />Fitness & Resilience
            </h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Physical resilience is the foundation for intellectual and digital mastery. Discipline through physical
              practices—such as high-rep burpees, boxing, and swimming—sharpens mental clarity and strengthens the body.
            </p>
          </div>

          {/* Digital Realm Pillar */}
          <div className="bg-neutral-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <span className="text-4xl text-blue-500">💻</span>
            </div>
            <h3 className="text-xl font-heading sm:text-2xl font-semibold text-blue-500 mb-3">
              The Digital Realm: <br />Cybersecurity & Sovereignty
            </h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Protecting digital spaces is essential for preserving intellectual freedom in an interconnected world. Learn
              how safeguarding systems and data ensures sovereignty and supports truth-seeking and ethical action in the
              digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="text-center mt-12 sm:mt-16">
        <h2 className="text-2xl font-heading sm:text-3xl md:text-4xl tracking-wide mb-3 sm:mb-4 text-purple-500">
          Join the Renaissance Movement
        </h2>
        <p className="text-gray-400 font-sans text-base sm:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
          Become part of a community dedicated to mastering the mind through the Trivium, strengthening the body through
          discipline, and guarding the digital realm for intellectual freedom. Share your journey, collaborate on projects,
          and live with purpose in an age where sovereignty is power.
        </p>
        <Button className="bg-purple-500 font-sans hover:bg-purple-400 text-neutral-900 font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 mt-6 sm:mt-8">
          Join Us
        </Button>
      </section>
    </main>
  );
}
