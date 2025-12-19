import { useParams } from "react-router-dom";
import { schools } from "@/data/schools";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import ImageUploader, { UploadedImage } from "@/components/ImageUploader";

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
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  const handleImagesAdded = (images: UploadedImage[]) => {
    setUploadedImages((prev) => [...prev, ...images]);
  };

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

      {/* Image Uploader */}
      <div className="bg-slate-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Upload Images</h2>
        <ImageUploader onImagesAdded={handleImagesAdded} maxFiles={10} />
      </div>

      {/* Uploaded Images Preview */}
      {uploadedImages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Your Uploads ({uploadedImages.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {uploadedImages.map((img) => (
              <div key={img.id} className="relative group rounded-lg overflow-hidden shadow-md">
                <img
                  src={img.preview}
                  alt={img.file.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform cursor-pointer max-w-full"
                  onClick={() => setSelectedMedia({ type: "image", src: img.preview })}
                />
                <p className="text-xs text-slate-600 bg-white p-2 truncate">{img.file.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Section Header */}
      <h2 className="text-lg font-semibold text-slate-900 mb-4 mt-8">Gallery</h2>

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
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 max-w-full"
                />
              ) : youtubeThumb ? (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={youtubeThumb}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 max-w-full"
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
              src={getYouTubeEmbedUrl(selectedMedia.src)}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg"
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
