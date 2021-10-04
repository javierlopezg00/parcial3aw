import React from 'react'
import axios from "axios";



export default class Axios extends React.Component{


    constructor(props){
        super(props);
        this.state={
            emp_no: ''
        }
    }

    componentDidMount(){
        const url = './test.json';

        axios.get(url).then(response => response.data)
    	.then((data) => {
            this.setState({
                employees: data,
                emp_no : data.emp_no
            })
            console.log(this.state.employees);
            console.log(this.state.emp_no);

        });
    }

    render(){
        return(
           <div>
                <table>
                    <tr>
                        <th>emp_no</th>
                    </tr>
                    <tr>
                        <td>{this.state.emp_no}</td>


                    </tr>
                </table>
           </div> 
        );
    }
}



