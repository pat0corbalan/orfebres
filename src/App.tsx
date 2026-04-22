/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Menu, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat,
  ArrowRight
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <button id="menu-toggle" className="text-white hover:text-brand-orange transition-colors">
          <Menu size={24} />
        </button>
        <span className="text-2x1 tracking-widest font-black  font-sankofa uppercase">Orfebres</span>
      </div>
      
      <div className="hidden md:flex gap-12">
        <a href="#about" className="text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-[0.2em] text-xs font-medium">EL MITO</a>
        <a href="#music" className="text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-[0.2em] text-xs font-medium">FORJA</a>
        <a href="#shows" className="text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-[0.2em] text-xs font-medium">GIRA</a>
      </div>

      <button id="cta-listen" className="px-6 py-2 border border-zinc-700 hover:border-brand-orange transition-all font-mono uppercase tracking-[0.2em] text-[10px] text-white">
        LISTEN NOW
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-surface-black" />
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxZvf2s_3oX-itMuCl4l4QMLqCVFG9wx99Xmm-ViKBY9Yw_qu4JhcomKpuT2T-cs0U8hAoBYK0137rSCwjtbxIbE1JvFs9n45gNt9r8I2W3FLM258fofkAmCLLSUKAR_IRg3M41SZ0FTYdwrjpadFIdKqZEJM9BjtbWjtOpa0UbeEuxNqxFeSbvlJrL2mSyEt-aC_A77DhaJKm7H7kkzGcfigX9Ov3tUWdS0ARzChAXtAnaDCiUyTEDTyFxQRSo3D-Epjz85SFJNSt" 
        alt="Molten metal forge"
        className="w-full h-full object-cover opacity-50 mix-blend-luminosity grayscale"
      />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-10 text-center px-6"
    >
      <p className="font-mono text-[10px] tracking-[0.5em] text-zinc-500 mb-6 uppercase">FUNDIENDO EL ALMA URBANA</p>
      <h1 className="text-7xl md:text-9xl font-sankofa mb-4 tracking-widest">ORFEBRES</h1>
      <p className="text-lg md:text-xl text-zinc-400 italic max-w-xl mx-auto font-light">"Forjando rock desde las entrañas."</p>
      
      <div className="mt-12">
        <button id="hero-action" className="px-10 py-5 border border-white/20 text-white font-mono text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-xl">
          REPRODUCIR ÚLTIMO SINGLE
        </button>
      </div>
    </motion.div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-12 opacity-30"
    >
      <ChevronLeft size={32} className="-rotate-90" />
    </motion.div>
  </header>
);

