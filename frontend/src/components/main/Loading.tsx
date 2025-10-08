/**
 * =====================================================
 *  NAME    : Loading.tsx
 *  DATE    : 20/09/2025
 *  DATE_MODIFY : 26/09/25
 *  DESCRIPTION : LOADING VIEW FOR WEB
 * =====================================================
 */

// LOADING VIEW
const Loading: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">Buttons</span>
            <span className="word">Text</span>
            <span className="word">Images</span>
            <span className="word">Cards</span>
            <span className="word">Buttons</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
