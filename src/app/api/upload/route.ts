// Import necessary modules
import { NextResponse } from "next/server"
import { existsSync } from "fs"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { generateFilename } from "@/lib/utils"

// Define the POST handler for the file upload
export const POST = async (req: Request): Promise<Response> => {
  try {
    const formData = await req.formData()
    const file = formData.get("file")

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No files received." }, { status: 400 })
    }

    // file type validation
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/jpg",
      "image/svg+xml",
    ]
    if (!validMimeTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type." }, { status: 400 })
    }

    // file size validation
    const maxSize = 1 * 1024 * 1024 // 1MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File is too large." }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const filename = generateFilename(file.name)

    const uploadDir = path.join(process.cwd(), "public/assets/uploads")

    // Check if the directory exists, if not, create it
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    const filePath = path.join(uploadDir, filename)
    await writeFile(filePath, buffer)

    const fileUrl = `/assets/uploads/${filename}`

    return NextResponse.json({ url: fileUrl }, { status: 201 })
  } catch (error) {
    console.log("Error occurred ", error)
    return NextResponse.json({ Message: "Failed", status: 500 })
  }
}
