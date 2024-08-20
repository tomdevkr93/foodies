'use client';
import { ChangeEvent, useRef, useState } from 'react';
import styles from './ImagePicker.module.css';
import Image from 'next/image';

type Props = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function onClickPickerButton() {
    imageInputRef.current?.click();
  }

  function onChangeInputImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result == 'string') {
        setPickedImage(fileReader.result);
      }
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          ) : (
            <p>No Image picked</p>
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={onChangeInputImage}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={onClickPickerButton}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
