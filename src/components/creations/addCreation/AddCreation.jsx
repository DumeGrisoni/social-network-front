import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCreation } from '../../../feature/creationSlice';
import { allCreators } from '../../../feature/creatorSlice';
import './addCreation.scss';

const AddCreation = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creatorId, setCreatorId] = useState('');

  // Récuperation de la liste des utilisateurs
  const creators = useSelector(allCreators);

  // Gestion des changements des inputs
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (e) => {
    setDescription(e.target.value);
  };
  const onUserChange = (e) => {
    setCreatorId(e.target.value);
  };
  // Gestion de la sauvegarde et push dans le store
  const onSaveClick = () => {
    if (title && description) {
      dispatch(addCreation(title, description, creatorId));
      setTitle('');
      setDescription('');
    }
  };
  // Validation des champs title, body et userId
  const validation = Boolean(title && description && creatorId);

  // Mapping des utilisateurs pour les afficher dans le select
  const creatorArray = creators.map((creator) => (
    <option key={creator.id} value={creator.id}>
      {creator.name}
    </option>
  ));

  return (
    // Formulaire d'ajout d'un post
    <section className="addCreation">
      <h2>Nouvelle création</h2>
      <form>
        <label htmlFor="postTitle">Titre de l'oeuvre: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postUser">Createur:</label>
        <select id="postUser" value={creatorId} onChange={onUserChange}>
          <option value="">Selectionner un createur</option>
          {creatorArray}
        </select>

        <label htmlFor="postBody">Description de l'oeuvre: </label>
        <textarea
          name="postBody "
          id="postBody"
          value={description}
          onChange={onBodyChange}
        />
        <button type="button" onClick={onSaveClick} disabled={!validation}>
          Enregister
        </button>
      </form>
    </section>
  );
};

export default AddCreation;
