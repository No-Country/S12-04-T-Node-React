function FavoriteCard({ title, recipe, category }) {
  return (
    <div className="bg-[#D9D9D9] border-rounded rounded ps-7 py-5 mb-4">
      <div>
        <h2 className="card-title" style={{ textTransform: "capitalize" }}>
          {title}
        </h2>
        <h2>{category}</h2>
        <p>{recipe}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;
