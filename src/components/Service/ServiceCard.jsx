

const ServiceCard = ({service}) => {
    const {id,image,name,description} = service || {}
    return (
        <div>
            <h1>{name}</h1>
            <h1>{description}</h1>
        </div>
    );
};

export default ServiceCard;