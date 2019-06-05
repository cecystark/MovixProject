import React from 'react';
import './styles/Badge.css';

class BadgeDiscount extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_news">
          <div className="Badge_discounts">
            <div className="Badge_offer_text">
              <h1 >30% OFF!</h1>
              <h3>Registrate y obtené junto a tu credencial Club Del Cine increíbles descuentos!</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDiscount;
