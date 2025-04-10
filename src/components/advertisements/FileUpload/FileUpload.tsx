// import React, { useState } from "react";

// interface FileUploadProps {
//   onUpload: (files: File[], mainPhotoIndex: number) => void;
// }

// const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
//   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
//   const [mainPhotoIndex, setMainPhotoIndex] = useState<number | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setSelectedFiles(Array.from(event.target.files));
//     }
//   };

//   const handleMainPhotoChange = (index: number) => {
//     setMainPhotoIndex(index);
//   };

//   const handleSubmit = () => {
//     if (selectedFiles.length > 0 && mainPhotoIndex !== null) {
//       onUpload(selectedFiles, mainPhotoIndex);
//     } else {
//       alert("Виберіть фотографії та вкажіть головну.");
//     }

//     console.log("Selected files:", selectedFiles);
//     console.log("Main photo index:", mainPhotoIndex);
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleFileChange} />
//       {selectedFiles.map((file, index) => (
//         <div key={file.name}>
//           <img
//             src={URL.createObjectURL(file)}
//             alt={file.name}
//             style={{ maxWidth: "100px" }}
//           />
//           <input
//             type="radio"
//             name="mainPhoto"
//             value={index}
//             checked={mainPhotoIndex === index}
//             onChange={() => handleMainPhotoChange(index)}
//           />
//           Головне фото
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Завантажити</button>
//     </div>
//   );
// };

// export default FileUpload;
