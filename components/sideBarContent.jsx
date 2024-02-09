const sideBarContent = ({ content }) => {
  return (
    <div className="drawer-container">
      {content && (
        <div>
          <h3>{content.name}</h3>
        </div>
      )}
    </div>
  );
};

export default sideBarContent;
