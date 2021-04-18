import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios'

const AddService = () => {
    const [info, setInfo] = React.useState({});
    const [file, setFile] = React.useState(null);
    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const image = new FormData();
        image.set('key', 'fa0671d09ed646de7785a0b91b3d0f5d');
        image.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', image)
            .then(function (response) {
                setFile(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(file);

    const handleSubmit = () => {
        const formData= {
            name: info.name,
            description: info.description,
            file: file
        }
        fetch('https://enigmatic-tor-09306.herokuapp.com/addService', {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" name="file" placeholder="Picture" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Add Service</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;