const About = () => (
  <section id="about" className="py-32 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7"
      >
        <span className="font-mono text-xs text-brand-orange mb-8 block tracking-widest uppercase">NUESTRA ESENCIA</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Poesía forjada en el asfalto de Santiago del Estero.</h2>
        <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
          <p>Orfebres no es solo una banda; es un taller donde el silencio se golpea hasta que grita. Nacidos de la herencia del rock nacional, buscamos la pureza en la distorsión y la elegancia en lo crudo.</p>
          <p>Cada riff es un martillazo. Cada verso, una chispa que desafía la oscuridad de la urbe. No hacemos música para los oídos, sino para el fuego interno que todos llevamos dentro.</p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-5 relative"
      >
        <div className="absolute -inset-10 bg-brand-orange/5 blur-3xl rounded-full" />
        <div className="relative etched-border p-3 bg-white/5 backdrop-blur-xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-gR-GC6EZqnFD6OKNHLaf_X5D5SP47lzBywODsM82Kpa83yzncxe7Rs2-HAuvnh-xKgDqnFcYp7ASxflxFD8bXXIL0rCET94TcvmQICh4UtaOQgmlIVBWmy72oHXCFg1LII3i2f8Rt44U-TwE6Fop-8lM8YKzcIlkzBJqUcW5W1qtvkR8J_2Fq3yJ0tyaQxjsmg3dwA7MZCAcpSDdH3s3HXjPhPDo0YJBL__K56Dl1fPRTQZrZ55LXafBczRZjjZI0C3X3uaTU8Rk" 
            alt="The Band"
            className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Music = () => (
  <section id="music" className="py-32 bg-surface-dim scroll-mt-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="font-mono text-xs text-zinc-500 mb-4 block tracking-widest uppercase">DISCOGRAFÍA</span>
          <h2 className="text-4xl md:text-5xl font-bold">LA FORJA ARDIENTE</h2>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 flex items-center justify-center border border-zinc-800 hover:border-zinc-500 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center border border-zinc-800 hover:border-zinc-500 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="group relative bg-white/5 p-8 etched-border backdrop-blur-md"
        >
          <div className="aspect-square overflow-hidden mb-8">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAotUCH_x1c85rgvsNcn-2V5PM892F6MrS2oz9Px3SXjFWDNxFtn4tlcHAIc7roZrKjduZLfplk0IIqoGpw5PmOqBSmIPvpkehSbWakpe2CDuVeF15V9rbEha328ijnPQZqOHFTyDzI2aeKl_ooFBSJk-kESO-a6ElH5oghLsTEjcXipE7TQOa2LuCsZex5hVxPvufGUKr2f980xpbpG3BCt8xtEhpgG50t0R0qUWXlbMVlEa9XJsAMuizv3Bcg2IhcEdF-wTRP6aJh" 
              alt="Album cover"
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Escoria & Oro</h3>
          <p className="font-mono text-zinc-500 text-[10px] mb-8 tracking-widest uppercase">LP • 2023</p>
          
          <div className="space-y-1 mb-10">
            <div className="flex justify-between items-center py-3 border-b border-white/5 group/track cursor-pointer">
              <span className="text-sm text-zinc-400 group-hover/track:text-white transition-colors">01. Cenizas al Viento</span>
              <Play size={12} className="opacity-0 group-hover/track:opacity-100" />
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5 group/track cursor-pointer">
              <span className="text-sm text-zinc-400 group-hover/track:text-white transition-colors">02. El Martillo</span>
              <Play size={12} className="opacity-0 group-hover/track:opacity-100" />
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 py-3 border border-zinc-800 text-[10px] font-mono tracking-widest hover:bg-white hover:text-black transition-all">SPOTIFY</button>
            <button className="flex-1 py-3 border border-zinc-800 text-[10px] font-mono tracking-widest hover:bg-white hover:text-black transition-all">YOUTUBE</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-black etched-border p-10 md:p-16 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-10 right-10 opacity-5">
             <div className="flex gap-1 items-end">
                {[1,2,3,4,5,6,3,7,2,5].map((h, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [`${h*10}px`, `${h*15}px`, `${h*8}px`] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                    className="w-4 bg-white"
                  />
                ))}
             </div>
          </div>
          
          <div>
            <span className="font-mono text-[10px] text-brand-orange mb-4 block tracking-[0.3em] uppercase">NOW PLAYING</span>
            <h4 className="text-4xl md:text-6xl font-bold mb-3">Hierro Colado</h4>
            <p className="text-zinc-500">Álbum: Escoria & Oro</p>
          </div>

          <div className="mt-16 md:mt-0">
            <div className="relative w-full h-[1px] bg-zinc-800 mb-4">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-white" />
              <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-orange rounded-full shadow-[0_0_15px_#ff4d00]" />
            </div>
            <div className="flex justify-between font-mono text-[10px] text-zinc-600 tracking-widest">
              <span>01:42</span>
              <span>04:15</span>
            </div>
            
            <div className="flex items-center gap-8 md:gap-12 mt-12">
              <Shuffle size={18} className="text-zinc-500 hover:text-white cursor-pointer" />
              <SkipBack size={24} className="text-zinc-500 hover:text-white cursor-pointer" />
              <button className="w-16 h-16 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                <Play size={28} fill="currentColor" />
              </button>
              <SkipForward size={24} className="text-zinc-500 hover:text-white cursor-pointer" />
              <Repeat size={18} className="text-zinc-500 hover:text-white cursor-pointer" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Shows = () => {
  const dates = [
    { month: "ABR", day: "18", year: "2026", venue: "PREVIA CIRO Y LOS PERSAS.", city: "EL OBSERVATORIO CENTRO CULTURAL, SANTIAGO DEL ESTERO", status: "AGOTADO" },
    { month: "JUN", day: "24", year: "2026", venue: "TEATRO LA CASA", city: "SANTIAGO DEL ESTERO, ARGENTINA", status: "ENTRADAS" },
    { month: "JUL", day: "12", year: "2026", venue: "CENTRO CULTURAL TINKUY", city: "SANTIAGO DEL ESTERO, ARGENTINA", status: "ENTRADAS" },
  ];

  return (
    <section id="shows" className="py-32 max-w-5xl mx-auto px-6 scroll-mt-24">
      <div className="text-center mb-24">
        <span className="font-mono text-xs text-zinc-500 mb-4 block tracking-widest uppercase">FECHAS DE GIRA</span>
        <h2 className="text-5xl md:text-7xl font-bold">EL RITUAL EN VIVO</h2>
      </div>
      
      <div className="divide-y divide-zinc-800 border-t border-zinc-800">
        {dates.map((show, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group grid grid-cols-1 md:grid-cols-5 gap-8 py-10 px-8 hover:bg-white/[0.02] transition-colors items-center"
          >
            <div className="flex flex-col md:col-span-1">
              <span className="text-3xl font-bold">{show.month} {show.day}</span>
              <span className="font-mono text-xs text-zinc-500 tracking-widest">{show.year}</span>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors">{show.venue}</h4>
              <p className="font-mono text-[10px] text-zinc-500 tracking-[0.2em] uppercase">{show.city}</p>
            </div>
            <div className="md:col-span-1 flex md:justify-end">
              {show.status === "AGOTADO" ? (
                <span className="px-8 py-3 border border-zinc-800 text-[10px] font-mono tracking-widest text-zinc-600 block w-full text-center">AGOTADO</span>
              ) : (
                <button className="w-full md:w-auto px-8 py-3 border border-zinc-700 text-[10px] font-mono tracking-widest hover:border-white transition-all text-white">ENTRADAS</button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDUL3vONBkkH8At7PRnqMIbsyty6ZALsD8sMedVgPNupTAoSBJey4wrF56FOjSc-ivGFbiLVUvwwStgPaBaCLhAT0xqFexAdXUVoQ-K_AVrcoqB5gnjXsSBddSf8Ele94y5I0jsMlN6XQoOa9yAdSL99EQkdiev3iX2Hssgp9_tLtP41_LGV8G6vzfAgpMpWHrukXdajLEDhMvYaKoknXN4a_Aj8FoBGK7AEhhpmZD66a_ZOSY2WAXjoK4m8L7snGWReLipiWxF5T1U",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8gOTFwGxzicr-8mYcadSr4fIoyt8xDSuVuKbX3HCDk7LvjjLm6BG18jDV7Z191Xc554fMoXd5ja_9hFmHvpTLvgWuvuN6D7m-mJkc5YxEEuWfaK9oP1UTq8RZQIoZU-QOCl3mWb3C3vEGCwN3vX77eQESyt1y99Jrpx0vjFI2VFQjqDaWglpF49NESPhcqlXM0eCVoZnod2oSvDysWJm0vXad2Q9XjbvvfeRYsI8zEtm-JR7QasQNS11AqjN8ADLKUNgHuWq2gtg-",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9juUqx6oPhavCv_Fk1k_kSSISPnZsBpJC-s9yoqMIGCr7s2AMcKIvKvcXAnhklz_MRx1xMIuU4A2qkng2ZzuEBVs9PJv27hlxnXXRhKBCKiOBj7vH4p4nLYQMRBvJwLix_U2YbVvGLMQc_xcbgfKr3Stouhpt8Gr5yX80v2UZfrrBead3Pdyen2vfCJVYkv-GdpjubfrLSO7Y0VAdGYKXfDrq30W87SC48c1AB-lGRBik-rJTInXR7Rk5Rl0sX3c7q-i0a3NZ78iH",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBklFZ8u9tK5a_X2MZVLilNKOso-PjmIx7UIDTLEcqLBP_w7JNsqPjhilgLhkYHIVeXiq7PXg4U99IWbESU35YoV3k4nj2R9MPhdNgZyh8gk000l9zRlX9xfD2hamieGOrDx9-qXuHQ4uh2n-hnwKTS2slY4ORfzTDJCmIL8WCXm7GwmNivaEhKgqLeZqPVA2ta6O8cM7Dkse_Ka8MP5-3gNNABJiVyT4qcAzPQpuRwl0TZRuPLwTFHbn7rRTAFY_kUizPSi4Hq_Q87",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCO62QQCSDdbJXF3kj0vhWvu3axleDuKpKqVErNaO1evenNKoEc9_-mc6uThWV4y4tn8FFYUY_JfnZ6OVlPWEcPxLqyJ2QdTzcPcssYAKZeB9s0VSxzK19X4229pqSuYdwqeuojqT5sjuQgrjKBsJ408H7wQhp4nlqc0OKnwJeo8LgGdQ0Taf1e180dfDY5GWX1ge4CUxpJN0LjgeenmdBc0Pyr1p3YC8Ppzrn5ujvstfDuyBNC5aaOvaH2fGsIOzN_xxNcNNjzdYfG",
    "https://i.kym-cdn.com/entries/icons/original/000/056/368/pigeoncover.jpg"
  ];

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square md:aspect-[3/4] overflow-hidden grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700 cursor-crosshair etched-border"
            >
              <img src={url} alt={`Performance ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-24 bg-surface-black border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
      <span className="text-4xl font-sankofa tracking-[0.3em] font-mono opacity-40">ORFEBRES</span>
      
      <div className="flex gap-12">
        {['INSTAGRAM', 'YOUTUBE', 'SPOTIFY'].map((link) => (
          <a key={link} href="#" className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]">
            {link}
          </a>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase leading-loose">
          © 2024 ORFEBRES. FORJANDO ROCK DESDE LAS ENTRAÑAS.<br />
          HECHO EN ARGENTINA.
        </p>
      </div>
      
      <div className="flex items-center gap-2 text-zinc-800">
        <div className="w-12 h-[1px] bg-white/5" />
        <span className="text-[10px] font-mono tracking-tighter">EST. 2024</span>
        <div className="w-12 h-[1px] bg-white/5" />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Gallery />
      <Footer />
    </div>
  );
}

