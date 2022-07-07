import React, { Component } from 'react';
import { BudgetConsumer } from '../infopage';


class InputBudget extends Component {

    state = {
        budget: ''
    }
    handleInput = (e) => {
        this.setState({ budget: e.target.value })
    }
    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_BUDGET",
            budget: this.state.budget
        })
    }
    render() {
        return (
            <BudgetConsumer>
                { value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb-3">
                            <label style={{fontSize: 17, fontWeight: 700}}>Total Budget</label>
                            <form className="form-inline">
                            <input
                                onChange={this.handleInput}
                                value={this.state.budget}
                                className="form-control"
                                type="number"
                             />
                            <button onClick={this.handleSubmit.bind(this,dispatch)} style={{backgroundColor: '#FFE7D0', borderRadius: 8, margin: 12, fontWeight: 700}}>Submit</button>
                            </form>
                             </div>
                    )
                }}
            </BudgetConsumer>
        )
    }
}

export default InputBudget