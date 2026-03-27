
function Child({catName,imageURL,setCat}) {
  async function fetchName() {
    const nameResponse = await fetch('https://randomuser.me/api/');
    const nameJson = await nameResponse.json();
    const user = nameJson.results[0];
    const name = `${user.name.first}`;

  
    

  setCat({
    catName: name,
    imageURL : `https://cataas.com/cat?width=500&height=500&t=${Date.now()}`
  });
}
    return (
        <section>
            <h2 style={{textAlign: 'center',fontFamily: 'Garamond'}}>Look at this Cat :3</h2>
            <p style={{textAlign: 'center', fontFamily: 'Garamond'}}>
                Cat Name: {catName}
            </p>

            {imageURL ? (
                <img
                    src={imageURL}
                    alt='Cat Image'
                    style={{
                        width: '100%', 
                        maxWidth: '500px',
                        borderRadius: '12px',
                        display:'block', 
                        marginLeft: 'auto',
                        marginRight: 'auto' }} 
                        />) : (<p>No image found.</p>)}

            <div style={{ textAlign: 'center', marginTop: 'auto' }}>
        <button 
        type='button' 
        onClick={fetchName}
        style={{
        backgroundColor: 'rgb(78, 136, 124)',
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Garamond',
        fontSize: '20px',
        padding: '10px',
        textAlign: 'center',
        margin: '40px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer'
        }}
        >Load Another Cat</button>
      </div>
        </section>
    );
}

export default Child;