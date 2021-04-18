import React from 'react';

const BookList = () => {
    const [service, setService] = React.useState([]);
    React.useEffect(() => {
        fetch('https://enigmatic-tor-09306.herokuapp.com/detailService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service)
    return (
        <div className="container bg-manageBooks">
            <div className="title-area d-flex justify-content-between">
                <span>Name</span>
                <span>Email</span>
                <span>Service</span>
            </div>
            <hr />
            <div >
                {
                    service.map(sr => {

                        return <div className="d-flex justify-content-between">
                            <span>{sr.name}</span>
                            <span>{sr.email}</span>
                            <span>{sr.service}</span>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default BookList;