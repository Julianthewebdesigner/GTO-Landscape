# Media Assets Folder Structure

This folder contains all images and videos for the GTO Landscape LLC website.

## Folder Organization

```
public/
├── images/
│   ├── hero/          # Hero section background images
│   ├── projects/      # Project portfolio images
│   └── services/      # Service-related images
└── videos/            # Video content
```

## How to Use

### In Your Components

Reference images using absolute paths from the public folder:

```tsx
// Hero background
<img src="/images/hero/hero-background.jpg" alt="Hero" />

// Project images
<img src="/images/projects/project-1.jpg" alt="Project" />

// Service images
<img src="/images/services/service-name.jpg" alt="Service" />

// Videos
<video src="/videos/showcase.mp4" />
```

### File Naming Conventions

- Use lowercase with hyphens: `hero-background.jpg`
- Be descriptive: `retaining-wall-project.jpg`
- Use consistent numbering for series: `project-1.jpg`, `project-2.jpg`

### Recommended Image Formats

- **JPEG (.jpg)**: Photos and complex images
- **PNG (.png)**: Images with transparency or logos
- **WebP (.webp)**: Modern format for better compression (optional)

### Recommended Video Formats

- **MP4 (.mp4)**: Best browser compatibility
- **WebM (.webm)**: Alternative for web optimization

## Currently Referenced Images

The code currently expects these images:

### Hero Section
- `/images/hero/hero-background.jpg` - Main hero background

### Projects Section
- `/images/projects/project-1.jpg` - Des Moines Modern Oasis
- `/images/projects/project-2.jpg` - Federal Way Retaining Wall
- `/images/projects/project-3.jpg` - Kent Patio Transformation
- `/images/projects/project-4.jpg` - Renton Custom Lighting
- `/images/projects/project-5.jpg` - Auburn Stone Pathway

## Adding New Media

1. Place your images/videos in the appropriate subfolder
2. Reference them in your components using `/images/...` or `/videos/...`
3. Vite will automatically serve files from the `public` folder

## Image Optimization Tips

- Compress images before uploading (use tools like TinyPNG or Squoosh)
- Hero images: aim for ~200-300KB at 1920px width
- Project images: aim for ~100-150KB at 800px width
- Consider using lazy loading for images below the fold
