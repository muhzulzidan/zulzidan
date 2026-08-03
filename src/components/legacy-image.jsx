import Image from "next/image";

import bonekurir from "@/images/works/bonekurir.png";
import directus from "@/images/works/directus.png";
import institutIndonesia from "@/images/works/institutindonesia.png";
import islamTshirt from "@/images/works/islamtshirt.png";
import zidanKavi from "@/images/zidankavi.jpg";
import zidanGreen from "@/images/zidan_green.png";
import cafe from "@/images/cafee.png";
import brand from "@/images/lp/brand.png";
import coffee from "@/images/lp/cofee.png";
import web from "@/images/lp/web.png";

const localImages = {
  "works/bonekurir.png": bonekurir,
  "works/directus.png": directus,
  "works/institutindonesia.png": institutIndonesia,
  "works/islamtshirt.png": islamTshirt,
  "zidankavi.jpg": zidanKavi,
  "zidan_green.png": zidanGreen,
  "cafee.png": cafe,
  "lp/brand.png": brand,
  "lp/cofee.png": coffee,
  "lp/web.png": web,
};

function localSource(source) {
  if (!source || typeof source !== "string") return source;
  const normalized = source.replaceAll("\\", "/");
  const key = Object.keys(localImages).find((candidate) => normalized.endsWith(candidate));
  return key ? localImages[key] : source;
}

function imageDetails(image) {
  const data = image?.gatsbyImageData || image || {};
  const src = data.url || data.images?.fallback?.src || image?.url || "";
  return {
    src,
    width: data.width || image?.width || 1200,
    height: data.height || image?.height || 675,
  };
}

function OptimizedImage({ source, image, alt = "", className = "", imgClassName = "", style, ...props }) {
  const local = localSource(source);
  const details = local || imageDetails(image);
  const src = local || details.src;
  if (!src) return null;

  return (
    <Image
      src={src}
      width={typeof src === "string" ? details.width : undefined}
      height={typeof src === "string" ? details.height : undefined}
      alt={alt}
      className={`h-auto w-full object-cover ${className} ${imgClassName}`.trim()}
      style={style}
      sizes="(max-width: 768px) 100vw, 50vw"
      {...props}
    />
  );
}

export function StaticImage({ src, ...props }) {
  return <OptimizedImage source={src} {...props} />;
}

export function GatsbyImage({ image, ...props }) {
  return <OptimizedImage image={image} {...props} />;
}

export function getImage(image) {
  return image?.gatsbyImageData || image || null;
}
