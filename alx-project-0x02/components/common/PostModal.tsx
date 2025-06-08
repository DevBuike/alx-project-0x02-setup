import React, { useState } from 'react';
import { PostModalProps } from '@/interfaces';

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
            onSubmit({ title, content });
            setTitle('');
            setContent('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal grid place-items-center inset-0 fixed justify-center bg-black bg-opacity-50 ">
            <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-96">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3 className="text-black text-xl font-bold mt-3"> Creat a new post</h3>
                        <input className='bg-gray-500 rounded p-2 mt-2'
                            placeholder="Title"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="mt-2" htmlFor="content">Content</label><br/>
                        <textarea className='bg-gray-500 rounded p-2 mt-1'
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <button className='bg-blue-500 p-2 rounded mt-1 hover:bg-blue-600' type="submit">Submit</button>
                    <button className='bg-blue-500 p-2 rounded mt-1 ml-2 hover:bg-blue-600' type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default PostModal;