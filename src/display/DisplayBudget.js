import React from "react";
import BalanceDisplay from "./BalanceDisplay";
import ExpensesList from "./ExpensesList";

const DisplayBudget = () => {
    return (
        <div className="card card-body">
            <h4 style={{fontSize: 25, fontWeight: 250, padding: 12}}>What's In Your Wallet Now?</h4>
            <BalanceDisplay />
            <ExpensesList />
        </div>
    )
}

export default DisplayBudget