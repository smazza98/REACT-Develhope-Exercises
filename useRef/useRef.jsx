import React, { useRef, useEffect } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    console.log("formData", formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Model:
        <input type="text" name="model" defaultValue={initialData.model} />
      </label>

      <label>
        Year:
        <input type="text" name="year" defaultValue={initialData.year} />
      </label>

      <label>
        Color:
        <input type="text" name="color" defaultValue={initialData.color} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CarDetails;
