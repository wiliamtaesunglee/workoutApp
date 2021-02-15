import React, { useState } from 'react'
import Video from 'react-native-video';
import { View } from 'react-native'


const VideoPlayer = ({ uri }) => {
  const [videoRef, setVideoRef] = useState(null)
  return (
    <View style={{ margin: 8 }}>
    <Video
      source={{
        uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
      }}
      paused
      ref={(ref) => setVideoRef(ref)}
      onBuffer={(buff) => console.warn(buff)}
      onError={(err) => console.warn(err)}
      style={{ width: 200, height: 200 }}
      controls={true}
    />
    </View>
  )
}

export default VideoPlayer
