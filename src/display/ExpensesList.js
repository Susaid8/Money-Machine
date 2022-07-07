import React, { Component } from 'react';
import { BudgetConsumer } from '../infopage'

class ExpensesList extends Component {
    render() {
        return (
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th style={{backgroundColor: '#FFE7D0', color: '#1F170F'}}>Name</th>
                            <th style={{backgroundColor: '#FFE7D0', color: '#1F170F'}}>Amount</th>
                        </tr>
                    </thead>
                    <BudgetConsumer>
                        {value => {
                            const expensesList = value.expenses.length > 0 ? (
                                value.expenses.map((expense, index) => {
                                    return (
                                        <tr key= { index } >
                                            <td> { expense.title } </td>
                                            <td> { expense.amount } </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td>Not Available</td>
                                </tr>
                            )
                            return <tbody> { expensesList } </tbody>
                        }}
                    </BudgetConsumer> 
                </table>
            </div>
        )
    }
}

export default ExpensesList