function GoalDashboard({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <section>
      <h2>Dashboard</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved.toLocaleString()}</p>
      <p>Goals Completed: {completed}</p>
    </section>
  );
}

export default GoalDashboard;