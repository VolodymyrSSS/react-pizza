import React from 'react';
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="584" cy="529" r="20" /> 
      <circle cx="592" cy="528" r="46" /> 
      <circle cx="581" cy="530" r="19" /> 
      <circle cx="138" cy="131" r="115" /> 
      <rect x="36" y="263" rx="6" ry="6" width="222" height="28" /> 
      <rect x="184" y="276" rx="6" ry="6" width="20" height="11" /> 
      <rect x="41" y="303" rx="6" ry="6" width="219" height="77" /> 
      <rect x="49" y="401" rx="6" ry="6" width="64" height="19" /> 
      <rect x="152" y="390" rx="17" ry="17" width="103" height="32" />
    </ContentLoader>
  )
}

export default LoadingBlock;
