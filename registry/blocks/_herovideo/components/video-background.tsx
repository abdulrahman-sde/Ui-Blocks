"use client";

import { useRef, useCallback, useEffect } from "react";

interface VideoBackgroundProps {
  src: string;
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const opacityRef = useRef(1);
  const fadingOutRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);

  const cancelAnimFrame = useCallback(() => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  }, []);

  const fadeIn = useCallback(() => {
    cancelAnimFrame();
    fadingOutRef.current = false;
    const startTime = performance.now();
    const startOpacity = opacityRef.current;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / 250, 1);
      opacityRef.current = startOpacity + (1 - startOpacity) * progress;
      if (videoRef.current) {
        videoRef.current.style.opacity = String(opacityRef.current);
      }
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };
    animFrameRef.current = requestAnimationFrame(animate);
  }, [cancelAnimFrame]);

  const fadeOut = useCallback(() => {
    cancelAnimFrame();
    fadingOutRef.current = true;
    const startTime = performance.now();
    const startOpacity = opacityRef.current;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / 250, 1);
      opacityRef.current = startOpacity * (1 - progress);
      if (videoRef.current) {
        videoRef.current.style.opacity = String(opacityRef.current);
      }
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };
    animFrameRef.current = requestAnimationFrame(animate);
  }, [cancelAnimFrame]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration || fadingOutRef.current) return;
    if (video.currentTime >= video.duration - 0.55) {
      fadeOut();
    }
  }, [fadeOut]);

  const handleEnded = useCallback(() => {
    cancelAnimFrame();
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    opacityRef.current = 0;
    fadingOutRef.current = false;
    setTimeout(() => {
      if (!video) return;
      video.currentTime = 0;
      video.play();
      fadeIn();
    }, 100);
  }, [cancelAnimFrame, fadeIn]);

  const handlePlay = useCallback(() => {
    fadeIn();
  }, [fadeIn]);

  useEffect(() => {
    return () => cancelAnimFrame();
  }, [cancelAnimFrame]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop={false}
      playsInline
      className="absolute inset-0 w-[115%] h-[115%] object-cover object-top"
      style={{ objectPosition: "center top" }}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      onPlay={handlePlay}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
