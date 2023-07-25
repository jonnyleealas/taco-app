import {React, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import "./drag.css";
/**
 *  The Modal component
 * @return {component} the Modal component
 */
function Drag({className}) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


  return (
    <div>
      <h1 className="f-tag">This uploads stuff</h1>
      <form>
        <div {...getRootProps({
          className: className,
        })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drag the files here ...</p>
          ) : (
            <p className="p-tag">Drag and drop some files</p>
          )}
        </div>
      </form>

    </div>
  );
}


export default Drag;
