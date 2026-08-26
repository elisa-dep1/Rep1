import './allServices.css'

function CardServices({ num, category, title, description }) {
    return (
        <div className='cardService'>
            <span className='category'>
                {num} / {category}
            </span>
            <span className='title-card'>
                {title}
            </span>
            <span className='description-card'>
                {description}
            </span>
        </div>
    )

}

export default function AllServices() {
    return (
        <>
            
            <div className="residential">
                <span className='text-seccion'>
                    RESIDENTIAL
                </span>
                <span className='title-seccion'>
                    Transform your home outdoors.
                </span>
                <span className='description-seccion'>
                    Functional, durable and visually polished landscapes designed around the way your family uses the property.
                </span>
                <div className='cards'>
                    <CardServices num='01' category='HARDSCAPE' title='Interlocking & Patios' description='Custom patios, walkways, landings and steps with proper excavation, base preparation, drainage and finishing for long-term performance.' />
                    <CardServices num='02' category='STRUCTURES' title='Fences & Gates' description='Privacy, semi-privacy, shadowbox and custom treated-wood fencing with strong posts, clean lines and built-to-last gates.' />
                    <CardServices num='03' category='RETAINING' title='Retaining Walls' description='Armour stone and garden retaining walls engineered to manage grade changes, improve usable space and add structure to the landscape.' />
                    <CardServices num='04' category='GREENERY' title='Sod & Planting' description='Professional sod replacement, soil preparation, trees, cedars, shrubs, perennials, mulch and decorative stone installations.' />
                    <CardServices num='05' category='OUTDOOR LIVING' title='Decks & Pergolas' description='Treated-wood decks, pergolas and outdoor structures that create comfortable, practical spaces for entertaining and relaxing.' />
                    <CardServices num='06' category='CLEANUP' title='Property Cleanup' description='Seasonal and project-based cleanup including overgrowth removal, pruning, debris removal, grading preparation and landscape refreshes.' />
                    <CardServices num='07' category='WINTER SERVICES' title='Residential Snow Removal ' description='Professional snow removal designed to give homeowners peace of mind throughout the winter. We focus on fast response, thorough clearing, and safe access to your home.' />

                </div>
            </div>
            <div className="commercial">
                <span className='text-seccion'>
                    COMMERCIAL
                </span>
                <span className='title-seccion'>
                    Professional property care.
                </span>
                <span className='description-seccion'>
                    Reliable exterior maintenance and landscape services for commercial properties, property managers, multi-unit sites and businesses.
                </span>
                <div className='cards'>
                    <CardServices num='01' category='MAINTENANCE' title='Commercial Lawn Care' description='Scheduled mowing, trimming, edging and general landscape maintenance to keep properties consistently clean and presentable.' />
                    <CardServices num='02' category='SEASONAL' title='Spring & Fall Cleanup' description='Leaf removal, debris clearing, pruning, bed cleanup and seasonal preparation to keep commercial grounds ready for every season.' />
                    <CardServices num='03' category='ENHANCEMENTS' title='Spring & Fall Cleanup' description='Planting, mulch, decorative stone, sod and targeted landscape upgrades that improve curb appeal without disrupting operations.' />
                    <CardServices num='04' category='HARDSCAPE' title='Repairs & Construction' description='Interlocking repairs, walkways, retaining walls, drainage improvements, grading and exterior construction projects.' />
                    <CardServices num='05' category='PROPERTY CARE' title='Pruning & Vegetation' description='Professional trimming and vegetation control around buildings, parking areas, walkways and common spaces.' />
                    <CardServices num='06' category='MANAGEMENT' title='Scheduled Service Plans' description='Flexible recurring service programs built around property size, site conditions and the standards expected by your tenants and customers.' />
                    <CardServices num='07' category='WINTER SERVICES' title='Commercial Snow Removal ' description='A professional winter maintenance solution designed to keep commercial properties operational, accessible, and safe during snow and freezing conditions.' />

                </div>
            </div>
        </>

    )
}