import React from 'react';

export default function useForm(){
    const onChangeDetails = () => {
        console.log('hola')
    }

    return {
        onChangeDetails
    }
};
