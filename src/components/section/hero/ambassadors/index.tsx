import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ambassadors } from "../mock-data";
import PlayButton from "@/icons/play-button";
import { useEffect, useRef, useState } from "react";
import type { AmbassType } from "@/types/hero.type";
import ExitIcon from "@/icons/exit-icon";
import UnMuteButton from "@/icons/unmute-button";
import MuteButton from "@/icons/mute-button";

const Ambassadors = () => {
  const [selectedVideo, setSelectedVideo] = useState<AmbassType | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (video: AmbassType) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (selectedVideo && video) {
      if (isPlaying) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Video play interrupted:", error);
          });
        }
      } else {
        video.pause();
      }
    }
    return () => {
      if (video) {
        video.pause();
      }
    };
  }, [selectedVideo, isPlaying]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-arizona font-medium">
        What our IM8 Ambassadors are saying
      </p>
      <Carousel
        opts={{
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {ambassadors.map((item, index) => (
            <CarouselItem key={index} className="md:basis-[19.3%] basis-[25%] relative ">
              <button
                type="button"
                onClick={() => openVideo(item)}
                className="cursor-pointer"
              >
                <img
                  src={item.imageHref}
                  alt=""
                  draggable={false}
                  className="rounded-lg"
                />
              </button>
              <PlayButton className="absolute bottom-5 right-3 size-6" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {selectedVideo && (
        <>
          <div
            onClick={closeVideo}
            className="fixed left-0 top-0 w-full h-full bg-[rgba(242,224,221,0.5)] backdrop-blur-sm z-50"
          />

          <div
            className="fixed left-0 top-0 w-full h-full z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <div
              className="relative w-102.5 h-155"
              onClick={(e) => {
                e.stopPropagation();
                togglePause();
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeVideo();
                }}
                className="absolute top-4 right-4 z-10 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <ExitIcon />
              </button>

              {!isPlaying && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePause();
                  }}
                  className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white/70 rounded-full p-4 flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  <PlayButton />
                </button>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="absolute left-6 bottom-6 w-12 h-12 z-10 cursor-pointer rounded-full hover:opacity-80 transition-opacity"
              >
                {isMuted ? (
                  <UnMuteButton className="size-12" />
                ) : (
                  <MuteButton className="size-12" />
                )}
              </button>

              <video
                ref={videoRef}
                src={selectedVideo.videoHref}
                poster={selectedVideo.imageHref}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover rounded-2xl absolute top-0 left-0 right-0 bottom-0"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Ambassadors;
