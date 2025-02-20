import React from "react";
import Section from "./components/Section";
import SoldierCard from "./components/SoldierCard";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>The Battle Within:</h1>
        <h1> A Strategy for Success</h1>
      </header>

      <main>
        <Section title="The Army of Self:">
          <h2>Personal & Professional Soldiers</h2>
          <div className="soldier-list">
            {/* Personal Soldiers */}
            <SoldierCard
              title="Personal Soldiers"
              name="Loyalty"
              description="The steady warrior, Loyalty stands strong in tough times. She protects the people she cares about and stays committed, even when things get hard."
              strengths="Strengths: Trustworthy and dependable."
              weaknesses="Weaknesses: May stay in bad situations too long out of commitment."
            />
            <SoldierCard
              name="Empathy"
              description="The healer of the team, Empathy makes sure no one is left behind. She listens, understands, and helps, making her a bridge between problems and solutions."
              strengths="Strengths: Deep understanding of people’s feelings and needs."
              weaknesses="Weaknesses: Can become emotionally drained or taken advantage of."
            />
            <SoldierCard
              name="Honesty"
              description="The truth teller, Honesty doesn’t sugarcoat things. She believes in being real and fair, making sure everything is clear."
              strengths="Strengths: Builds trust and respect."
              weaknesses="Weaknesses: Can sometimes be too blunt, which may hurt feelings."
            />
            <SoldierCard
              name="Compassion"
              description="The protector, Compassion looks out for those who are struggling and encourages understanding."
              strengths="Strengths: Brings people together and encourages growth."
              weaknesses="Weaknesses: Can struggle with setting limits, leading to burnout."
            />

            {/* Professional Soldiers */}
            <SoldierCard
              title="Professional Soldiers"
              name="Ethics"
              description="The leader, Ethics makes sure all actions are fair and right. He follows the rules and stands for justice."
              strengths="Strengths: Has a strong sense of right and wrong."
              weaknesses="Weaknesses: Can be too strict in situations that require flexibility."
            />
            <SoldierCard
              name="Soft Skills"
              description="The negotiator, Soft Skills helps smooth out problems and build strong relationships."
              strengths="Strengths: Helps deal with challenges at work and connect with others."
              weaknesses="Weaknesses: Can sometimes avoid confrontation to keep the peace."
            />
            <SoldierCard
              name="Communication"
              description="The messenger, Communication makes sure everyone is heard and understood."
              strengths="Strengths: Good at explaining thoughts and making sure people understand each other."
              weaknesses="Weaknesses: Can struggle when others refuse to listen."
            />
            <SoldierCard
              name="Reliability"
              description="The backbone, Reliability is always there and follows through on promises."
              strengths="Strengths: Builds confidence in leadership and teamwork."
              weaknesses="Weaknesses: Can be overloaded with responsibilities if not careful."
            />
          </div>
        </Section>

        <Section title="The War: The Cover-Up Chronicles">
          <p>
            The battlefield was set. The old manager ignored rules and fairness.
            Co-workers whispered behind backs instead of showing respect. The
            final straw was when a serious health risk was hidden. Ethics
            stepped up, demanding the truth. Communication tried to fix the
            situation, but dishonesty had already caused too much damage.
            Empathy and Compassion, though hurt, stood strong to keep things
            professional. Loyalty had to decide stay and fight or leave for
            something better? The team agreed: walking away to find a better
            environment was the real victory.
          </p>
        </Section>

        <Section title="The Peace: Serenity Passage">
          <p>
            A fresh start. A new leader, a new team. Loyalty thrived in a place
            that deserved her. Empathy and Compassion finally felt valued.
            Communication was heard. Ethics stood tall, knowing fairness was the
            norm. The team worked together, proving what the last workplace
            missed out on. This wasn’t just a win it was proof of resilience.
          </p>
        </Section>

        <Section title="The Formation: Soldiers in Action">
          <p>
            During Hard Times (War): Ethics and Honesty lead the way, making
            sure things are right. Communication makes sure the message is
            clear, while Soft Skills helps keep things calm. Empathy and
            Compassion offer support, and Reliability stays strong no matter
            what.
          </p>

          <p>
            During Success (Peace): Communication and Soft Skills build strong
            bonds. Ethics and Loyalty keep things honest. Compassion and Empathy
            lift up the team. Reliability keeps things moving forward.
          </p>

          <p>
            Armor and Weaknesses: Ethics and Honesty need support from Soft
            Skills to avoid coming off too strong. Empathy and Compassion need
            protection from burnout by setting limits. Communication needs
            patience when dealing with resistance.
          </p>
        </Section>

        <Section title="The Conclusion: The Strategy for Future Battles">
          <p>
            Through ups and downs, this team has learned how to work together.
            Some battles aren’t worth fighting ometimes, leaving is the real
            win. The goal isn’t just to survive but to grow, earn respect, and
            create better opportunities. The future is clear: stand strong, be
            honest, lead with fairness, and build a space where success is
            possible. This team is ready. The next challenge won’t break
            them,it’ll make them even stronger.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
