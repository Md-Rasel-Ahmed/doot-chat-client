function Toast({ toastColor, text }) {
  return (
    <div className="toast toast-top toast-end">
      <div className={`alert ${toastColor}`}>
        <div>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default Toast;
