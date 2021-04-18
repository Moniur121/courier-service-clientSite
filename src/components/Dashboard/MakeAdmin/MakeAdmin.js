import React from 'react';

const MakeAdmin = () => {
    const [admin, setAdmin] = React.useState({});
    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

    const handleSubmit = () => {

        fetch("https://enigmatic-tor-09306.herokuapp.com/makeAdmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
    }

    return (
        <section className="container-fluid row">

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Make Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="mb-3" htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;