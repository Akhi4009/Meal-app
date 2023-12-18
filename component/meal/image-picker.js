'use client'

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({label,name}){
    const [pickedImage,setPickeImage] = useState()
const imageInput= useRef()
    function handlePickClick(){

        imageInput.current.click()
    }

    function handleImageChane(e){
        const file=e.target.files[0];
        if(!file){
            return
            setPickeImage(null)
        }

        const fileReader = new FileReader()
        fileReader.onload =()=>{
            setPickeImage(fileReader.result)
        }

        fileReader.readAsDataURL(file);

    }
 
    return (<div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
    <div className={classes.preview}>
    {!pickedImage && <p> No Image picked yet.</p>}
    {pickedImage &&<Image src={pickedImage} alt="The image" fill/> }
    </div>
    <input 
    className={classes.input}
    type="file"
     id={name}
     accept="image/png, image/jpeg" 
     name={name}
     ref={imageInput}
     onChange={handleImageChane}
     multiple
     required
     />
     <button className={classes.button} 
     onClick={handlePickClick}
    
     type="button">
     Pick an image
     </button>
    </div>
    </div>
    )
}