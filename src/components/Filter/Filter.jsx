import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import { getFilter } from 'redux/selectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.target.value));
  return (
    <div className={s.filterWrapper}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
