
function FavoriteCard({title, description,categoria}) {
  return (
    <div className="bg-[#D9D9D9] border-rounded rounded ps-7 py-5 mb-4 ">
      
      <div className={categoria}>
        <h2 className="card-title" style={{textTransform: "capitalize"}}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FavoriteCard