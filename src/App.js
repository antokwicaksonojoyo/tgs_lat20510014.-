import { render } from '@testing-library/react';
import React, { Component } from 'react'

class Hobi extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hobi: "membaca"};
  }
  
  shouldComponentUpdate(){
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prebState){
    windows.alert("Hobi Sebelumnya " + prebState.hobi);
    return true;
  }

  componentDidUpdate(){
    setTimeout(()=> {
      windows.alert("Hobi sekarang " + this.state.hobi)
    }, 1000 )
  }

  ubahHobi = () => {
  this.setState({hobi: "melukis"});
  }

  render() {
    return (
      <div>
        <h1>Hobiku adalah {this.state.hobi}</h1>
        <button onClick= {this.ubahHobi}>Ubah Hobi</button>
      </div>
    );
  }

  
  static getDeriveStateFromProps(props, state){
    return {hobi: props.nama};
  }
  
  componentDidMount(){
    setTimeout(()=> {
      windows.alert("Hobi "+ this.state.hobi)
    }, 1000)
  }
  
  render() {
    return (
      <h1>Hobiku adalah {this.state.hobi}</h1>
    );
  }
}

clas Container extends React.Component {
  constructor (props) {
    super(pros);
    this.state = {show: true}
  }
}

hapusHalo = () => {
  this.setState({show: false});
}

render() {
  let halo;
  if(this.state.show){
    halo = <halo/>;
  }

  return(
    <div>
      {halo}
      <button onClick={this.hapusHalo}>Hapus Halo</button>
    </div>
  );
}

class Halo extends React.Component{
  componentWillUnmount (){
    window.alert("Component Halo akan dihapus");
  }

  render(){
    return <h1> Halo, gimana kabarnya bro?</h1>;
  }
}


class Halo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {nama: "Antok Nurwicaksono"}

    this.tampilKota = this.tampilKota.bind(this);
  }

  tampilUmur = (umur) => {
    window.alert("Nama saya " +this.state.nama+ "berumur" +umur+ "tahun");
  }

  tampilKota(kota){
    window.alert("Nama saya " +this.state.nama+ " berasal dari " +kota);
  }

  render(){
    return(
      <div>
        <button onClick={() => this.tampilUmur(5)}>Tampil Umur</button>
        <button onClick={this.tampilKota.bind(this, "Tega;")}>Tampil Kota</button>
      </div>
    );
  }
}

class Anak extends React.Component{
  render() {

    let $keterangan;
    if(this.props.umur >= 17) $keterangan = "sudah dewasa";
    else $keterangan = "belum dewasa";

    let $kata = this.props.umur >= 17 ? "sudah" : "masih";

    return (
      <h3>
        {this.props.nama} {$keterangan}, karena {$kata} berumur
        {this.props.umur}.

        {this.props.umur >= 17 &&
        <span>  Sudah boleh menggunakan sepeda motor. </span>
        }
      </h3>
    );
  }
}

class List extends React.Component{
  render(){

    let daftarbuku = [
      {id: 1, judul: "7 in 1 Pemrograman Web Untuk Pemula"},
      {id: 2, judul: "7 in 1 Pemrograman Web Tingkat Lanjut"},
      {id: 3, judul: "Mudah Membuat Aplikasi Android dengan Ionic 3"}
    ];

    let daftarebook = [
      "Menguasai React JS untuk Pemula",
      "Menguasai Vue JS untuk Pemula",
      "Menguasai React Native Untuk Pemula"
    ];

    return (
      <div>
        <h4>Daftar Judul Buku</h4>
        <ol>
          {daftarbuku.map((buku)=>
          <li key={buku.id}>
            {buku.judul}
          </li>
          )}
        </ol>

        <h4> Daftar Judul EBook</h4>
        <ol>
          {daftarebook.map((ebook, index)=>
          <li key={index}>
            {ebook}
          </li>
          )}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<List/>, document.getElementById('root'));
ReactDOM.render(<Anak nama="Antok" umur="17"/>, document.getElementById('root'));
ReactDOM.render(<Halo/>, document.getElementById('root'));
ReactDOM.render(<container/>, document.getElementById('root'));
ReactDOM.render(<Hobi nama="menulis"/>, document.getElementById('root'));
ReactDOM.render(<Hobi/>, document.getElementById('root'));
export default App;
