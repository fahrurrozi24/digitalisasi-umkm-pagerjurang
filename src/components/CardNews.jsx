function CardNews({ judul, tanggal }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>{judul}</h3>

      <small>{tanggal}</small>
    </div>
  );
}

export default CardNews;