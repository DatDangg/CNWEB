import { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import ListProductDetail from './components/ListProductDetail/ListProductDetail';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [selectedSellers, setSelectedSellers] = useState([]);
    const [selectedRating, setSelectedRating] = useState({ min: 0, max: 6});

    const handleRatingChange = (minRating, maxRating) => {
      setSelectedRating({ min: minRating, max: maxRating });
      // console.log(minRating, maxRating);
    };


    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        // console.log(newFilter);
    };

    const handleSellerChange = (sellers) => {
        setSelectedSellers(sellers);
        // console.log(sellers);
    };


    return (
      <BrowserRouter>
        <Route exact path="/">
          <div className="app">
          <Header onSearch={handleSearch} />
            <div className="flex justify-between">
                <Aside onFilterChange={handleFilterChange} onSellerChange={handleSellerChange} onRatingChange={handleRatingChange} />
                <ProductList searchTerm={searchTerm} filter={filter} selectedSellers={selectedSellers} selectedRating={selectedRating} />
            </div>
            <Footer />
          </div>
        </Route>

        <Route path="/:id">
          <div className="app">
            <ListProductDetail/>
          </div>
        </Route>
      </BrowserRouter>
    );
}

export default App;
