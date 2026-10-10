const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by deeply understanding your institution's needs, challenges, and goals through stakeholder interviews and research.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "We craft a clear transformation roadmap and design digital solutions aligned with your operational context and constraints.",
  },
  {
    step: "03",
    title: "Engineering & Build",
    description:
      "Our engineers build robust, secure, and scalable systems using modern technology best practices and proven frameworks.",
  },
  {
    step: "04",
    title: "Deploy & Train",
    description:
      "We deploy, integrate, and train your teams to adopt and confidently maintain the new digital systems.",
  },
  {
    step: "05",
    title: "Support & Evolve",
    description:
      "We provide ongoing support and continuously improve systems based on real-world usage and evolving institutional needs.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-[#0A1628] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-white/35 uppercase tracking-widest mb-3 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Delivery Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div key={step.step} className="group">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-[#0A1628] bg-[#8CC220] rounded-lg px-2.5 py-1">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2.5">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
