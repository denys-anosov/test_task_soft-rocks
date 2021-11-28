import React from "react";
import './ConfirmDelete.scss';
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
        'Popup',
        { 'Popup Popup--active': isVisible }
      )}
      onClick={() => setVisibility(false)}
    >
      <div
        className={cn(
          'Popup__content',
          { 'Popup__content Popup__content--active': isVisible }
        )}
        onClick={(event) => event.stopPropagation()}>
        <p className="Popup__heading">Do you confirm deletion?</p>
        <button
          className="Popup__button"
          onClick={() => confirmedDeletionHandler()}
          type="button"
        >
          Yes
        </button>
        <button
          className="Popup__button"
          type="button"
          onClick={() => setVisibility(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
