"use client";

import { useEffect, useState } from 'react';

interface Cat {
  id: string;
  text: string;
  img: string;
}

const About = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentCat, setCurrentCat] = useState<Cat | null>(null);
  const [newCat, setNewCat] = useState<Cat>({ id: '', text: '', img: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6646f54251e227f23ab0671c.mockapi.io/todo');
        const data = await response.json();

        if (Array.isArray(data)) {
          setCats(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async () => {
    try {
      const response = await fetch('https://6646f54251e227f23ab0671c.mockapi.io/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCat),
      });
      const addedCat = await response.json();
      setCats([...cats, addedCat]);
      setNewCat({ id: '', text: '', img: '' });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleEdit = (cat: Cat) => {
    setIsEditing(true);
    setCurrentCat(cat);
  };

  const handleUpdate = async () => {
    if (!currentCat) return;
    try {
      const response = await fetch(`https://6646f54251e227f23ab0671c.mockapi.io/todo/${currentCat.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentCat),
      });
      const updatedCat = await response.json();
      setCats(cats.map(cat => (cat.id === updatedCat.id ? updatedCat : cat)));
      setIsEditing(false);
      setCurrentCat(null);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (!confirmed) return;

    try {
      await fetch(`https://6646f54251e227f23ab0671c.mockapi.io/todo/${id}`, {
        method: 'DELETE',
      });
      setCats(cats.filter(cat => cat.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="container mx-auto p-4"><br /><br /><br />
      <h1 className="text-2xl font-bold mb-4">About</h1>
      
      {isEditing ? (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Edit text"
            value={currentCat?.text || ''}
            onChange={(e) => setCurrentCat({ ...currentCat, text: e.target.value } as Cat)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Edit image URL"
            value={currentCat?.img || ''}
            onChange={(e) => setCurrentCat({ ...currentCat, img: e.target.value } as Cat)}
            className="border p-2 mr-2"
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded-md">Update</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2">Cancel</button>
        </div>
      ) : (
        <div className="mb-4">
          <input
            type="text"
            placeholder="New text"
            value={newCat.text}
            onChange={(e) => setNewCat({ ...newCat, text: e.target.value })}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="New image URL"
            value={newCat.img}
            onChange={(e) => setNewCat({ ...newCat, img: e.target.value })}
            className="border p-2 mr-2"
          />
          <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100 border-b">
          <div className="col-span-1 font-bold">Image</div>
          <div className="col-span-1 font-bold">Text</div>
          <div className="col-span-1 font-bold">Actions</div>
        </div>
        {Array.isArray(cats) ? (
          cats.map((cat) => (
            <div key={cat.id} className="grid grid-cols-3 gap-4 p-4 border-b">
              <div className="col-span-1">
                <img className="w-full h-70 object-cover" src={cat.img} alt={cat.text} />
              </div>
              <div className="col-span-1 flex items-center border-l px-4">
                <p className="text-lg">{cat.text}</p>
              </div>
              <div className="col-span-1 flex items-center space-x-2 border-l px-4">
                <button onClick={() => handleEdit(cat)} className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">Edit</button>
                <button onClick={() => handleDelete(cat.id)} className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4">No data available</div>
        )}
      </div>
    </div>
  );
}

export default About;
