import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X as Close, ZoomIn, ZoomOut, Maximize, Minimize, Play, Pause } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  media: {
    type: 'image' | 'video';
    url: string;
    poster?: string;
  }[];
}

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [
  { id: 'all', name: 'All Works' },
  { id: 'logos', name: 'Branding' },
  { id: 'posts', name: 'Posts' },
  { id: 'ui-ux', name: 'UI/UX Design' },
  { id: '3d-animation', name: '3D Animation' },
  { id: '3d-renders', name: '3D Renders' },
  { id: 'drawings', name: 'Digital Drawings' }
];

const initialProjects: Project[] = [
  {
    id: 'redeye-animation',
    title: 'RedEye',
    category: '3d-animation',
    description: 'A CGI animation showcasing dynamic product visualization and motion design',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.jpg',
    media: [
      {
        type: 'video',
        url: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.mp4',
        poster: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245943/redeye_1_lsfhyo.jpg'
      },
      {
        type: 'video',
        url: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1742323487/8_vk6qrm.mp4',
        poster: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1742323487/8_vk6qrm.jpg'
      }
    ]
  },
  {
    id: 'product-animation',
    title: 'Product Animation',
    category: '3d-animation',
    description: 'A CGI animation showcasing dynamic product visualization and motion design',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245935/S24U_c3jsv6.jpg',
    media: [
      {
        type: 'video',
        url: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245935/S24U_c3jsv6.mp4',
        poster: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245935/S24U_c3jsv6.jpg'
      },
      {
        type: 'video',
        url: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245967/my_market_ppjlbs.mp4',
        poster: 'https://res.cloudinary.com/dzbsayerm/video/upload/v1740245967/my_market_ppjlbs.jpg'
      }
    ]
  },
  {
    id: 'redeye-post',
    title: 'RedEye Posts',
    category: 'posts',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742324879/redeye_may-08_kpicby.png',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742324889/redeye_may-09_wddu07.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742324887/redeye_may-06_p11gma.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742324882/redeye_may-04_ecdijt.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742324880/redeye_may-02_mzvqoz.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742324879/redeye_may-08_kpicby.png'
      }
    ]
  },
  {
    id: 'wow-post',
    title: 'WoW Hub Posts',
    category: 'posts',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245847/wowhup_3_rqbkzp.jpg',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245847/wowhup_cssfz5.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245847/wowhup_3_rqbkzp.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325187/World_Cup22_hf8utq.jpg'
      }
    ]
  },
  {
    id: 'strd-post',
    title: 'Stride Media Posts',
    category: 'posts',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325450/Stride_media_theme-07_jvnfhv.png',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325450/Stride_media_theme-07_jvnfhv.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325450/Stride_media_theme-11_usxt6w.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325450/Stride_media_theme-06_i2va92.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325681/Custom_Size_1_wnehyg.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325449/Stride_media_theme-01_p9whe4.png'
      }
    ]
  },
  {
    id: 'eid-post',
    title: 'Occasions Posts',
    category: 'posts',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325458/gggg-01_xmua0g.png',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325458/gggg-01_xmua0g.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742325997/Stride_-15_ehoaaz.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326019/4585315_6662-01_qk6pjw.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326029/eid_posts-03_dqsihd.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326125/eid_posts-09_ir1exh.jpg'
      }
    ]
  },
  {
    id: 'redeye-logo',
    title: 'Logo Designs',
    category: 'logos',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326403/6541956_66_ufedgl.png',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326403/6541956_66_ufedgl.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326406/32057277_443_xis4nj.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245808/proton_2_f2zt4p.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245806/Untitled3_by5hnk.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245805/Establish_Solutions_t5bewe.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245805/10698321_18895193_lfucpf.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245805/conex_ek7uec.jpg'
      }
    ]
  },
  {
    id: '3d-renders-collection',
    title: '3D Renders',
    category: '3d-renders',
    description: 'Collection of various 3D rendered artworks and visualizations',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245995/DIME_crgabt.jpg',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245995/DIME_crgabt.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245997/DRAGON_BALL_gmhv8j.jpg'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245997/minecraft_Bottle_cev6ys.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740245999/Wenax_yc7tgg.jpg'
      }
    ]
  },
  {
    id: 'anime-drawings',
    title: 'Anime Drawings',
    category: 'drawings',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326653/Illustration71_wqnsy7.png',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326653/Illustration71_wqnsy7.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326830/Illustration57_mej3a5.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740246056/Illustration35_li7t0c.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740246054/Illustration26_bktugj.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326828/Illustration58_uwwbie.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740246051/Illustration31_zudxp2.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1740246049/Illustration30_bxxzrg.png'
      }
    ]
  },
  {
    id: 'general-drawings',
    title: 'General Drawings',
    category: 'drawings',
    description: 'A stylized 3D animation showcasing visual effects and motion graphics',
    thumbnail: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326825/Illustration61_hja4g6.png',
    media: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326825/Illustration61_hja4g6.png'
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dzbsayerm/image/upload/v1742326816/Illustration63_valwu8.png'
      }
    ]
  } 
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    projectIndex: number;
    mediaIndex: number;
    isFullscreen: boolean;
    isPlaying: boolean;
    zoom: number;
  }>({
    isOpen: false,
    projectIndex: 0,
    mediaIndex: 0,
    isFullscreen: false,
    isPlaying: false,
    zoom: 1
  });

  useEffect(() => {
    setProjects(initialProjects);
    setLoading(false);
  }, []);

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  const handleProjectClick = (projectIndex: number) => {
    // Find the actual project index in the full projects array
    const fullProjectIndex = projects.findIndex(
      project => project.id === filteredProjects[projectIndex].id
    );
    
    setLightbox({
      isOpen: true,
      projectIndex: fullProjectIndex,
      mediaIndex: 0,
      isFullscreen: false,
      isPlaying: false,
      zoom: 1
    });
  };

  const handleClose = useCallback(() => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  }, []);

  const handlePrevious = useCallback(() => {
    setLightbox(prev => {
      const currentProject = projects[prev.projectIndex];
      if (prev.mediaIndex > 0) {
        return { ...prev, mediaIndex: prev.mediaIndex - 1 };
      }
      return prev;
    });
  }, [projects]);

  const handleNext = useCallback(() => {
    setLightbox(prev => {
      const currentProject = projects[prev.projectIndex];
      if (prev.mediaIndex < currentProject.media.length - 1) {
        return { ...prev, mediaIndex: prev.mediaIndex + 1 };
      }
      return prev;
    });
  }, [projects]);

  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          handleClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen, handlePrevious, handleNext, handleClose]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="glass-card p-8 rounded-2xl">
          <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Filter Bar */}
      <div className="sticky top-0 z-10 glass-card border-0 rounded-none p-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium 
                backdrop-blur-md whitespace-nowrap flex items-center justify-center
                ${activeFilter === category.id 
                  ? 'bg-amber-400 text-gray-900' 
                  : 'bg-white/10 text-white/90 hover:bg-white/20 hover:text-white'}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 lg:p-[clamp(2rem,3.815rem,5vw)] pt-4">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer glass-card border-0 hover:shadow-lg transition-all duration-500"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {project.media[0].type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-white text-xl font-bold mb-4">No projects found</h3>
            <p className="text-white/70">
              Projects will be added soon. Check back later!
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox.isOpen && projects[lightbox.projectIndex] && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <Close className="w-6 h-6 text-white" />
            </button>
            
            {lightbox.mediaIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            
            {projects[lightbox.projectIndex].media[lightbox.mediaIndex].type === 'image' ? (
              <img
                src={projects[lightbox.projectIndex].media[lightbox.mediaIndex].url}
                alt={projects[lightbox.projectIndex].title}
                className={`
                  max-h-[90vh] max-w-[90vw] object-contain rounded-lg
                  transform transition-transform duration-300
                  scale-${lightbox.zoom}
                `}
              />
            ) : (
              <video
                src={projects[lightbox.projectIndex].media[lightbox.mediaIndex].url}
                poster={projects[lightbox.projectIndex].media[lightbox.mediaIndex].poster}
                controls
                className="max-h-[90vh] max-w-[90vw] rounded-lg"
              />
            )}
            
            {lightbox.mediaIndex < projects[lightbox.projectIndex].media.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="text-white text-xl font-bold mb-2">
                {projects[lightbox.projectIndex].title}
              </h3>
              <div className="flex justify-center gap-2">
                {projects[lightbox.projectIndex].media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setLightbox(prev => ({ ...prev, mediaIndex: index }))}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === lightbox.mediaIndex ? 'bg-amber-400 w-4' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;