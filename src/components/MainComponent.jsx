import React from 'react';

class MainCompoenent extends React.Component {
    state = { products: [] }
    render() { 
        return (<> <h1>Hi Main</h1> 
            <input type="button" onClick={this.getProducts} value="get producs"></input>
            <ul>
                {this.state.products.map(x => 
                    <li>{x.name}</li>
                )}
            </ul>
        </>);
    }

    getProducts = async () => {
        var token = localStorage.getItem("token")
        var res = await fetch("http://localhost:3333/products", {
            headers: {
                "Authorization": "Bearer " + token
            }
        }
        )
        var products = await  res.json();

        this.setState({
            products: products
        })
    }
}
 
export default MainCompoenent;