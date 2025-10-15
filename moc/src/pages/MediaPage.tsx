import { useParams } from "react-router-dom";
import { schools } from "@/data/schools";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

function getYouTubeVideoId(url: string) {
  const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function getYouTubeEmbedUrl(url: string) {
  const id = getYouTubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

function getYouTubeThumbnail(url: string) {
  const id = getYouTubeVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export default function MediaPage() {
  const { id } = useParams();
  const school = schools.find((s) => s.id === id);

  const [selectedMedia, setSelectedMedia] = useState<null | {
    type: string;
    src: string;
  }>(null);

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">School not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">
        {school.name} – Media Gallery
      </h1>
      <p className="text-muted-foreground mb-8">{school.description}</p>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {school.media.map((item, index) => {
          const youtubeThumb = item.type === "video" ? getYouTubeThumbnail(item.src) : null;

          return (
            <Card
              key={index}
              className="shadow-card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Media ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : youtubeThumb ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={youtubeThumb}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-48 bg-black flex items-center justify-center">
                  <span className="text-white text-sm">🎬 Video</span>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Modal for full view */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl">
          {selectedMedia && selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt="Full View"
              className="w-full rounded-lg"
            />
          ) : selectedMedia &&
            (selectedMedia.src.includes("youtube.com") ||
              selectedMedia.src.includes("youtu.be")) ? (
            <iframe
              width="100%"
              height="500"
              src={getYouTubeEmbedUrl(selectedMedia.src)}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          ) : (
            selectedMedia && (
              <video src={selectedMedia.src} controls className="w-full rounded-lg" />
            )
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
