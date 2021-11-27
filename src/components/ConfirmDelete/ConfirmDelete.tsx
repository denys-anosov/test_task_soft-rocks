import React from "react";
import './ConfirmDelete.css';
import cn from 'classnames';

interface Props {
  isVisible: boolean,
  setVisibility: (value: boolean) => void,
  onDelete: (selectedUserId: number) => void,
  selectedUserId: number,
}

export const ConfirmDelete: React.FC<Props> = ({
  isVisible,
  setVisibility,
  onDelete,
  selectedUserId,
}) => {

  const confirmedDeletionHandler = () => {
    onDelete(selectedUserId);
    setVisibility(false);
  };
  return (
    <div
      className={cn(
        'popup',
        {'active': isVisible}
      )}
      onClick={() => setVisibility(false)}
    >
      <div
        className={cn(
          'popup__content',
          {'active': isVisible}
        )}
        onClick={(event) => event.stopPropagation()}>
        <p>Do you confirm deletion?</p>
        <button
          onClick={() => confirmedDeletionHandler()}
          type="button"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setVisibility(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
