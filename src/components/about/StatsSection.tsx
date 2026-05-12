const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "50+", label: "Countries Served" },
  { number: "1000+", label: "Projects Delivered" },
  { number: "4+", label: "Years of Innovation" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Admatrix in Numbers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/20">
              <div className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-4">
                {stat.number}
              </div>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}