import React from 'react';

const NewsList = (props) => {
    // console.log(props.newsdata, "================");
    const renderList = props.newsdata.bookings.map((data) => {
        return (
            <div key={data.id}>
                <h4>{data.hotelName}</h4>
                <hr />
                <h4>{data.name}</h4>
                <h4>{data.bookingDate}</h4>
                <h4>{data.phone}</h4>
                <h4>{data.status}</h4>
            </div>
        )
    })

    return (
        <div>
            <hr />
            <hr />
            {renderList}
            <hr />
        </div>
    )
}

export default NewsList;
