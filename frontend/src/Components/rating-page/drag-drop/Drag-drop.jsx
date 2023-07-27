import {React, useMemo, useCallback} from "react";
import {useDropzone} from "react-dropzone";

// const baseStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "20px",
//   borderWidth: 2,
//   borderRadius: 5,
//   borderColor: "#eeeeee",
//   borderStyle: "dashed",
//   backgroundColor: "#fafafa",
//   color: "#bdbdbd",
//   outline: "none",
//   transition: "border .24s ease-in-out",
// };

// const focusedStyle = {
//   borderColor: "#2196f3",
// };

// const acceptStyle = {
//   borderColor: "#00e676",
// };

// const rejectStyle = {
//   borderColor: "#ff1744",
// };
// eslint-disable-next-line valid-jsdoc
/**
 *  The Modal component
 * @return {component} the Modal component
 */
function Drag(props) {
  if (!props.open) return null;

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
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({onDrop, accept: "image/*", noClick: true, noKeyboard: true});

  // const style = useMemo(() => ({
  //   ...baseStyle,
  //   ...(isFocused ? focusedStyle : {}),
  //   ...(isDragAccept ? acceptStyle : {}),
  //   ...(isDragReject ? rejectStyle : {}),
  // }), [
  //   isFocused,
  //   isDragAccept,
  //   isDragReject,
  // ]);

  return (


    <div className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop photos here</p>
        <button type="button" onClick={open}>
        Browse Files
        </button>
        <p {...getRootProps({
          onClick: props.onClose,
          role: "presentation",
        })}>X</p>
      </div>
    </div>
  );
}

export default Drag;
