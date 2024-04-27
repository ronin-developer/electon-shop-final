import React from 'react'

function FooterListComponent({ title, items }) {
    return (
        <div className="flex flex-col gap-[10px]">
            <h3 className="text-2xl text-primaryBlue font-bold">{title}</h3>
            {items.map((el, index) => {
                return <ul key={index}><li className="text-[19px] text-primaryBlue">{el}</li></ul>
            })}
        </div>
    )
}

export default FooterListComponent