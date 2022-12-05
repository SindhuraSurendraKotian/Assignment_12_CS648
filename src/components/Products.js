import React, {Component} from 'react';
import '../App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
  '1': {id: 1, category: 'Clothing', price: '$100', name: 'Old Navy'},
  '2': {id: 2, category: 'Jacket', price: '$100', name: 'Columbia'},
  '3': {id: 3, category: 'Books', price: '$225', name: 'Title'},
  '4': {id: 4, category: 'Watch', price: '$200', name: 'Rolex'},
  '5': {id: 5, category: 'Car', price: '$7000', name: 'BMW'},
  '6': {id: 6, category: 'Bike', price: '$1500', name: 'Ninja'},
  '7': {id: 7, category: 'Housing', price: '$2000', name: 'Wadrobe'},
  '8': {id: 8, category: 'Laptop', price: '$1500', name: 'Apple'}
};


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products : PRODUCTS,
        filterText : ''
      }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  handleSave = (product) => {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      products[product.id] = product
      return { products }
    });

  }

  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}


  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h1>Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Product;