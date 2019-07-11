import React from 'react';

class Check extends React.Component {


  render() {
    let imgElement;
    let showlabel;

    if (this.props.checked) {
      imgElement = <img className="imgA" src={this.props.imgClicked} alt='' />;
      showlabel = "showLabel";
    } else {
      imgElement = <img className="imgA" src={this.props.img} alt='' />;
      showlabel = "hideLabel";
    }
    return (
      <div className="flex-item"  >
        <label>
          <input className="hide"
            name="activity"
            id={this.props.mood}
            type={this.props.type}
            value={this.props.mood}

            checked={this.props.checked}

            onChange={this.props.onClick}
          />
          {imgElement}
          <h6 className={showlabel} > {this.props.mood}</h6>
        </label>
      </div>
    )
  }
}

export default Check;