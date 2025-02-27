import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CardContent from "../components/CardContent";

const AboutPage = () => {
    return (
      <main className="bg-neutral-900 text-gray-100 min-h-screen p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col items-center justify-center">
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl font-heading sm:text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6 sm:mb-8 text-yellow-500">
            About Renaissance Technologist
          </h1>
          <p className="text-base font-sans sm:text-lg md:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-gray-300">
            Welcome to <strong>Renaissance Technologist</strong>—a space where we explore the fusion of timeless wisdom
            with modern expertise. Here, we believe that the path to true sovereignty—intellectual, physical, and digital—
            can be forged through a disciplined, holistic approach.
          </p>
        </section>
  
        <section className="mb-12 sm:mb-16">
          <Card className="bg-neutral-800 rounded-2xl shadow-lg mb-8 max-w-4xl mx-auto">
            <CardContent>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading tracking-wide mb-4 text-yellow-500">
                My Journey: From Career Change to Cybersecurity and Personal Reinvention
              </h2>
              <p className="text-base font-sans sm:text-lg md:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-gray-300">
              I’m Charlie, and like many of you, I’m on a path of reinvention. My life has been defined by a relentless pursuit of truth. What began as childhood curiosity evolved into adolescent rebellion and eventually transformed into a defiant yet misguided adulthood.

It wasn’t until I recognized the framework of the hero’s journey—and committed to physical, intellectual, and spiritual discipline—that the essential building blocks of manhood began falling into place. My search for deeper purpose and understanding led me down a challenging inward path.

I wasn’t just seeking technical skills; I wanted to fuse my passion for personal growth, physical resilience, and freedom with the practical tools required to navigate today’s increasingly complex digital landscape.
              </p>
            </CardContent>
          </Card>
        </section>
  
        <section className="bg-neutral-800 rounded-2xl shadow-lg p-6 mb-12 sm:mb-16 mx-auto max-w-4xl">
          <h2 className="text-2xl font-heading sm:text-3xl font-semibold mb-4 text-yellow-500">
            The Core Philosophy: A Balanced Life of Truth and Freedom
          </h2>
          <p className="text-base font-sans sm:text-lg md:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-gray-300">
            In my journey, I’ve discovered that intellectual clarity, moral integrity, and physical resilience are key to
            thriving in the modern world. That’s why <strong>Renaissance Technologist</strong> is built on the idea of
            cultivating the <strong>renaissance man archetype</strong>—an individual who balances intellectual mastery, physical
            rigor, and digital sovereignty. This holistic approach draws on the three core pillars:
          </p>
  
          <ul className="font-sans mt-6 space-y-4 text-gray-300">
            <li>
              <strong className="text-yellow-500">The Trivium</strong>: Grammar, Logic, and Rhetoric—These tools of knowledge,
              understanding, and communication are essential for navigating the modern world.
            </li>
            <li>
              <strong className="text-yellow-500">Natural Law</strong>: Understanding the objective principles that govern human
              freedom and behavior, especially in a digital age.
            </li>
            <li>
              <strong className="text-yellow-500">Physical Conditioning</strong>: Self-discipline in fitness cultivates the resilience
              needed for both intellectual and moral strength.
            </li>
          </ul>
        </section>
  
        <section className="mb-12 sm:mb-16">
          <Card className="bg-neutral-800 rounded-2xl shadow-lg mx-auto mb-8 max-w-4xl">
            <CardContent>
              <h2 className="text-2xl font-heading sm:text-3xl md:text-4xl tracking-wide mb-4 text-yellow-500">
                A Journey Toward Digital Sovereignty
              </h2>
              <p className="text-base font-sans sm:text-lg md:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-gray-300">
                As I transition deeper into cybersecurity, I see the need for a movement that empowers individuals with the
                knowledge and tools to safeguard their own digital freedoms. It's not enough to simply know how to defend against
                cyberattacks; we must also understand the ethical implications of the technology we create and use.
              </p>
            </CardContent>
          </Card>
        </section>
  
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-heading sm:text-3xl md:text-4xl tracking-wide mb-4 text-yellow-500">
            What’s Next? Join the Movement
          </h2>
          <p className="text-base font-sans sm:text-lg md:text-xl leading-relaxed max-w-2xl sm:max-w-3xl mx-auto text-gray-300">
            As I continue my own journey of reinvention, I invite you to join me. Whether you’re a career changer, a lifelong
            learner, or someone who wants to take control of their digital life, <strong>Renaissance Technologist</strong> is here to
            guide and support you.
          </p>
          <Button className="bg-yellow-500 font-sans hover:bg-yellow-400 text-neutral-900 font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 mt-6 sm:mt-8">
            Join the Movement
          </Button>
        </section>
      </main>
    );
  };
  
  export default AboutPage;
