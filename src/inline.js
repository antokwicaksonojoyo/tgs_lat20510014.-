class Style extends React.Component {
    render() {
        let kotak = {
            width: 200+"px",
            height: 100+"px",
            marginTop: 20+"px",
            marginLeft: 20+"px",
            backgroundColor:"yellow",
            borderRadius: 10+ "px"
        }

        return(
            <div>
                <h2 style={ {color:"blue", fontFamily:"arial"}}>
                    Inline Style
                </h2>
            <div style={kotak}></div>
            </div>
        );
    }
}
ReactDOM.render(<Style/>, document.getElementById('root'));