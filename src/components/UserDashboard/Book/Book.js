import React from 'react';
import creditCard from '../../../images/icon/credit-card.png';
import payPal from '../../../images/icon/paypal.png';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const Book = () => {
     
    return (
        <section className="container-fluid row">

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Book</h5>
                <form  >
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <small>Pay with</small>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <img src={creditCard} alt="" /> Credit Card
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            <img src={payPal} alt="" /> payPal
                        </label>
                    </div>
                    <div>
                         <ProcessPayment ></ProcessPayment>
                    </div>
                </form>
            </div>



        </section>
    );
};

export default Book;