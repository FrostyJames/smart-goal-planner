import { useState } from 'react';

function GoalForm({ onGoalAdded }) {
  const [form, setForm] = useState({ name: '', targetAmount: '', category: '', deadline: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...form,
      savedAmount: 0,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };
    onGoalAdded(newGoal);
    setForm({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={form.targetAmount} onChange={e => setForm({ ...form, targetAmount: e.target.value })} placeholder="Target Amount" required />
      <input name="category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} placeholder="Category" required />
      <input name="deadline" type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;