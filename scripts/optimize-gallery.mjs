import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const galleryDir = path.resolve('public/assets/gallery')
const optimizedDir = path.join(galleryDir, 'optimized')
const thumbsDir = path.join(galleryDir, 'thumbs')

await fs.mkdir(optimizedDir, { recursive: true })
await fs.mkdir(thumbsDir, { recursive: true })

const entries = await fs.readdir(galleryDir, { withFileTypes: true })
const imageFiles = entries
  .filter((entry) => entry.isFile() && /\.(jpe?g)$/i.test(entry.name))
  .map((entry) => entry.name)

for (const fileName of imageFiles) {
  const sourcePath = path.join(galleryDir, fileName)
  const baseName = fileName.replace(/\.[^.]+$/, '')
  const optimizedPath = path.join(optimizedDir, `${baseName}.webp`)
  const thumbPath = path.join(thumbsDir, `${baseName}.webp`)

  // Lightbox image: visually clean and much lighter than original 5-12 MB JPG.
  await sharp(sourcePath)
    .rotate()
    .resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 76, effort: 5 })
    .toFile(optimizedPath)

  // Grid thumbnail: small payload for initial gallery load.
  await sharp(sourcePath)
    .rotate()
    .resize({ width: 700, height: 700, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 64, effort: 4 })
    .toFile(thumbPath)
}

console.log(`Optimized ${imageFiles.length} gallery images.`)
