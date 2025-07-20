import NotificationBanner from './NotificationBanner';

function GoalCard({ goal, onDelete }) {
  const progress = ((goal.savedAmount / goal.targetAmount) * 100).toFixed(0);

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}>{progress}%</div>
      </div>
      <p>Deadline: {goal.deadline}</p>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalCard;