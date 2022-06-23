import React from 'react'
export default function About(props) {
  return (
    <>
    <div className="container d-flex">
      <img src="./my_photo2.jpg" style={{height:'25rem'}} className="img-thumbnail m-3" alt="..."/>
      <p  className='m-3' style={{color: props.mode==='dark'?'white':'black'}}><h1 style={{color: props.mode==='dark'?'#308D46':'black'}}>TexUtils by Saksham Sharma</h1>This is texUtils app.this is used to make varioud chnges in the text provided by the editor</p>
    </div>
    </>
  )
}
