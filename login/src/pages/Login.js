import React from 'react';
import Navbar from '../components/login/Navbar';
import '../components/login/styles/BadgeNew.css';
import BadgeDiscount from '../components/login/BadgeDiscount';
import BadgeForm from '../components/login/BadgeForm';
import BadgeLogin from '../components/login/BadgeLogin';
import BadgeKit from '../components/login/BadgeKit';
import BadgeNewsHeader from '../components/login/BadgeNewsHeader';
import Footer from '../components/login/Footer';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
            <Navbar/>
            <div className="BadgeNew__hero">                   
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-12 col-lg-6 col-md-12">
                            <BadgeNewsHeader/>
                            <BadgeDiscount/>
                            <BadgeKit/>
                        </div>
                        
                        <div className="col-xs-6 col-sm-12 col-lg-6 col-md-12">
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