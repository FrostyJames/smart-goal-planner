import GoalCard from './GoalCard';

function GoalList({ goals, onDelete }) {
  return (
    <div>
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default GoalList;