import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ['link', 'image', 'video'],
    [{ list: 'ordered' }, { list: 'bullet' }],
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

  const strAmountOfWord = JSON.stringify(body);

  function WordCount(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, ''); //exclude  start and end white-space
    return str.split(' ').filter(function (n) {
      return n != '';
    }).length;
  }
  const wordCount = WordCount(strAmountOfWord) - 1;

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

      router.push(`/articles/${res.data.slug}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="justify-center mt-20">
        <div className="mx-96">
          <form id="form" className="px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
            <div className="mb-4">
              <input
                className="w-full leading-tight text-4xl text-black border-none rounded appearance-none focus:outline-none focus:shadow-outline"
                name="name"
                id="name"
                type="text"
                placeholder="Write a title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* <div className="mb-4">
              <input
                className="w-full border-none rounded appearance-none focus:outline-none focus:shadow-outline"
                name="image"
                id="imageInput"
                type="file"
              />
            </div> */}
            <div className="mb-4">
              <QuillNoSSRWrapper
                modules={modules}
                formats={formats}
                value={body}
                onChange={setBody}
                theme="snow"
                placeholder="Write your story here"
              />
            </div>
            {wordCount} words.
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
      </div>
    </>
  );
}

export default CreateArticles;
