import React, { useState } from "react";
import SearchBar from "./Components/searchBar";
import BasicTable from "./Components/table";
import FakeJson from "./data.json";
import Container from '@mui/material/Container';


function App() {
  const [data] = useState(FakeJson);
  const [picker, setPicker] = useState([]);

  //API CALL

  // useEffect(() => {
  //   const url = `https://6195803474c1bd00176c6d9a.mockapi.io/api/v1/patient`;

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, [data]);

  const pickedElement = () => {
    const findObject = data.filter(
      (el) => el.fullName === localStorage.getItem("searchQuery")
    );
    setPicker(findObject);
  };

  return (
      <Container> 
        <SearchBar
          placeholder="Search"
          data={data}
          pickedElement={pickedElement}
        />
        <BasicTable picker={picker} />
      </Container>
  );
}

export default App;
