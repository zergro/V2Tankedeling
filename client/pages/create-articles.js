import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';
import { useRouter } from 'next/router';

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

      const res = await axios.post('http://localhost:1337/articles', formData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'multipart/form-data',
        },
      }
      ).then(console.log('We are sending a request'));


      router.push(`/posts/${res.data.slug}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center">
        <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitForm}>
            <br />
            <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Create an article</h1>
            <br />
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="name" id="name" type="text" placeholder="Write a title" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Add a photo
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="image" id="imageInput" type="file" placeholder="Write a title"/>
            </div>
          
            <div className="mb-4">

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Article body
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message1" id="message1" type="text" placeholder="Write your text here.." required onChange={(e) => setBody(e.target.value)}></textarea>
            </div>

            
            <div className="flex items-center justify-between">
                <button id="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Create article
                </button>
            </div>
        </form>
    </div>
    </>
  );
}

export default CreateArticles;
