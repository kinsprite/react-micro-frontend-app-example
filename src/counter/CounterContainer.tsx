import { connect } from 'react-redux';

import {
  onRest, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync, onIncrementThunk,
} from './actionCreators';
import Counter from './Counter';

const mapStateToProps = (state /* , ownProps */) => ({
  counter: state['app-example'].counter.counter, // our app id: 'app-example'
});

const mapDispatchToProps = {
  onRest, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync, onIncrementThunk,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
