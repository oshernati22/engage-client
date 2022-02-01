import React, { useEffect, useState } from "react";
import data from "../../Data/data.json";
import BooksForm from "../BooksForm/BooksForm";
import Books from "../BooksList/Books";

const booksData = JSON.parse(JSON.stringify(data));

const Library = () => {
  const [booksList, setBooksList] = useState(booksData);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {showForm ? (
        ""
      ) : (
        <button onClick={() => setShowForm(true)}> add form </button>
      )}
      {showForm && <BooksForm setBooksList={setBooksList} />}
      <Books
        booksList={booksList}
        setShowForm={setShowForm}
        setBooksList={setBooksList}
      />
    </div>
  );
};

export default Library;
