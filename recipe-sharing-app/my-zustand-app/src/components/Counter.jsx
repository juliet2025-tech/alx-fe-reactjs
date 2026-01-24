import useCounterStore from '../stores/useCounterStore';

function Counter() {
  const { count, increment, decrement, resetCount } = useCounterStore();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Count: {count}</h1>

      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
