import React, { useState, useEffect } from 'react';
import './style/single_pro.css';
import Single_pro_data from '../../components/singilePro/single_pro_data/Single_pro_data';
import You_might_also_like from '../../components/singilePro/you_might_also_like/You_might_also_like';
import Info_data_single_pro from '../../components/singilePro/info_data_single_pro/Info_data_single_pro';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../store/products/apiPro';

const Single_pro = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { singlePro } = useSelector(state => state.pro)

    document.title = `${singlePro.namePro}`;



    useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(getProductById(id))
    }, [id]);


    return (
        <>
            <section className="single_pro">
                <Single_pro_data data={singlePro} />
                <Info_data_single_pro dataPro={singlePro} />
                <You_might_also_like categoryPro={singlePro} />
            </section>
        </>
    )
}

export default Single_pro