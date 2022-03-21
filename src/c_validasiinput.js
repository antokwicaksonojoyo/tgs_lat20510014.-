class From extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            moto: 'Vini, Vidi & Vici',
            hobi: 'Koleksi Burung'
        }
    }

    render() {
        return(
            <div>
                <from>
                 <p>Moto:</p> 
                 <textarea value={this.state.moto}/>

                 <p>Hobi:</p>
                 <select defaultValue={this.state.hobi}>
                    <option>Ternak Hewan</option>     
                    <option>Jogging</option> 
                    <option>Nonton Review Film</option> 
                    <option>Belajar Hal Baru</option> 
                </select>  
                </from>
            </div>
        );
    }
}
ReactDOM.render(<Form/>, document.getElementById('root'));