import { AdvancedVideo } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

import { fill } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'

const VideoPlayer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  })

  const myVideo = cld.video(process.env.NEXT_PUBLIC_CLOUDINARY_VCAP_VID)
  myVideo.resize(fill().width(320).height(280))
  // .roundCorners(byRadius(5));

  return (
    <div suppressHydrationWarning={true}>
      <AdvancedVideo cldVid={myVideo} />
    </div>
  )
}

export default VideoPlayer
