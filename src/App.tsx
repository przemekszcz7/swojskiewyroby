/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Facebook, Mail, MapPin, Phone, Clock, Quote, ExternalLink, ChevronRight } from 'lucide-react';
import { IMAGES, CONTACT, OPENING_HOURS, PRODUCTS, SVGS } from './constants';

const SmokeWisp = ({ delay = 0, left = '50%' }: { delay?: number; left?: string }) => (
  <div 
    className="smoke-wisp absolute bottom-0 opacity-0 pointer-events-none"
    style={{ left, animationDelay: `${delay}s` }}
  >
    <svg width="40" height="120" viewBox="0 0 40 120" fill="none">
      <path 
        d="M20 120C20 100 10 90 10 70C10 50 30 50 30 30C30 10 20 0 20 0" 
        stroke="white" 
        strokeWidth="0.5" 
        strokeDasharray="2 4"
      />
    </svg>
  </div>
);

const SectionDivider = () => (
  <div className="w-full flex justify-center py-12 px-4">
    <div className="h-px bg-amber/20 w-full max-w-sm relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg px-4">
        <SVGS.Wheat />
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-amber-light/30">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-amber/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <img src={IMAGES.logo} alt="Logo" className="w-10 h-10 rounded-full object-cover border border-amber" />
             <span className="font-display font-semibold text-lg text-brown-deep md:block hidden">Swojskie Wyroby</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#produkty" className="font-mono text-xs uppercase tracking-widest hover:text-amber transition-colors">Produkty</a>
            <a href="#lokalizacja" className="font-mono text-xs uppercase tracking-widest hover:text-amber transition-colors">Kontakt</a>
            <a 
              href={CONTACT.facebook} 
              target="_blank" 
              rel="no-referrer"
              className="bg-brown text-white p-2 rounded-full hover:bg-amber transition-all duration-300 shadow-md"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Wędliny" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/40 to-bg-darker"></div>
        </div>
        
        {/* Smoke Effects */}
        <SmokeWisp delay={0} left="20%" />
        <SmokeWisp delay={2} left="40%" />
        <SmokeWisp delay={1} left="60%" />
        <SmokeWisp delay={3} left="80%" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label text-amber-light">— TRADYCJA OD POKOLEŃ</span>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-6 font-display leading-[1.1] tracking-tighter">
              Swojskie <span className="italic text-amber-light">Wyroby</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
              Rzemieślnicze wędliny tradycyjnie wędzone drewnem olchowo-owocowym. 
              Odkryj smak prawdziwej wsi w Chwaszczynie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#produkty" 
                className="bg-amber text-white px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-amber-light transition-colors shadow-lg w-full sm:w-auto"
              >
                Zobacz ofertę
              </a>
              <a 
                href="#lokalizacja" 
                className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Gdzie nas znajdziesz
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-white mx-auto"></div>
        </div>
      </section>

      {/* PHILOSOPHY / METHOD */}
      <section className="bg-bg py-24 px-6 linen-texture relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 opacity-5 hidden lg:block">
              <SVGS.Pig />
            </div>
            <img 
              src={IMAGES.gallery1} 
              alt="Wędzarnia" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5] md:aspect-[3/4]"
            />
            <div className="absolute -bottom-6 -right-6 z-20">
              <div className="stamp-seal bg-white/90 backdrop-blur-sm">
                TRADYCYJNA RECEPTURA
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="section-label">— NASZA METODA</span>
              <h2 className="text-4xl md:text-5xl mb-6">Wędzimy drewnem <span className="italic text-brown">olchowo-owocowym</span></h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Nasze wyroby to nie tylko jedzenie, to pasja i szacunek do tradycji. Każda szynka, każdy schab dojrzewa w swoim rytmie, by trafić do naszej wędzarni, gdzie dym z selekcjonowanego drewna olchy i drzew owocowych nadaje im niepowtarzalny aromat i złocisty kolor.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="bg-bg-section/50 p-6 rounded-xl border border-amber/10">
                <h4 className="font-mono text-xs uppercase font-bold text-amber mb-2">Prawdziwy Dym</h4>
                <p className="text-sm">Zero chemii, tylko natura.</p>
              </div>
              <div className="bg-bg-section/50 p-6 rounded-xl border border-amber/10">
                <h4 className="font-mono text-xs uppercase font-bold text-amber mb-2">Lokalizacja</h4>
                <p className="text-sm">Chwaszczyno, ul. Węglowa 2.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="produkty" className="bg-bg-dark py-24 px-6 text-white wood-texture relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label text-amber-light">— NASZE SPECJAŁY</span>
            <h2 className="text-4xl md:text-5xl text-white">Co przygotowaliśmy w tym <span className="italic text-amber-light">tygodniu?</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-bg-darker/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-amber/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center mb-6 text-amber group-hover:bg-amber group-hover:text-white transition-all">
                  <SVGS.Wheat />
                </div>
                <h3 className="text-white text-xl mb-4 font-display">{category.title}</h3>
                <ul className="space-y-3 font-mono text-xs text-white/60 tracking-wider">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <ChevronRight size={12} className="text-amber" />
                       {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* REVIEWS MOCKUP / FB LINK */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <span className="section-label">— OPINIE NASZYCH GOŚCI</span>
           <h2 className="text-4xl md:text-5xl mb-12">Smak, który łączy <span className="italic text-brown">pokolenia</span></h2>
           
           <div className="bg-bg-section p-10 rounded-2xl relative shadow-inner">
             <Quote className="text-amber/20 w-16 h-16 absolute -top-4 -left-4" />
             <p className="text-2xl font-body italic text-brown-deep mb-6 leading-relaxed">
               "MATKO BOSKA JAKIE TO JEST PYSZNE! Genialne produkty super mili właściciele. Widać, ze wszystko robione od serca. Będę wracał na pewno 😉"
             </p>
             <div className="font-mono text-sm uppercase tracking-widest text-amber">
               Zadowolony Klient z Facebooka
             </div>
             
             <div className="mt-10 flex justify-center">
               <a 
                 href={CONTACT.reviews}
                 target="_blank"
                 rel="no-referrer"
                 className="flex items-center gap-2 text-brown hover:text-amber transition-colors font-mono text-xs uppercase font-bold"
               >
                 Przeczytaj wszystkie opinie na Facebooku <ExternalLink size={14} />
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 bg-bg overflow-hidden border-y border-amber/5">
        <div className="animate-scroll">
          {[IMAGES.hero, IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.hero, IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3].map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i}`} className="h-64 md:h-96 rounded-xl object-cover aspect-[4/3] mx-2 shadow-sm" />
          ))}
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="lokalizacja" className="bg-bg-section py-24 px-6 linen-texture">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">— ZAPRASZAMY DO NAS</span>
              <h2 className="text-4xl md:text-5xl mb-8">Odwiedź naszą <span className="italic text-brown">pracownię</span></h2>
              
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/10 p-3 rounded-lg text-brown">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase font-bold text-amber mb-1">Adres</h4>
                      <p className="text-text-muted">{CONTACT.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/10 p-3 rounded-lg text-brown">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase font-bold text-amber mb-1">Telefon</h4>
                      <p className="text-text-muted">{CONTACT.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/10 p-3 rounded-lg text-brown">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase font-bold text-amber mb-1">Email</h4>
                      <p className="text-text-muted">{CONTACT.email}</p>
                    </div>
                  </div>
                </div>

                <div className="rustic-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="text-amber" size={24} />
                    <h3 className="text-2xl">Godziny Otwarcia</h3>
                  </div>
                  <div className="space-y-3">
                    {OPENING_HOURS.map((oh, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-amber/10 pb-2 last:border-0">
                        <span className="font-body text-text-muted">{oh.day}</span>
                        <span className={`font-mono text-xs tracking-tighter ${oh.hours === 'ZAMKNIĘTE' ? 'text-red/60 font-bold' : 'text-brown'}`}>
                          {oh.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2320.0666382184068!2d18.41370357720462!3d54.44411049202256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda1fac84a4999%3A0xa2d10fad17309cb2!2sW%C4%99glowa%202%2C%2080-209%20Chwaszczyno!5e0!3m2!1spl!2spl!4v1778829573971!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg-darker text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <SVGS.Wheat />
        </div>
        <div className="absolute bottom-0 left-0 p-8 opacity-10 -rotate-12">
            <SVGS.Wheat />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={IMAGES.logo} alt="Logo" className="w-12 h-12 rounded-full border border-amber/30" />
                <h2 className="text-white text-3xl">Swojskie Wyroby</h2>
              </div>
              <p className="text-white/40 font-body max-w-sm mb-6 leading-relaxed">
                Tradycyjna wędzarnia w Chwaszczynie. U nas znajdziesz wędliny przygotowane z sercem, wędzone dymem z naturalnego drewna.
              </p>
              <div className="flex gap-4">
                <a href={CONTACT.facebook} target="_blank" rel="no-referrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-amber mb-6">Menu</h4>
              <ul className="space-y-4 text-white/60 font-body">
                <li><a href="#" className="hover:text-white transition-colors">Strona Główna</a></li>
                <li><a href="#produkty" className="hover:text-white transition-colors">Nasze Produkty</a></li>
                <li><a href="#lokalizacja" className="hover:text-white transition-colors">Dojazd i Godziny</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-amber mb-6">Kontakt</h4>
              <ul className="space-y-4 text-white/60 font-body text-sm">
                <li className="flex items-center gap-3"><MapPin size={16} /> Chwaszczyno, ul. Węglowa 2</li>
                <li className="flex items-center gap-3"><Phone size={16} /> {CONTACT.phone}</li>
                <li className="flex items-center gap-3"><Mail size={16} /> {CONTACT.email}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex justify-center items-center gap-6 text-white/20 font-mono text-[10px] uppercase tracking-widest">
            <div>© {new Date().getFullYear()} Swojskie Wyroby. Wszystkie prawa zastrzeżone.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
