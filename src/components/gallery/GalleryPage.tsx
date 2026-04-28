"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  thumb: string;
  caption: string;
};

const photos: MediaItem[] = [
  { id: 1,  type: "image", src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80", caption: "Students in class" },
  { id: 2,  type: "image", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", caption: "Campus building" },
  { id: 3,  type: "image", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", caption: "Learning together" },
  { id: 4,  type: "image", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", caption: "Graduation day" },
  { id: 5,  type: "image", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", caption: "Reading hour" },
  { id: 6,  type: "image", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", caption: "Annual event" },
  { id: 7,  type: "image", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", caption: "Classroom activity" },
  { id: 8,  type: "image", src: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", caption: "School grounds" },
  { id: 9,  type: "image", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80", caption: "Community support" },
  { id: 10, type: "image", src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=85", thumb: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80", caption: "Study time" },
];

const videos: MediaItem[] = [
  { id: 11, type: "video", src: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4", thumb: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80", caption: "Campus tour" },
  { id: 12, type: "video", src: "https://videos.pexels.com/video-files/4769411/4769411-uhd_2560_1440_25fps.mp4", thumb: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", caption: "Student stories" },
  { id: 13, type: "video", src: "https://videos.pexels.com/video-files/5198697/5198697-uhd_2560_1440_25fps.mp4", thumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80", caption: "Life at Dar ul Zahra" },
  { id: 14, type: "video", src: "https://videos.pexels.com/video-files/6209862/6209862-uhd_2560_1440_25fps.mp4", thumb: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", caption: "Building futures" },
];

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-px bg-primary" />
        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">{label}</span>
      </div>
      <h2 className="font-manrope font-black text-[#0c1525] text-3xl lg:text-4xl tracking-tighter">{title}</h2>
    </div>
  );
}

function MasonryGrid({ items, onOpen }: { items: MediaItem[]; onOpen: (item: MediaItem) => void }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl bg-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          onClick={() => onOpen(item)}
        >
          <img
            src={item.thumb}
            alt={item.caption}
            className="w-full object-cover group-hover:scale-105 transition-transform duration-500 block"
          />
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-semibold">{item.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const [lightboxList, setLightboxList] = useState<MediaItem[]>([]);

  const openLightbox = (item: MediaItem, list: MediaItem[]) => {
    setLightbox(item);
    setLightboxList(list);
  };

  return (
    <div className="bg-white pb-20 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Photo Gallery ── */}
        <div className="pt-16 pb-16 border-b border-gray-100">
          <SectionHeader label="Photography" title="Photo Gallery" />
          <MasonryGrid items={photos} onOpen={item => openLightbox(item, photos)} />
        </div>

        {/* ── Video Gallery ── */}
        <div className="pt-16">
          <SectionHeader label="Videography" title="Video Gallery" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((item, i) => (
              <motion.div
                key={item.id}
                className="cursor-pointer group relative overflow-hidden rounded-2xl bg-gray-100 aspect-video"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => openLightbox(item, videos)}
              >
                <img
                  src={item.thumb}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                  <p className="text-white text-sm font-semibold">{item.caption}</p>
                  <p className="text-white/50 text-xs mt-0.5">Video</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm px-4 pt-20 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            {/* Fixed container — never shifts size */}
            <div
              className="relative w-full max-w-5xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Close — inside top-right of media box */}
              <button onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-primary border border-white/20 flex items-center justify-center text-white transition-all z-20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Media box — sized by content, no blank space */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox.id}
                    className="w-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {lightbox.type === "video" ? (
                      <video src={lightbox.src} controls autoPlay className="w-full max-h-[70vh] rounded-xl" />
                    ) : (
                      <img src={lightbox.src} alt={lightbox.caption} className="w-full max-h-[70vh] object-contain" />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next — overlaid on image sides */}
                {[{ dir: -1, d: "M15 19l-7-7 7-7" }, { dir: 1, d: "M9 5l7 7-7 7" }].map(({ dir, d }) => {
                  const idx = lightboxList.findIndex(i => i.id === lightbox.id);
                  const target = lightboxList[idx + dir];
                  return (
                    <button key={dir}
                      onClick={e => { e.stopPropagation(); if (target) setLightbox(target); }}
                      disabled={!target}
                      className={`absolute top-1/2 -translate-y-1/2 ${dir === -1 ? "left-3" : "right-3"} w-10 h-10 rounded-full bg-black/50 hover:bg-primary border border-white/20 flex items-center justify-center text-white disabled:opacity-0 transition-all z-10`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
                      </svg>
                    </button>
                  );
                })}
              </div>

              {/* Caption + counter */}
              <div className="flex items-center justify-between mt-3 px-1">
                <p className="text-white/50 text-sm">{lightbox.caption}</p>
                <p className="text-white/25 text-xs font-mono">
                  {lightboxList.findIndex(i => i.id === lightbox.id) + 1} / {lightboxList.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
