import "./CreateTodoButtom.css"

function CreateTodoButtom({ setOpenModal }) {
    return (
      <button
      className="CreateTodoButtom"
      onClick={
        () => {
          setOpenModal(prevState => !prevState);
        }
      }
    >+</button>
    );
  }

export {CreateTodoButtom};
