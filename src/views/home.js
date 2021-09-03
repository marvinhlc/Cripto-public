import React,{useState,useEffect,useCallback,memo} from 'react';
import {Dashboard} from '../components/index'

function Home(){

    const handleNavigate = ({data}) => {
        //event.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <Dashboard onNavigate={handleNavigate} />
        </div>
    );
}

export default memo(Home);