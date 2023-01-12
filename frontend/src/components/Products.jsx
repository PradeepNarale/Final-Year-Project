
import React, { useState, useEffect } from 'react'
import "./products.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className='col-md-4'>
              <Skeleton height={350} />
            </div>

            <div className='col-md-4'>
              <Skeleton height={350} />
            </div>

            <div className='col-md-4'>
              <Skeleton height={350} />
            </div>
          </div>
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>

        <div className='filter'>
          <div className='button  mt-5  pb-5'>
            <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Mens </button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Womens</button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct('kids')}>kids</button>
          </div>
          <div>
            <div class="form-group has-search mt-5 ">
              <input type="text" class="form-control" placeholder="Search" />
              <span>
                <Button variant="contained" className='ml-2' >search</Button>
                </span>
            </div>
          </div>
        </div>
        <>  <div className="container">

          <div className="row">
            {
              filter.map((product) => {
                return (
                  <div className="col-md-3 mb-4">
                    <div className="wrapper">
                      <div class="card h-90 text-center p-4" key={product.id} >
                        <img src={product.image} class="card-img-top image" alt={product.title} height="250px" />
                        <div class="card-body">
                          <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                          <p class="card-text lead fw-bold"> $ {product.price}</p>
                          <div className='middle'>
                          <Link to="/product" state={product}><button className='btn btn-outline-dark me-2'>BUY NOW </button></Link> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                );
              })
            }
          </div>
        </div></>
      </>
    )
  }

  return (
    <div>
      <div className='container'>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Product
