function Statistic() {
  const data = [
    {
      title: "UMKM",
      value: "25+",
    },
    {
      title: "Penduduk",
      value: "450 Jiwa",
    },
    {
      title: "Wisata",
      value: "5",
    },
    {
      title: "Berita",
      value: "20+",
    },
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {data.map((item) => (
        <div
          key={item.title}
          style={{
            background: "#2E7D32",
            color: "white",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h1>{item.value}</h1>
          <h3>{item.title}</h3>
        </div>
      ))}
    </section>
  );
}

export default Statistic;