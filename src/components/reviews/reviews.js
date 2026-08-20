
import './reviews.css';

export function Reviews() {
    return (

        <div className="reviews">
            <div className="comments">
                <p>
                    <span className="stars">★★★★★ </span>
                    <span className="text">5.0 in Google</span>

                </p>
                    
                    <span className="comment">“We had a great experience with Altura Landscapes! They have completed the landscaping for our backyard, and we couldn’t be happier with the results.”</span>
                    <span className="text">Ghassan Sammour - ON</span>
                
            </div>
            <div className="data">
                <p className="item">
                    <span className="title">300+</span>
                    <span className="desc">Completed projects</span>
                </p>
                <p className="item">
                    <span className="title">5.0</span>
                    <span className="desc">Google rating</span>
                </p>
                <p className="item">
                    <span className="title">6+</span>
                    <span className="desc">Years of experience</span>
                </p>
                <p className="item">
                    <span className="title">100%</span>
                    <span className="desc">Satisfied clients</span>
                </p>


            </div>
        </div>
    );
}

