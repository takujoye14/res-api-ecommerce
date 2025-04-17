const sharp = require("sharp")
const path = require("path")
const fs = require("fs")

const sharpMiddleware = (outputFormat = "webp", quality = 80) => {
  return async (req, res, next) => {
    // Handle multiple files
    if (req.files && req.files.length > 0) {
      try {
        const processedPaths = []

        for (const file of req.files) {
          const inputPath = file.path
          const filenameWithoutExtension = file.filename
            .split(".")
            .slice(0, -1)
            .join(".")

          const outputPath = path.join(
            "uploads",
            `${filenameWithoutExtension}.${outputFormat}`
          )

          await sharp(inputPath)
            .toFormat(outputFormat, { quality })
            .toFile(outputPath)

          // Delete original file
          fs.unlink(inputPath, (err) => {
            if (err) console.error("Error deleting original file:", err)
          })

          processedPaths.push(`/${outputPath}`) // store relative path
        }

        req.body.imageUrl = processedPaths 
        return next()
      } catch (err) {
        console.error("Sharp multiple error:", err)
        return res.status(500).json({ error: "Failed to process images" })
      }
    }

    // If no files or using single file mode
    return next()
  }
}

module.exports = sharpMiddleware
