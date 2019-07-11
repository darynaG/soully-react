import React from 'react';


class Mood extends React.Component {



  render() {
    let imgElement;
    let showlabel;
    if (this.props.selected === this.props.mood) {
      imgElement =<img  src={this.props.imgClicked} alt=''/>;
      showlabel = "showLabel";
    }
    else {
      imgElement = <img className={this.props.mood} src={this.props.img} alt=''/>
      showlabel = "hideLabel";
    }
    return (
      <div className="flex-item" >
        <label>
          <input className="hide"
            name="mood"
            type={this.props.type}
            value={this.props.mood}
            onChange={this.props.onClick}
          />
          {imgElement}
          <h6 className={showlabel} > {this.props.mood}</h6>
        </label>
      </div>
    );
  }
}

export default Mood
