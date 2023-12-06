
function FavoriteCard({img, title, description}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-5 my-5">
      <figure>
        <img
          src={img}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FavoriteCard