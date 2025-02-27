import React from 'react';
import PillarCard from '../components/PillarCard';



// Three Pillars Page Component
const ThreePillarsPage = () => {
  return (
    <div className="bg-neutral-900 text-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-16">
      {/* Title */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-heading sm:text-5xl tracking-wide text-yellow-500">
          The Three Pillars of a Renaissance Technologist
        </h1>
        <p className="mt-4 text-lg font-sans sm:text-xl text-gray-400 max-w-3xl mx-auto">
          A well-rounded individual embodies the strength of the mind 🧠, body 💪, and digital realm 💻. These pillars create balance, resilience, and sovereignty.
        </p>
      </header>

      {/* Pillars Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mind Pillar */}
        <PillarCard
          title="Mind: Trivium & Natural Law"
          description="Mastering the Trivium (Grammar, Logic, and Rhetoric) sharpens the mind. Applying Natural Law guides us in making ethical decisions in an ever-evolving world."
          imgSrc="/images/mind.jpg"
          link="/mind"
          emoji="🧠"
        />

        {/* Body Pillar */}
        <PillarCard
          title="Body: Physical Conditioning"
          description="A strong body supports a resilient mind. Through disciplined physical practice—such as high-rep burpees, boxing, and swimming—we cultivate mental clarity, stamina, and focus."
          imgSrc="/images/body.jpg"
          link="/body"
          emoji="💪"
        />

        {/* Digital Realm Pillar */}
        <PillarCard
          title="Digital Realm: Cybersecurity & Freedom"
          description="In the age of technology, protecting our digital freedom is paramount. Cybersecurity professionals defend our sovereignty in an increasingly interconnected world."
          imgSrc="/images/digital-realm.jpg"
          link="/digital-realm"
          emoji="💻"
        />
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-heading tracking-wide text-purple-500 mb-4">
          Join the Renaissance Technologist Movement
        </h2>
        <p className="text-lg text-gray-400 font-sans mb-6 max-w-2xl mx-auto">
          Become part of a community that integrates mind 🧠, body 💪, and digital sovereignty 💻. Together, we can elevate our collective potential.
        </p>
        <a href="/community" className="bg-purple-500 hover:bg-purple-400 text-neutral-900 font-semibold font-sans py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1">
          Join Now
        </a>
      </div>
    </div>
  );
};

export default ThreePillarsPage;
