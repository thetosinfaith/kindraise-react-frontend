import React, { useState } from 'react'
import './content.css'
import { FcCancel } from 'react-icons/fc';

const Content = ({setTitle}) => {
  const [post, setPost] = useState();
  // const [word, setWord] = useState(setTitle);

  const showImg = (e) => {
    const file = e.target.files[0];
    const img = URL.createObjectURL(file);
    setPost(img);
  };



  return (
    <div className='contentBody'>
      <div className='contentTitleBox'>
        <div className='titleTextBox'>
          <h3>Main details</h3>
          <div>Choose a title for your campaign.</div>
        </div>
        <div className='titleInputBox'>
          <div className='titleInput'>
            <div>
              Title<span>*</span>
            </div>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div className='titleInput'>
            Subtitle
            <input type="text" />
          </div>
        </div>
      </div>

      <div className='contentTitleBox'>
        <div className='titleTextBox'>
          <h3>Story</h3>
          <div>Add a story to your campaign.</div>
        </div>
        <div className='titleInputBox'>
          <div className='storyInput'>
            <div>
              Story<span>*</span>
            </div>
            {/* <input type="text" /> */}
            <textarea name="" id=""></textarea>
          </div>
        </div>
      </div>

      <div className='contentTitleBox'>
        <div className='titleTextBox'>
          <h3>Cover photo</h3>
          <div>Add a cover photo to your campaign.</div>
        </div>
        <div className='photoInputBox'>
          <div className='photoInput'>
            <div className='storyPhotoBox'>
              <div>
                Upload photo<span>*</span>
              </div>
                <div className='photoBox'>
                  <label htmlFor="1">
                    {post ? <img src={post} alt="pic" className="postImg" /> : <div>hello</div>}
                    <input type="file" id="1" hidden onChange={showImg} />
                  </label>
                </div>
                <FcCancel onClick={()=>setPost("")}/>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Content