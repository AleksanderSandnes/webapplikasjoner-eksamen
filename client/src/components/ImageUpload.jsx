import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { upload } from '../utils/imageService';
import { put } from '../utils/articleService';

const ImageUpload = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [src] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (imageData) {
      const fetchData = async () => {
        const { data } = await put(id, { image: imageData._id });
        if (!data.success) {
          setError(data.error);
        }
      };
      fetchData();
    }
  }, [error, imageData, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await upload(file);
    if (!data.success) {
      setError(data.message);
    } else {
      console.log(data);
      setImageData(data?.data);
      setImageId(data?.data?._id);
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        history.push(`/articles/${id}`);
      }, 2000);
    }
  };

  return (
    <>
      {src && <img alt="my" src={src} />}
      {success && <p>Laster opp bilde med id: {imageId}</p>}
      {error && <p>Noe gikk galt med opplastingen</p>}
      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <Label htmlFor="image">Last opp bilde</Label>
        <Input
          type="file"
          id="image"
          name="image"
          accept=".jpg"
          onChange={(event) => {
            console.log(event);
            const imageFile = event.target.files[0];
            setFile(imageFile);
          }}
        />
        <Button type="submit">Lagre</Button>
      </form>
    </>
  );
};

export default ImageUpload;

const Button = styled.button`
  padding: 10px;
  width: 180px;
  height: 50px;
  color: white;
  font-weight: bold;
  background-color: #2c82df;
  margin: 0 20px 0 20px;
  margin-top: 50px;
  margin-left: 800px;
  display: block;
`;

const Label = styled.label`
  margin-left: 800px;
  font-size: 32px;
`;

const Input = styled.input`
  display: block;
  font-size: 25px;
  margin-left: 800px;
`;
