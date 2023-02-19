import "./HomeFooter.css";

function HomeFooter() {
  return (
    <>
      <footer className="ecran-footer">

        <div className="hp-container">
          <p>HP: 1337/1337</p>
        </div>

        <div className="level-container">
          LEVEL 34:
          <div className="level-bar">
            <div className="level-progress"> </div>
          </div>
        </div>

        <div className="ap-container">
          <p>AP: 9001/9001</p>
        </div>
        
      </footer>
    </>
  );
}

export default HomeFooter;
