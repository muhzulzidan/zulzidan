"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export default function WorkGallery({ images, client }) {
  const [currentImage, setCurrentImage] = useState(null);

  if (!images?.length) return null;

  return (
    <>
      <section
        className="border-t border-[#18201c]/20"
        aria-labelledby="project-gallery-heading"
      >
        <div className="mx-auto max-w-screen-xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8f3827]">
              Project evidence
            </p>
            <h2
              id="project-gallery-heading"
              className="mt-5 max-w-5xl font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em]"
            >
              A closer look at the work.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {images.map((image, index) => {
              const alt =
                image.title || `${client} project image ${index + 1}`;

              return (
                <figure key={image.contentful_id || image.url || alt}>
                  <button
                    type="button"
                    onClick={() => setCurrentImage({ ...image, alt })}
                    className="group relative block aspect-[4/3] w-full overflow-hidden bg-[#d9d0c3] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f4efe7]"
                    aria-label={`Open larger view of ${alt}`}
                  >
                    {image.url ? (
                      <Image
                        src={image.url}
                        alt={alt}
                        fill
                        sizes="(min-width: 768px) 46vw, calc(100vw - 2.5rem)"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    ) : null}
                  </button>
                  <figcaption className="mt-3 text-sm text-[#5a655f]">
                    {alt}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog
        open={Boolean(currentImage)}
        onClose={() => setCurrentImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-[#18201c]/85" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto p-4 sm:p-8">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="relative w-full max-w-6xl bg-[#f4efe7] p-3 shadow-2xl">
              <DialogTitle className="sr-only">
                {currentImage?.alt || "Project image"}
              </DialogTitle>
              <button
                type="button"
                onClick={() => setCurrentImage(null)}
                className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#18201c] text-xl text-[#fffaf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-2"
                aria-label="Close image"
              >
                ×
              </button>
              {currentImage?.url ? (
                <Image
                  src={currentImage.url}
                  alt={currentImage.alt}
                  width={currentImage.width || 2000}
                  height={currentImage.height || 1500}
                  sizes="(min-width: 1280px) 72rem, calc(100vw - 2rem)"
                  className="max-h-[85vh] h-auto w-full object-contain"
                />
              ) : null}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
