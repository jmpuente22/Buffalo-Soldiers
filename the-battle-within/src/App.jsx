import React from "react";
import Section from "./components/Section";
import SoldierCard from "./components/SoldierCard";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="hero-text">
  <h1>Meet the Soldiers</h1>
</div>
<div className="hero"></div>

      <header>
        <h2>The Battle Within:</h2>
        <h2> A Strategy for Success</h2>
      </header>

      <main>
        {/* Personal Soldiers */}
        <Section title="The Army of Self:">
          <h2>Personal Soldiers</h2>
          <div className="soldier-list">
            <SoldierCard
              name="Loyalty"
              description="The steady warrior, Loyalty stands strong in tough times. She protects the people she cares about and stays committed, even when things get hard."
              strengths="Trustworthy and dependable."
              weaknesses="May stay in bad situations too long out of commitment."
              image="/public/loyalty.png"
            />
            <SoldierCard
              name="Empathy"
              description="The healer of the team, Empathy makes sure no one is left behind. She listens, understands, and helps, making her a bridge between problems and solutions."
              strengths="Deep understanding of people’s feelings and needs."
              weaknesses="Can become emotionally drained or taken advantage of."
              image="/public/empathy.png"
            />
            <SoldierCard
              name="Honesty"
              description="The truth teller, Honesty doesn’t sugarcoat things. She believes in being real and fair, making sure everything is clear."
              strengths="Builds trust and respect."
              weaknesses="Can sometimes be too blunt, which may hurt feelings."
              image="/public/honesty.png"
            />
            <SoldierCard
              name="Compassion"
              description="The protector, Compassion looks out for those who are struggling and encourages understanding."
              strengths="Brings people together and encourages growth."
              weaknesses="Can struggle with setting limits, leading to burnout."
              image="/public/compassion.png"
            />
          </div>
        </Section>

        {/* Professional Soldiers */}
        <Section title="The Army of Self:">
          <h2>Professional Soldiers</h2>
          <div className="soldier-list">
            <SoldierCard
              name="Ethics"
              description="The leader, Ethics makes sure all actions are fair and right. He follows the rules and stands for justice."
              strengths="Has a strong sense of right and wrong."
              weaknesses="Can be too strict in situations that require flexibility."
              image="/public/ethics.png"
            />
            <SoldierCard
              name="Soft Skills"
              description="The negotiator, Soft Skills helps smooth out problems and build strong relationships."
              strengths="Helps deal with challenges at work and connect with others."
              weaknesses="Can sometimes avoid confrontation to keep the peace."
              image="/public/softskills.png"
            />
            <SoldierCard
              name="Communication"
              description="The messenger, Communication makes sure everyone is heard and understood."
              strengths="Good at explaining thoughts and making sure people understand each other."
              weaknesses="Can struggle when others refuse to listen."
              image="/public/communication.png"
            />
            <SoldierCard
              name="Reliability"
              description="The backbone, Reliability is always there and follows through on promises."
              strengths="Builds confidence in leadership and teamwork."
              weaknesses="Can be overloaded with responsibilities if not careful."
              image="/public/reliability.png"
            />
          </div>
        </Section>

        {/* War: The Cover-Up Chronicles */}
        <Section title="War: The Cover-Up Chronicles">
          <p>
            The battlefield was set. The old manager ignored rules and fairness. Co-workers whispered behind their backs instead of showing respect. The final straw was when a serious health risk was hidden. 
          </p>
          <p>
            Ethics stepped up, demanding the truth. Communication tried to fix the situation, but dishonesty had already caused too much damage. Empathy and Compassion, though hurt, stood strong to keep things professional. Loyalty had to decide to stay and fight or leave for something better. 
          </p>
          <p>
            The team agreed: walking away to find a better environment was the real victory.
          </p>
        </Section>

        {/* The Peace: Serenity Passage */}
        <Section title="The Peace: Serenity Passage">
          <p>
            A fresh start. A new leader, a new team. Loyalty thrived in a place that deserved her. Empathy and Compassion finally felt valued. Communication was heard. Ethics stood tall, knowing fairness was the norm.
          </p>
          <p>
            This time, they didn’t just settle in—they acted. Loyalty built deeper connections, ensuring trust. Empathy and Compassion fostered a culture of support. Communication led training sessions to improve teamwork. Ethics helped establish policies preventing past mistakes.
          </p>
          <p>
            The new leadership brought mentorship programs, career growth, and leadership opportunities. The team wasn’t just surviving—they were thriving.
          </p>
        </Section>

        {/* The Formation: Soldiers in Action */}
        <Section title="The Formation: Soldiers in Action">
          <ul>
            <li><strong>During Hard Times (War):</strong> Ethics and Honesty lead, Communication clarifies, Soft Skills calms, Empathy and Compassion support, and Reliability stands firm.</li>
            <li><strong>During Success (Peace):</strong> Communication and Soft Skills build bonds, Ethics and Loyalty uphold honesty, Compassion and Empathy lift the team, and Reliability keeps things moving.</li>
            <li><strong>Armor and Weaknesses:</strong> Ethics and Honesty need Soft Skills to avoid rigidity. Empathy and Compassion need limits to prevent burnout. Communication needs patience with resistance.</li>
          </ul>
        </Section>

        {/* The Conclusion: The Strategy for Future Battles */}
        <Section title="The Conclusion: The Strategy for Future Battles">
          <p>
            Through ups and downs, this team has learned to work together. Some battles aren’t worth fighting—sometimes, leaving is the real win. The goal isn’t just survival but growth, respect, and better opportunities.
          </p>
          <p>
            The future is clear: stand strong, be honest, lead with fairness, and create an environment where success is possible.
          </p>
          <p>
            This team is ready. The next challenge won’t break them—it’ll make them stronger.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
