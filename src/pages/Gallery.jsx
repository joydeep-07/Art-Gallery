import React from "react";
import paintings from "../utils/paintings";

const Gallery = () => {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-transparent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      {paintings.map(
        ({
          id,
          image,
          title,
          description,
          artist,
          year,
          medium,
          dimensions,
          provenance,
          collection,
          certificate,
          price,
          tagline,
          mood,
          exclusive_note,
          auction_record,
          detail,
          curator_note,
          artist_location,
        }) => (
          <div
            key={id}
            className="painting-panel w-full max-w-7xl mx-auto min-h-[820px] flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 py-16 gap-14
                       bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-3xl mb-24"
          >
            {/* IMAGE */}
            <div className="flex-1 flex justify-center items-center p-6">
              <div className="relative group max-w-full max-h-[55vh]">
                {/* Frame */}
                <div className="absolute inset-0 -inset-3 bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl shadow-2xl border border-stone-300/40 transition-all duration-700" />

                {/* Glow */}
                <div className="absolute inset-0 backdrop-blur-sm rounded-xl bg-black/5 pointer-events-none" />

                {/* Painting */}
                <img
                  src={image}
                  alt={title}
                  className="relative max-h-[55vh] rounded-xl shadow-2xl object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-200/20 via-transparent to-stone-300/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 max-w-xl space-y-7">
              {/* Title */}
              <div className="space-y-2">
                <h2 style={{fontFamily:"karatone"}} className="text-5xl lg:text-6xl font-serif text-stone-900 leading-tight">
                  {title}
                </h2>

                <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase">
                  {tagline}
                </p>

                <p className="text-stone-500 text-xs tracking-wide uppercase">
                  {collection} {certificate && "• Certified Authentic"}
                </p>

                <div className="w-24 h-0.5 bg-gradient-to-r from-amber-600 to-stone-600 rounded-full" />
              </div>

              {/* Description */}
              <p className="text-stone-700 text-lg leading-relaxed font-light">
                {description}
              </p>

              {/* Details */}
              <ul className="text-stone-700 text-base text-left leading-relaxed space-y-1">
                <li>
                  <strong>Artist:</strong> {artist} ({artist_location})
                </li>
                <li>
                  <strong>Year:</strong> {year}
                </li>
                <li>
                  <strong>Medium:</strong> {medium}
                </li>
                <li>
                  <strong>Dimensions:</strong> {dimensions}
                </li>
                <li>
                  <strong>Provenance:</strong> {provenance}
                </li>
                {auction_record && (
                  <li>
                    <strong>Auction Record:</strong> {auction_record}
                  </li>
                )}
                <li>
                  <strong>Price:</strong> {price}
                </li>
                {exclusive_note && (
                  <li>
                    <strong>Exclusive Note:</strong> {exclusive_note}
                  </li>
                )}
                {detail && (
                  <li>
                    <strong>Craft Detail:</strong> {detail}
                  </li>
                )}
              </ul>

              {/* {curator_note && (
                <blockquote className="bg-stone-100/60 text-md border-l-4 border-amber-600/70 p-4 rounded-md italic text-stone-600">
                  {curator_note}
                </blockquote>
              )} */}

              {/* <p className="text-stone-600 text-sm tracking-wide uppercase">
                Mood: {mood}
              </p> */}

              {/* Premium Tag */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-3 h-3 rounded-full bg-amber-600/20" />
                <div className="w-12 h-px bg-gradient-to-r from-amber-600/40 to-transparent" />
                <div className="text-xs text-stone-400 tracking-widest uppercase">
                  Premium Collection
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Gallery;
