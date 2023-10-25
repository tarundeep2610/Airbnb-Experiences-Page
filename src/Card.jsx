import Star from './assets/Star 1.png';
// import Img_2 from './assets/img2.jpeg';

export default function Card({...card_details}){
    let activityStatus;
    if(card_details.item.openSpots===0){
        activityStatus='SOLD OUT';
    }
    else if(card_details.item.isOnline){
        activityStatus= 'ONLINE';
    }

    return (
        <div className="card">
            <div className="img-section">
                <img src={card_details.item.imgSrc}></img>
                {activityStatus && <div className="status">
                    <div>{activityStatus}</div>
                </div>}
            </div>
            <div className="rating">
                <img src={Star} id='star-img'></img>
                <p>{card_details.item.rating}</p>
                <span>({card_details.item.ratingCount}) - {card_details.item.location}</span>
            </div>
            <div className="exp-name">{card_details.item.exp_name}</div>
                <div className="cost">
                    <strong>From ${card_details.item.price}</strong> / person
                </div>
        </div>
    );
}