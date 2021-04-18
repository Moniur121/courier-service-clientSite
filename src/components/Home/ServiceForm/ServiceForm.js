import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const ServiceForm = ({ modalIsOpen, closeModal, services }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.service=services;
        console.log(data)
        fetch('https://enigmatic-tor-09306.herokuapp.com/serviceDetails', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment Created Successfully')
                }
            })
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <h2 className="text-center text-info"></h2>
                <form className="p-5 " onSubmit={handleSubmit(onSubmit)}>
                    <h1>{services}</h1>
                    <div className="form-group mb-2">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group mb-2">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-2">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-info mt-3">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ServiceForm;