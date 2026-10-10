const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We talk to the people who will use the system, map how the work is done today, and agree on what needs to change.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "We turn that into a scoped plan and designs you review and approve, shaped around your budget and constraints.",
  },
  {
    step: "03",
    title: "Engineering & Build",
    description:
      "We build the system with security and long-term maintenance in mind, not just launch day.",
  },
  {
    step: "04",
    title: "Deploy & Train",
    description:
      "We install it, connect it to the tools you already use, and train your staff until they can run it themselves.",
  },
  {
    step: "05",
    title: "Support & Evolve",
    description:
      "After launch we fix issues and keep improving the system as your needs change.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-navy relative overflow-hidden">

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
                  <span className="text-xs font-bold text-navy bg-brand rounded-lg px-2.5 py-1">
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
