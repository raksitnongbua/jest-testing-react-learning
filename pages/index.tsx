import Button from '../components/build/Button';
import {
  Button as BaseButton,
  sum,
  sayHello,
} from 'my-components-lib-learning';
const Home = () => {
  console.log(sum(1, 2));
  sayHello();

  return (
    <div>
      <h4>Home</h4>
      <Button onClick={() => {}} />
      <BaseButton label='test' />
    </div>
  );
};

export default Home;
