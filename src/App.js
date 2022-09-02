
import ItemListContainer from './components/ItemListContainer,';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <>

      <NavBar />
      <ItemListContainer saludo="ItemListContainer" />
      <ItemCount />

    </>
  );
}

export default App;

