const Sea = ({ className }: { className?: string }) => {
  return (
    <div className={`sea ${className}`}>
      <div className='wave back' />
      <div className='wave' />
    </div>
  );
};

export default Sea;
