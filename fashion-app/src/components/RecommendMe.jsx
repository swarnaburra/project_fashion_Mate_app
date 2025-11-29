import "./RecommendMe.css";

export default function RecommendedMe({ recommendations }) {
  if (
    !recommendations ||
    !recommendations.recommendedImages ||
    recommendations.recommendedImages.length === 0
  ) {
    return null;
  }

  return (
    <div className="recommend-container">
      <h3 className="recommend-title">Recommended Looks</h3>

      <div className="recommend-tiles">
        {recommendations.recommendedImages.map((img, index) => (
          <div className="recommend-tile" key={index}>
            <img src={img} alt={`recommended-${index}`} className="recommend-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
