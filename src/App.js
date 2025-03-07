import Controllers from './Components/Controllers';
import OrderView from './Containers/OrderView';

function App() {
  return (
    <section className='constructor'>
      <OrderView />
      <Controllers />
    </section>
  );
}

export default App;