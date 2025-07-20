import React, { useEffect, useState } from 'react';
import GoalDashboard from './components/GoalDashboard';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import DepositForm from './components/DepositForm';
import axios from 'axios';


function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/goals')
      .then(res => setGoals(res.data));
  }, []);

  const addGoal = async (goal) => {
    const res = await axios.post('http://localhost:3000/goals', goal);
    setGoals([...goals, res.data]);
  };

  const depositToGoal = async (id, amount) => {
    const goal = goals.find(g => g.id === id);
    const updatedAmount = goal.savedAmount + amount;
    await axios.patch(`http://localhost:3000/goals/${id}`, { savedAmount: updatedAmount });
    setGoals(goals.map(g => g.id === id ? { ...g, savedAmount: updatedAmount } : g));
  };
const deleteGoal = async (id) => {
  await axios.delete(`http://localhost:3000/goals/${id}`);
  setGoals(goals.filter(goal => goal.id !== id));
};

  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <GoalDashboard goals={goals} />
      <GoalForm onGoalAdded={addGoal} />
      <DepositForm goals={goals} onDeposit={depositToGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} />
    </div>
  );
}

export default App;
