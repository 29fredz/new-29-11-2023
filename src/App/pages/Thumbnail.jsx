import React from 'react'
import { useSelector } from 'react-redux'
import MemeSvgViewer from '../components/uis/MemeSvgViewer/MemeSvgViewer'
import { Link } from 'react-router-dom'

export default function Thumbnail(props) {
  const r=useSelector(s=>s.ressources)
  return (
    <div>
            {r.memes.map((m,i)=><div key={i}> <Link to={"/editor/"+m.imageId}><MemeSvgViewer meme={m}  image={r.images.find((img) => img.id === m.imageId)} /></Link></div>)}
    </div>
  )
}
