class From extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            nama: '',
            umur: '',
            errormsg: ''
        }
    }

    myKeyUpHandler = (event) => {
        let nama = event.target.name;
        let nilai = event.target.value;

        if(nama==="umur"){
            if(nama !="" && !Number(nilai)) this.setState({errormsg: "Umur harus berupa angka"});
        }

        if(nilai) this.setState ({ [nama] : nilai});
    }

    render() {
        return (
            <div>
                <from>

                    <p>Masukkan nama: </p>
                    <input type="text" name="nama" onKeyUp={this.myKeyUpHandler}/>

                    <p>Masukka umur:</p>
                    <input type="text" name="umur" onKeyUp={this.myKeyUpHandler}/>

                    <p style={{color: 'red'}}>{this.state.errormsg}</p>

                </from>
            </div>
        );
    }
}
ReactDOM.render(<Form/>, document.getElementById('root'));