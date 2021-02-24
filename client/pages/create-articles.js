import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';
import { useRouter } from 'next/router';
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

function CreateArticles() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    // TODO: Validate data

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      formData.append(
        'files.image',
        document.getElementById('imageInput').files[0]
      );
      const jwt = localStorage.getItem('jwt');

      const res = await axios
        .post('http://localhost:1337/articles', formData, {
          headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(console.log('We are sending a request'));

      router.push(`/posts/${res.data.slug}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <form
          id="form"
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          onSubmit={submitForm}
        >
          <br />
          <h1 className="block mb-2 text-xl font-bold text-center text-gray-700">
            Create an article
          </h1>
          <br />
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Title
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="name"
              id="name"
              type="text"
              placeholder="Write a title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Add a photo
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="image"
              id="imageInput"
              type="file"
              placeholder="Write a title"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Article body
            </label>
            {/* <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="message1" id="message1" type="text" placeholder="Write your text here.." required onChange={(e) => setBody(e.target.value)}></textarea> */}
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              value={body}
              onChange={setBody}
              theme="snow"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              id="submit"
              className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create article
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateArticles;
