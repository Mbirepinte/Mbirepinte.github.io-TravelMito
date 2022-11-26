import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loadingPage">
      <div className="loadingPageContainer">
        <div className="loadingTitle">
          <img className="loadingSpan" alt="logo" src="/logo01.png"/>
        </div>
        <div className="loadingLine" />
        <div className="loadingLine" id="secondLoadingLine" />
      </div>
    </div>
  );
}

export default LoadingPage;
