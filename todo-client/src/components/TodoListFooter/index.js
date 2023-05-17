import { FILTERS } from '../TodoList';

export const TodoListFooter = ({
  activeTodos,
  activeFilter,
  onChangeFilter,
  onClearAllCompleted,
}) => {
  const onFilterSelect = (newFilter) => {
    onChangeFilter(newFilter);
  };

  return (
    <div className="flex flex-row my-4">
      <div className="ml-4">
        {activeTodos} item{activeTodos === 1 ? '' : 's'} left
      </div>
      <div className="flex flex-row gap-x-4 mx-auto">
        <button
          className={`${
            activeFilter === FILTERS.ALL
              ? 'border border-onyx rounded px-2 text-slate'
              : 'text-light-slate'
          }`}
          onClick={() => onFilterSelect(FILTERS.ALL)}
        >
          All
        </button>
        <button
          className={`${
            activeFilter === FILTERS.ACTIVE
              ? 'border border-onyx rounded px-2 text-slate'
              : 'text-light-slate'
          }`}
          onClick={() => onFilterSelect(FILTERS.ACTIVE)}
        >
          Active
        </button>
        <button
          className={`${
            activeFilter === FILTERS.COMPLETED
              ? 'border border-onyx rounded px-2 text-slate'
              : 'text-light-slate'
          }`}
          onClick={() => onFilterSelect(FILTERS.COMPLETED)}
        >
          Completed
        </button>
      </div>
      <button className="mr-4" onClick={onClearAllCompleted}>
        Clear all completed
      </button>
    </div>
  );
};
