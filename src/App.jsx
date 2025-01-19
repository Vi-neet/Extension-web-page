import { useState } from "react";
import { Download, ChevronLeft, ChevronRight, Check } from "lucide-react";


const App = () => {
  const extUrl = "http://localhost:5173/prospect-vault-ext.zip";
  const [currentImage, setCurrentImage] = useState(0);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const images = [
    "/extension-icon.png",
    "/extension-dashboard.png",
    // "/api/placeholder/400/300"
  ];

  const downloadFile = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "prospect-vault-ext.zip");
    document.body.appendChild(a);
    a.click();
    a.remove();
    setIsDownloaded(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-2 sm:p-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-4 sm:p-8 3xl:max-w-[1400px] 3xl:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-h-[400px] md:h-[600px] 3xl:h-[800px] max-w-6xl 3xl:max-w-[1400px] 3xl:gap-12">
          {/* Carousel Section */}
          <div className="relative h-[300px] md:h-full">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <img
                src={images[currentImage]}
                alt={`Screenshot ${currentImage + 1}`}
                className="w-full h-full object-contain bg-gray-100"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 3xl:p-4 rounded-full shadow-lg hover:bg-white"
              >
                <ChevronLeft className="w-6 h-6 3xl:w-8 3xl:h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 3xl:p-4 rounded-full shadow-lg hover:bg-white"
              >
                <ChevronRight className="w-6 h-6 3xl:w-8 3xl:h-8" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentImage ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col h-full">
            <div className="flex-grow space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-3xl 3xl:text-4xl font-bold text-gray-900">
                Prospect Vault Extension
              </h1>
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-lg md:text-xl 3xl:text-2xl font-semibold text-gray-800">
                  Instructions:
                </h2>
                <ol className="list-decimal list-inside space-y-1 md:space-y-2 text-gray-700 text-sm md:text-base 3xl:text-lg">
                  <li className="font-medium">Installation:</li>
                  <ol className="ml-6 mt-2 space-y-1">
                    <li>-Download and extract the extension zip file.</li>
                    <li>-Open your browser&apos;s extension manager.</li>
                    <li>-Enable &quot;Developer mode&quot;.</li>
                    <li>
                      -Click &quot;Load unpacked&quot; and select the extracted
                      folder.
                    </li>
                  </ol>
                  <li className="font-medium mt-4">Using the Extension:</li>
                  <ol className="ml-6 mt-2 space-y-1">
                    <li>-Navigate to any prospect&apos;s profile.</li>
                    <li>
                      -Open the extension and type it in manually or click on
                      save tab.
                    </li>
                    <li>
                      -Access saved prospects from your dashboard or save it in
                      an excel file.
                    </li>
                  </ol>
                </ol>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 mt-4 md:mt-6">
              <button
                onClick={() => downloadFile(extUrl)}
                className={`w-full flex items-center justify-center gap-2 py-3 3xl:py-4 px-6 3xl:px-8 rounded-lg transition-colors 3xl:text-xl ${
                  isDownloaded
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {isDownloaded ? (
                  <>
                    <Check className="w-5 h-5 3xl:w-6 3xl:h-6" />
                    <span>Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 3xl:w-6 3xl:h-6" />
                    <span>Download Extension</span>
                  </>
                )}
              </button>

              <div className="p-4 3xl:p-6 bg-green-50 rounded-lg">
                <p className="text-green-800 text-center 3xl:text-lg">
                  ✨ You&apos;re all set! The extension is now installed and
                  ready to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
