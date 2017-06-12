var React=require('react');

function Main(props){
        return(
            <div className="container">
                {props.children}
            </div>
        )
    }
module .exports=Main;