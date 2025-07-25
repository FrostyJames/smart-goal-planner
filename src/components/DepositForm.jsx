import { useState } from 'react';

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeposit(goalId, parseFloat(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Choose Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Deposit Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;