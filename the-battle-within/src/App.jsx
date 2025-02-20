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
          <h2>Personal Soldiers</h2>
          <div className="soldier-list">
            <SoldierCard
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
          </div>
        </Section>

        <Section title="The Army of Self:">
        <h2>Professional Soldiers</h2>
          <div className="soldier-list">
            <SoldierCard
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
      </main>

      <Footer />
    </div>
  );
};

export default App;
