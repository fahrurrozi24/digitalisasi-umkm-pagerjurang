function CardUMKM({ nama, kategori }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <img
        src="https://placehold.co/400x250"
        alt={nama}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "20px",
        }}
      >
        <h3>{nama}</h3>

        <p>{kategori}</p>
      </div>
    </div>
  );
}

export default CardUMKM;