import React, { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

interface UploadedMedia {
  publicId: string;
  url: string;
  type: 'image' | 'video';
  format: string;
}

const UploadPortfolio: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedMedia[]>([]);

  const handleUpload = async (files: FileList) => {
    setUploading(true);
    setError(null);

    const uploadPromises = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'portfolio_preset'); // You'll need to create this in Cloudinary

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/auto/upload`,
          {
            method: 'POST',
            body: formData
          }
        );

        if (!response.ok) throw new Error('Upload failed');

        const data = await response.json();
        return {
          publicId: data.public_id,
          url: data.secure_url,
          type: data.resource_type as 'image' | 'video',
          format: data.format
        };
      } catch (err) {
        console.error('Upload error:', err);
        throw new Error(`Failed to upload ${file.name}`);
      }
    });

    try {
      const results = await Promise.all(uploadPromises);
      setUploadedFiles(prev => [...prev, ...results]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-[clamp(2rem,3.815rem,5vw)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.236rem)] font-bold mb-8 text-white">
            Upload <span className="text-amber-400">Portfolio</span>
          </h2>

          <div className="space-y-8">
            {/* Upload Area */}
            <div
              className={`
                glass-card p-8 rounded-2xl
                border-2 border-dashed border-white/20
                hover:border-amber-400/50 transition-colors
                ${uploading ? 'pointer-events-none' : ''}
              `}
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleUpload(e.dataTransfer.files);
              }}
            >
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => e.target.files && handleUpload(e.target.files)}
                disabled={uploading}
              />

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  {uploading ? (
                    <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
                  ) : (
                    <Upload className="w-8 h-8 text-amber-400" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {uploading ? 'Uploading...' : 'Drop files here'}
                </h3>
                
                <p className="text-white/60 text-sm mb-4">
                  or click to select files
                </p>

                <div className="text-xs text-white/40">
                  Supported formats: JPG, PNG, GIF, MP4, WebM
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 glass-card rounded-xl bg-red-500/10 text-red-400 flex items-center gap-2">
                <X className="w-4 h-4" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-6">Uploaded Files</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      {file.type === 'image' ? (
                        <img
                          src={file.url}
                          alt={`Uploaded ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={file.url}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-2 left-2 right-2 text-white text-sm truncate">
                          {file.publicId}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPortfolio;