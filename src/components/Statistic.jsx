import "./Statistic.css";

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
    <section className="statistic">
      {data.map((item) => (
        <div className="stat-card" key={item.title}>
          <h1>{item.value}</h1>
          <h3>{item.title}</h3>
        </div>
      ))}
    </section>
  );
}

export default Statistic;