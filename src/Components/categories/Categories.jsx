import React from 'react';
import './Categories.css';

const Categories = (props) => {

    const capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    const { categories, filterProduct } = props
    return (
        <div className='--flex-center'>
            {categories.map((category, index) => {
                return (
                    <button
                        key={index}
                        onClick={()=> filterProduct(category)}
                        type='button'
                        className='btn --btn --btn-secondary'>
                        {capitalize(category)}
                        </button>
                )
            })}

        </div>
    )
}

export default Categories