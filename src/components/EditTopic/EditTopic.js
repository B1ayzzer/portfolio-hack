import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductContext";
import './EditTopic.css'

const EditTopic = () => {
  const { data, editTopicDetails } = useContext(productsContext);

  const [fullName, setFullName] = useState(data.fullName);
  const [image, setImage] = useState(data.image);
  const [description, setDescription] = useState(data.description);
  const [descriptionSec, setDescriptionSec] = useState(data.descriptionSec);

  function handleEditProduct() {
    const obj = {
      fullName: fullName,
      image: [image],
      descriptionSec,
      description,
    };

    editTopicDetails(obj);
  }
  // data это наша свами карточа
  return (
    <>
      <div className="edit-topic" >
        {data ? (
          <div className="edit-topic" >
            <input
              type="text"
              placeholder="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="img URL"
              value={image}
              onChange={(e) => setImage([e.target.value])}
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="descriptionSec"
              value={descriptionSec}
              onChange={(e) => setDescriptionSec(e.target.value)}
            />
            <Link align='center' to="/">
              <button onClick={handleEditProduct}>Save</button>
            </Link>
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default EditTopic;
