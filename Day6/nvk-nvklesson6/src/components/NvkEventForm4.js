import React, { Component } from "react";

class NvkEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            NvkSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    NvkHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.NvkSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            NvkSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    NvkHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.NvkSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.NvkSelectCheckBox.includes("Apple")}
              onChange={this.NvkHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.NvkSelectCheckBox.includes("Banana")}
              onChange={this.NvkHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.NvkSelectCheckBox.includes("Orange")}
              onChange={this.NvkHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.NvkHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NvkEventForm4;