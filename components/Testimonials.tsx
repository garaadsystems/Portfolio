import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { testimonialsQuery } from '@/sanity/lib/queries'
import Image from 'next/image'

interface Testimonial {
  _id: string
  quote: string
  name: string
  title: string
  org: string
  photo?: {
    asset?: {
      _ref: string
    }
  }
  order: number
}

function getInitial(name: string): string {
  return name.charAt(0).toUpperCase()
}

export default async function Testimonials() {
  const testimonials: Testimonial[] = await client.fetch(testimonialsQuery)

  return (
    <section className="py-24 px-6 bg-[#F7F8FA] border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-[10px] font-bold text-[#0A1628]/40 uppercase tracking-widest block mb-3">
              Client Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              What Our Clients Say
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t: Testimonial) => (
            <div
              key={t._id}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-6 hover:shadow-xl hover:shadow-gray-100 hover:border-gray-200 transition-all duration-300"
            >
              {/* Quote mark */}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="shrink-0">
                <path
                  d="M0 20V12.4C0 5.467 3.6 1.333 10.8 0l1.6 2.4C9.067 3.2 7.2 5.2 6.8 8.8H12V20H0Zm16 0V12.4C16 5.467 19.6 1.333 26.8 0l1.2 2.4c-3.333.8-5.2 2.8-5.6 6.4H28V20H16Z"
                  fill="#8CC220"
                  fillOpacity="0.25"
                />
              </svg>

              <p className="text-gray-700 text-sm leading-relaxed flex-1">{t.quote}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {t.photo ? (
                  <Image
                    src={urlFor(t.photo).width(36).height(36).url()}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#0A1628] flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#8CC220]">{getInitial(t.name)}</span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.title} · {t.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
