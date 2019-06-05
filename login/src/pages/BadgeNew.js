import React from 'react';
import Navbar from '../components/Navbar';
import '../components/styles/BadgeNew.css';
import BadgeDiscount from '../components/BadgeDiscount';
import BadgeForm from '../components/BadgeForm';
import BadgeLogin from '../components/BadgeLogin';
import BadgeKit from '../components/BadgeKit';
import BadgeNewsHeader from '../components/BadgeNewsHeader';
import Footer from '../components/Footer';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">                   
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <BadgeNewsHeader/>
                                <BadgeDiscount/>
                                <BadgeKit/>
                            </div>
                            
                            <div className="col-6">
                                <div className= "BadgeNew__forms__container">
                                    <BadgeForm/>
                                    <BadgeLogin/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BadgeNew;