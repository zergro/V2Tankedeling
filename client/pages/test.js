import { useState } from 'react';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

<<<<<<< Updated upstream
const Createtest = () => {
  const [value, setValue] = useState('');
=======
const Createtest = () => (
  <div className="container pt-8 mx-auto"style={{  width: 2000 }}>
    <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
  </div>
);
>>>>>>> Stashed changes

  return (
    <div className="container pt-8 mx-auto">
      <QuillNoSSRWrapper
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
        theme="snow"
      />
    </div>
  );
};

export default Createtest;
