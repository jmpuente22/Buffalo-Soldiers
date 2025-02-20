const SoldierCard = ({ title, name, description, strengths, weaknesses }) => {
  return (
    <div className="soldier-card">
      {title && <h3>{title}</h3>}
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{strengths}</p>
      <p>{weaknesses}</p>
    </div>
  );
};

export default SoldierCard;
