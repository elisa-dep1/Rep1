import './work.css'
function Cards() {
    return (
        <div className='card'>
            
        </div>
    )

}

export default function Work() {
    return (
        <div className="work-seccion">
            <span id='text1'>OUR WORK</span>
            <span id='text2'>Discover Our Project Transformations</span>
            <hr className='line'/>
            <div className='container-card'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                
            </div>
           
        </div>
    )

}