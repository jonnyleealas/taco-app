/* eslint-disable max-len */
import {React, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import "./drag.css";
/**
 *  The Modal component
 * @return {component} the Modal component
 */
function Drag() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag n drop some files here, or click to select files</p>
    </div>
  );
}


export default Drag;


// [eslint]
// src/Components/rating-page/drag-drop/Drag-drop.jsx
//   Line 28:15:  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities
//   Line 28:17:  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`  react/no-unescaped-entities

// Search for the keywords to learn more about each error
