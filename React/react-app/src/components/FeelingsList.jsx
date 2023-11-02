import '../FeelingsList.css'


function FeelingsList(props) {
    
    // destructuring
    const { feelings } = props;
//generating a collection of list items to be used below by mapping over an array.  We give each item a key so that they are unique.  When we have lists in react, each item needs to be unique.
    const f_list = feelings.map((el, index) => {
        return <li key={index}>{el}</li>
    })
    return (
        <ul>
            {f_list}
        </ul>
    )
}

export default FeelingsList;