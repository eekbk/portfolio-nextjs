import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
  try {
    const filepaths = [
      path.join(process.cwd(), 'public', 'VCAP_Demo_Vid_2.mp4'),
      path.join(process.cwd(), 'public', 'WatchParty_Voice_Control.mp4'),
      path.join(process.cwd(), 'public', 'HolisticYou_Demo_vid_1.mp4'),
    ]

    const videoPromises = filepaths.map(async (filepath) => {
      const video = await fs.readFile(filepath)
      return {
        data: video,
        length: video.length,
      }
    })

    const videos = await Promise.all(videoPromises)

    res.setHeader('Content-Type', 'application/json')

    res.status(200).send(videos)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
