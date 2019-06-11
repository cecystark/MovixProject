import React from 'react';
import Navbar from '../componentsLogin/Navbar';
import '../componentsLogin/styles/BadgeNew.css';
import BadgeDiscount from '../componentsLogin/BadgeDiscount';
import BadgeForm from '../componentsLogin/BadgeForm';
import BadgeLogin from '../componentsLogin/BadgeLogin';
import BadgeKit from '../componentsLogin/BadgeKit';
import BadgeNewsHeader from '../componentsLogin/BadgeNewsHeader';
import Footer from '../componentsLogin/Footer';

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