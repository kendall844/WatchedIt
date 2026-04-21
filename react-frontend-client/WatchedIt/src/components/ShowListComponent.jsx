import React, { useState, useEffect } from 'react';
import ShowService from '../ShowService';
import { Link, useParams } from 'react-router-dom';

const ShowListComponent = () => {
    const { type } = useParams();
    const [shows, setShows] = useState([]);

    useEffect(() => {
        if (type) {
            ShowService.getShowByType(type).then((res)=>{
                setShows(res.data);
                document.title = `List of ${type}`;
            });
        }else{
             ShowService.getShows().then((res)=>{
                setShows(res.data);
                document.title = `All Shows`;
            });
        }
    }, [type]);
    
}