import React,{Component} from 'react';

class HelloWorld extends React.Component {
   constructor (){
     this.state={
       count:0
     }
   }
    render() {

      return (
       <div className="claa1">
          <h1 className='large'>Hello World</h1>
       </div>
      );
    }
  }
export default HelloWorld;
