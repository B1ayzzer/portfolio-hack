import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";
import './AddTopic.css'

const AddTopic = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [descriptionSec, setDescriptionSec] = useState("");

  const { addMainTopic } = useContext(productsContext);

  function handleAddTopic() {
    const newTopic = {
      image: [image],
      description: description,
      descriptionSec: descriptionSec,
      fullName: fullName,
    };
    addMainTopic(newTopic);
  }

  return (
    <div className="add-topics">
      <input
        name="full name"
        onChange={(e) => setFullName(e.target.value)}
        placeholder="ФИО"
        type="text"
      />
      <input
        name="image"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Изображение"
        type="text"
      />
      <input
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Описание"
        type="text"
      />
      <input
        name="descriptionSec"
        onChange={(e) => setDescriptionSec(e.target.value)}
        placeholder="Тема"
        type="text"
      />
      <Link align="center" to="/">
        <button  className="add-btn" onClick={handleAddTopic}>Добавить</button>
      </Link>
    </div>
  );
};

export default AddTopic;
