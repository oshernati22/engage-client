import React, { useEffect, useState } from "react";
import MaterialTable from "@material-table/core";
import data from "../../Data/data.json";

const Books = ({ booksList, setBooksList }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    { title: "Book Name", field: "name" },
    { title: "Author", field: "author" },
    // { title: "PublicationDate", field: "publicationDate", hidden: switcher },
  ];

  const rows = booksList.books.map((book) => {
    return {
      author: book.authorName,
      name: book.bookName,
      publicationDate: book.publicationDate,
      coverPhoto: book.coverPhoto,
      catalogNumber: book.catalogNumber,
      id: book.catalogNumber,
    };
  });

  const handleDelete = () => {
    if (selectedRows) {
      for (const row of selectedRows) {
        booksList.books = booksList.books.filter((book) => {
          return !(book.catalogNumber === row.catalogNumber);
        });
      }
      const buffer = { ...booksList };
      setBooksList(buffer);
    }
  };

  return (
    <div>
      <MaterialTable
        columns={columns}
        title={"Engage Library Management Application"}
        data={rows}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        options={{
          selection: true,
        }}
        detailPanel={(rowData) => {
          return (
            <div className="detailsContainer">
              <div> Book name : {rowData.rowData.name}</div>
              <div> Author name : {rowData.rowData.author}</div>
              <div> Publication date : {rowData.rowData.publicationDate}</div>
              <div>
                {" "}
                <img className="img" src={rowData.rowData.coverPhoto}></img>
              </div>
              <div> Catalog Number : {rowData.rowData.catalogNumber}</div>
            </div>
          );
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete Selected Rows ",
            onClick: () => handleDelete(),
          },
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // if (!checkIfValid(newData.address) || newData.port > 65535) {
                //   alert("not valid");
                //   return reject();
                // }

                console.log(oldData, newData);
                booksList.books = booksList.books.filter((book) => {
                  return !(book.catalogNumber === oldData.catalogNumber);
                });
                console.log(newData);
                booksList.books.push({
                  authorName: newData.author,
                  bookName: newData.name,
                });
                const buffer = { ...booksList };
                setBooksList(buffer);

                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
};

export default Books;
