import React from "react";
import "./booksForm.scss";

const BooksForm = ({ setBooksList, setShowForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="label__container">
          <input
            className="input"
            type="text"
            name=" author"
            placeholder="Enter Author Name"
          />
        </div>
        <div className="label__container">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Enter Book Name"
          />
        </div>
        <div className="label__container">
          <input
            className="input"
            type="text"
            name="date"
            placeholder="Enter Publication date"
          />
        </div>
        <div className="label__container">
          <input
            placeholder="Upload File"
            className="input"
            type="file"
            name="img"
            placeholder="Enter Cover photo"
          />
        </div>
        <div className="label__container">
          <input
            className="input"
            type="text"
            name="catalog"
            placeholder="Enter Catalog Number"
          />
        </div>

        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
