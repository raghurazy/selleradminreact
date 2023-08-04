import React,{useState} from 'react';
import './App.css';
import Product from './Component/Product';
import ItemList from './Component/ItemList';

function App() {
  const [productList, setProductList] = useState([]);
  const addProductHandler = (pId, pName, pPrice, pCategory) => {
    setProductList((prev) => {
      return [
        ...prev,
        {
          productid: pId,
          name: pName,
          price: pPrice,
          category: pCategory,
          id: Math.random().toString(),
        },
      ];
    });

    localStorage.setItem(pId, [pName, pPrice, pCategory]);
  };
  const deleteProduct = (e) => {
    const data = e.target.id
    setProductList(()=>{
      return productList.filter(item=> item.productid !== data)
    })
    localStorage.removeItem(data)
    
  };

  return (
    <div>
      <Product
        onAddproduct={addProductHandler}
        
      />
      <ItemList products={productList} onDeleteProduct={deleteProduct} />
    </div>
  );
};
export default App;