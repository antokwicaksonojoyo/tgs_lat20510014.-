class From extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            nama: '...',
            umur: '...'
        }
    }

    myKeyUpHandler = (event) => {
        let nama = event.target.name;
        let nilai = event.target.value;

    if(nilai) this.setState({ [nama] : nilai});
    else this.setState({ [nama] : "..."});
    }

    render() {
        return(
            <div>
                <from>

                    <p>Masukkan nama: </p>
                    <input type="text" name="nama" onKeyup={this.myKeyUpHandler}/>

                    <p>Masukkan nama:</p>
                    <input type="text" name="umur" onKeyUp={this.myKeyUpHandler}/>

                    <p>Nama kamu {this.state.nama}, berumur{this.state.umur} tahun</p>
                </from>
            </div>
        );
    }
}

ReactDOM.render(<Form/>, document.getElementById('root'));