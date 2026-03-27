import {useState} from 'react';
import Child from './Child.jsx';

function Parent(){
const [cat, setCat] = useState({
    catName: 'Anna',
    imageURL: 'https://cataas.com/cat?width=500&height=500'
});

    return (
    <div>
    <h1 style={{
    backgroundColor: 'rgb(78, 136, 124)',
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Garamond',
    fontSize: '50px',
    padding: '40px',
    textAlign: 'center',
    margin: '40px',
    borderRadius: '20px'
    }}>
    My Cool Website!!</h1>
    <Child 
    catName={cat.catName}
    imageURL={cat.imageURL}
    setCat={setCat}
    />
    </div>

    );
}
export default Parent;