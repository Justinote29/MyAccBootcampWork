//importing a Child component
import FeelingsList from './FeelingsList'
import '../Garfield.css'


//Our function (parent component to FeelingsList), props come from the array we made and passed to garfield component within app component
function Garfield(props) {
    //create image variable
    const image = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/19/16/garfield-4-0.jpg"
    
    //return JSX, including FeelingsList component

    return (
        <div className="theImage">
            <h1 className="name">Garfield's Life</h1>
            {/*embedding our image*/}
            <img src={image} alt="Garfield Comic" />
            {/*child component*/}
            <FeelingsList feelings={props.feelings} />
        </div>
    );
}
//export component
export default Garfield;