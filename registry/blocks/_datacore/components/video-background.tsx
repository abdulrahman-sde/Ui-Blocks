"use client";

export default function VideoBackground({ src }: { src: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ minHeight: "100vh" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}