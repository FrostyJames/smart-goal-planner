function NotificationBanner({ goal }) {
  const now = new Date();
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
  const overdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  const urgent = daysLeft <= 30 && daysLeft > 0 && goal.savedAmount < goal.targetAmount;

  return (
    <>
      {urgent && <p>⚠️ Less than 30 days left!</p>}
      {overdue && <p>❌ This goal is overdue</p>}
    </>
  );
}

export default NotificationBanner;