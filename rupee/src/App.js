
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Products</h3>

    <section> 
        <Product name="Hp laptop" price="45679rs" origin="Made in america"/>
        <Product  name="lenovo laptop" price="45679rs" origin="Made in India"/>
        <Product  name="macBook pro laptop" price="45679rs" origin="Made in japan"/>
        <Product  name="Asus laptop" price="45679rs" origin="Made in taiwan"/>
      </section>
      
 </div>




  );
}

function Product(props){
  return <div className="product">
    <h2>{props.name}</h2>
    <p>{props.price}</p>
    <p>{props.origin}</p>
  </div>
}

export default App;
