
import React, { Component } from 'react';
import { BudgetConsumer } from '../infopage';

class InputExpenses extends Component {
    state = {
        expenses: [],
        expenseTitle: '',
        amount: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (dispatch,e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_EXPENSES",
            expenses: this.state.expenses
        })
    }
    addExpenses = () => {
        this.setState({
            expenses: [
                ...this.state.expenses,
                { title: this.state.expenseTitle, amount: this.state.amount},
            ],
            expenseTitle: '',
            amount: ''
        })
    }
    render() {
        return (
            <BudgetConsumer>
                { value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body">
                        <form onSubmit={this.handleSubmit.bind(this,dispatch)}>
                        <label style={{fontSize: 17, fontWeight: 700}}>Expenses</label>
                        <input 
                            onChange={this.handleInput}
                            value={this.state.expenseTitle}
                            className="form-control"
                            name="expenseTitle"
                        />
                        <label style={{fontSize: 17, fontWeight: 700}}>Amount</label>
                        <input 
                            onChange={this.handleInput}
                            value={this.state.amount}
                            className="form-control"
                            name="amount"
                        />
                        <button onClick={this.addExpenses} style={{backgroundColor: '#FFE7D0', borderRadius: 8, margin: 12, fontWeight: 700}}>Submit</button>
                        </form>
                        </div>
                    )
                }}
            </BudgetConsumer>
            

        )
    }
}

export default InputExpenses