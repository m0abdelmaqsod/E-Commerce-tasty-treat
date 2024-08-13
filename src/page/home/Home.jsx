import React, { useEffect } from 'react';
import './styles/home.css';
import Header from '../../components/home/header/Header';
import Filter_popular_foods from '../../components/home/filter_popular_foods/Fil_popular_foods'
import Why_tasty_treat from '../../components/home/why_tasty_treat/Why_tasty_treat';
import Hot_pizza from '../../components/home/hot_pizza/Hot_pizza'
import Our_services from '../../components/home/our_services/Our_services'
import Testimonials_com from '../../components/home/testimonials_com/Testimonials_com';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/products/apiPro';







const Home = () => {
  document.title = 'Home';
  // ===== set all data products ===== //
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.pro)



  // === start get data === //
  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchProduct());
  }, []);



  // === handel filter Data Hot Pizza === //
  const handelDataHotPizza = products.filter((product) => product.category === "pizza");
  // === handel slice length filter Data Hot Pizza === //
  const handelHotPizza = handelDataHotPizza.slice(0, 4);


  
  return (
    <>
      <section className='home'>
        <Header />
        <Our_services />
        <Filter_popular_foods />
        <Why_tasty_treat />
        <Hot_pizza handelHotPizza={handelHotPizza} />
        <Testimonials_com />
      </section>

    </>
  )
}

export default Home;