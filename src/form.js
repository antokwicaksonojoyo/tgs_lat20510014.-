class From extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            nama: ''
        }
    }
mySubmitHandler = (event) => {
    event.preventDefault();
    window.alert("Nama kamu: " + this.state.nama);
}

myKeyUpHandler = (event) => {
    this.setState({nama: event.target.value});
}
render(){
    return (
        <div>
            <from onSubmit={this.mySubmitHendler}>
                <p>Masukkan nama lalu kirim</p>
                <input type="text" onKeyUp={this.myKeyUpHandler}/>

                <p>Kamu mengetik {this.state.nama}</p>
                <input type="submit" value="Kirim"/>
            </from>
        </div>
        );
    }
}
ReactDOM.render(<Form/>, document.getElementById('root'));