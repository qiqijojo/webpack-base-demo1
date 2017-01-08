import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

class PersonItem extends Component {
  render() {
    let {name, image} = this.props;
    return (
        <div className="text-center col-xs-3">
          <a className="text-center thumbnail" href="#" >
            <img src={image} alt="..."/>
          </a>
          <div>{name}</div>
        </div>
    );
  }
}

export default PersonItem;