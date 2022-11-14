import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = new useUnityContext({
    loaderUrl: "/build/Build/UnityLoader.js",
    dataUrl: "/build/Build/2.data.unityweb",
    frameworkUrl: "/build/Build/2.wasm.framework.unityweb",
    codeUrl: "/build/Build/2.wasm.code.unityweb",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default App;
